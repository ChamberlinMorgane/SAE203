<template>
  <main>
    <div class="mt-20 mb-20">
      <div class="h-1 w-full bg-white"></div>
      <div class="flex items-center justify-between py-8">
        <div class="h-1 w-8 bg-white sm:w-1/3"></div>
        <div class="flex w-8 justify-around md:w-1/3">
          <h2 class="font-staatliches text-3xl">CONCERT</h2>
        </div>
        <div class="h-1 w-8 bg-white sm:w-1/3"></div>
      </div>
      <div class="h-1 w-full bg-white"></div>
    </div>

    <img class="h-2/6 w-full" src="/img/angele-concert.jpg" alt="angele" />
    <div class="mt-15 ml-auto mb-11 h-auto w-auto bg-gray-300 lg:mr-44">
      <p class="py:11 px-12 font-work-sans text-sm font-bold text-black lg:py-28 lg:text-2xl">
        Retrouvez Angele le 1er et le 3 Juillet prochain dans la grande scene Est à 21h pour un concert de dingue
      </p>
      <div class="m-auto flex justify-center gap-5">
        <a href="https://open.spotify.com/artist/3QVolfxko2UyCOtexhVTli"
          ><img class="h-4 w-4 lg:h-9 lg:w-9" src="/icones/spotify.svg" alt="spotify"
        /></a>
        <a href="https://www.instagram.com/angele_vl/"
          ><img class="h-4 w-4 lg:h-9 lg:w-9" src="/icones/insta-noir.svg" alt="instagram"
        /></a>
        <a href="https://twitter.com/angele_vl"><img class="h-4 w-4 lg:h-9 lg:w-9" src="/icones/twitter-noir.svg" alt="twitter" /></a>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <img src="/img/angele4.jpg" />
      <img src="/img/angele3.jpg" />
      <img src="/img/angele1.jpg" />
      <img src="/img/angele2.jpg" />
    </div>
    <a href="https://open.spotify.com/artist/3QVolfxko2UyCOtexhVTli"
      ><img class="m-auto mt-36 mb-32 flex w-5/6 justify-center lg:w-2/6" src="/img/SPOTIFY.jpg" alt="card spotify"
    /></a>
    <p class="m-auto flex justify-center text-center text-2xl">RETROUVEZ LES AUTRES CONCERT DU WEEK-END !!!</p>
    <div class="m-auto flex h-2 w-3/6 justify-center bg-purple-700"></div>
    <div class="mt-14 mb-14 grid grid-cols-1 justify-items-center gap-y-14 lg:grid-cols-2 xl:grid-cols-3">
      <RouterLink to="/atiste" v-for="con in listeConcert" :key="con"
        ><Card2 :nom="con.nom" :image="con.image" :dates="con.dates" :scene="con.scene"
      /></RouterLink>
    </div>
  </main>
</template>

 

<script>
import Card2 from "../components/Card2.vue";

import {
  getFirestore,
  collection,
  doc,
  query,
  orderBy,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

export default {
  components: {
    Card2,
  },
  data() {
    return {
      listeConcert: [],
    };
  },
  mounted() {
    this.getConcert();
  },
  methods: {
    async getConcert() {
      const firestore = getFirestore();
      const dbCon = collection(firestore, "Concert");
      const q = query(dbCon, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeConcert = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeConcert.forEach(function (personne) {
          const storage = getStorage();
          const spaceRef = ref(storage, "Concert/" + personne.image);
          getDownloadURL(spaceRef)
            .then((url) => {
              personne.image = url;
            })
            .catch((error) => {
              console.log("erreur download url", error);
            });
        });
        console.log("liste des concerts", this.listeConcert);
      });
    },
  },

  computed: {},
};
</script>