<template>
  <main class="dark:bg-colors-black-gray">
    <div class="flex items-center justify-between py-8 dark:text-white">
      <div class="h-1 w-1/3 bg-yellow-500"></div>
      <div class="flex w-1/3 justify-around">
        <h2 class="font-staatliches text-xl">Quel est ton artiste préféré</h2>
      </div>
      <div class="h-1 w-1/3 bg-yellow-500"></div>
    </div>
    <div class="grid grid-cols-1 gap-8 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <RouterLink to="/artiste" v-for="art in listeArtistepref" :key="art"
        ><card-3 :nom="art.nom" :image="art.image">
          <RouterLink :to="{ name: 'Update', params: { id: art.id } }"><PencilAltIcon class="h-5 rounded-l-sm bg-white" /></RouterLink>
          <RouterLink :to="{ name: 'Delete', params: { id: art.id } }"><TrashIcon class="h-5 rounded-r-sm bg-white" /></RouterLink> </card-3
      ></RouterLink>
      <RouterLink to="createview"><PlusCircleIcon /></RouterLink>
    </div>
  </main>
</template>

<script>
import Card3 from "../components/Card3.vue";
import { TrashIcon, PencilAltIcon, PlusCircleIcon } from "@heroicons/vue/outline";
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
    Card3,
    TrashIcon,
    PencilAltIcon,
    PlusCircleIcon,
  },
  data() {
    return {
      listeArtistepref: [],
    };
  },
  mounted() {
    this.getArtistepref();
  },
  methods: {
    async getArtistepref() {
      const firestore = getFirestore();
      const dbArt = collection(firestore, "artistepref");
      const q = query(dbArt, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtistepref = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeArtistepref.forEach(function (personne) {
          const storage = getStorage();
          const spaceRef = ref(storage, "artistepref/" + personne.image);
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
    searchByDay() {
      let query = this.query;
      return this.ListeArtistepref.filter(function (art) {
        return art.jour.includes(query);
      });
    },
  },
};
</script>
