<template>
  <main>
    <div class="mt-20 mb-20">
      <div class="h-1 w-full bg-white"></div>
      <div class="flex items-center justify-between py-8">
        <div class="h-1 w-8 bg-white sm:w-1/3"></div>
        <div class="flex w-8 justify-around md:w-1/3">
          <h2 class="font-staatliches text-3xl">ARTISTES</h2>
        </div>
        <div class="h-1 w-8 bg-white sm:w-1/3"></div>
      </div>
      <div class="h-1 w-full bg-white"></div>
    </div>
    <p class="mt-28 flex justify-center text-2xl font-bold text-white">EUROPE</p>
    <line class="m-auto mb-20 flex w-48 justify-center border-4 border-solid bg-white"></line>

    <div class="grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
      <RouterLink to="/artiste" v-for="art in Europe" :key="art"><CardArtist :nom="art.nom" :image="art.image" /></RouterLink>
    </div>

    <p class="mt-28 flex justify-center text-2xl font-bold text-white">ASIE</p>
    <line class="m-auto mb-20 flex w-48 justify-center border-4 border-solid bg-white"></line>

    <div class="grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
      <RouterLink to="/artiste" v-for="art in Asie" :key="art"><CardArtist :nom="art.nom" :image="art.image" /></RouterLink>
    </div>

    <p class="mt-28 flex justify-center text-2xl font-bold text-white">AMÉRIQUE DU NORD</p>
    <line class="m-auto mb-20 flex w-48 justify-center border-4 border-solid bg-white"></line>

    <div class="grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
      <RouterLink to="/artiste" v-for="art in AmeriqueNord" :key="art"><CardArtist :nom="art.nom" :image="art.image" /></RouterLink>
    </div>

    <p class="mt-28 flex justify-center text-2xl font-bold text-white">AMÉRIQUE DU SUD</p>
    <line class="m-auto mb-20 flex w-48 justify-center border-4 border-solid bg-white"></line>

    <div class="grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
      <RouterLink to="/artiste" v-for="art in AmeriqueSud" :key="art"><CardArtist :nom="art.nom" :image="art.image" /></RouterLink>
    </div>

    <p class="mt-28 flex justify-center text-2xl font-bold text-white">OCÉANIE</p>
    <line class="m-auto mb-20 flex w-48 justify-center border-4 border-solid bg-white"></line>

    <div class="grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
      <RouterLink to="/artiste" v-for="art in Oceanie" :key="art"><CardArtist :nom="art.nom" :image="art.image" /></RouterLink>
    </div>

    <Bouton
      nom="Achetez vos billet dès maintenant"
      class="m-auto mt-32 flex w-3/6 justify-center border-4 border-black bg-white text-5xl font-extrabold"
    />
    <div class="m-auto my-32 flex justify-center justify-items-center gap-11">
      <a href="artistes"><img class="w-16" src="/icones/arrow-narrow-up.svg" alt="flèche" /></a>
      <a href="artistes"><p class="text-2xl font-bold">Découvrez la programmation pour ce week-end de folie</p></a>
    </div>
  </main>
</template>

<script>
import CardArtist from "../components/Card.vue";
import Bouton from "/src/components/Bouton.vue";
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
    CardArtist,
    Bouton,
  },
  data() {
    return {
      listeArtiste: [],
      qEurope: 5,
      qAsie: 4,
      qOceanie: 6,
      qAfrique: 1,
      qAmeriqueNord: 2,
      qAmeriqueSud: 3,
    };
  },
  mounted() {
    this.getArtiste();
  },
  methods: {
    async getArtiste() {
      const firestore = getFirestore();
      const dbArt = collection(firestore, "Artiste");
      const q = query(dbArt, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtiste = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeArtiste.forEach(function (personne) {
          const storage = getStorage();
          const spaceRef = ref(storage, "Artistes/" + personne.image);
          getDownloadURL(spaceRef)
            .then((url) => {
              personne.image = url;
            })
            .catch((error) => {
              console.log("erreur download url", error);
            });
        });
      });
    },
  },

  computed: {
    Europe() {
      let query = this.qEurope;
      return this.listeArtiste.filter(function (art) {
        return art.continent.includes(query);
      });
    },
    Asie() {
      let query = this.qAsie;
      return this.listeArtiste.filter(function (art) {
        return art.continent.includes(query);
      });
    },
    AmeriqueNord() {
      let query = this.qAmeriqueNord;
      return this.listeArtiste.filter(function (art) {
        return art.continent.includes(query);
      });
    },
    AmeriqueSud() {
      let query = this.qAmeriqueSud;
      return this.listeArtiste.filter(function (art) {
        return art.continent.includes(query);
      });
    },
    Oceanie() {
      let query = this.qOceanie;
      return this.listeArtiste.filter(function (art) {
        return art.continent.includes(query);
      });
    },
  },
};
</script>