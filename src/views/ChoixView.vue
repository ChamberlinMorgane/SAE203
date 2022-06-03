<template>
  <div class="mt-20 mb-20">
    <div class="h-1 w-full bg-white"></div>
    <div class="flex items-center justify-between py-8">
      <div class="h-1 w-8 bg-white sm:w-1/3"></div>
      <div class="flex w-8 justify-around md:w-1/3">
        <h2 class="font-staatliches text-3xl">A VOUS DE FAIRE</h2>
      </div>
      <div class="h-1 w-8 bg-white sm:w-1/3"></div>
    </div>
    <div class="h-1 w-full bg-white"></div>
  </div>
  <h2 class="font-source-sans-pro m-auto w-4/5 text-base">Ajoutée son style de musique préféré</h2>
  <div class="mx-auto grid w-4/5 grid-cols-3">
    <div class="flex h-10 overflow-hidden rounded-l-sm">
      <div class="bg-true-gray-25 flex items-center justify-center border-[1px] px-5">Nom</div>
      <input class="w-full text-black" type="text" placeholder="Nom du style" v-model="nom" required />
    </div>
    <button type="button" @click.prevent="createMusique()"><SaveIcon class="w-7" /></button>
  </div>
  <h3 class="font-source-sans-pro m-auto w-4/5 text-base">Ajoutée son style de musique préféré</h3>
  <div class="mx-auto grid w-4/5 grid-cols-3" v-for="musique in listeMusique" :key="musique">
    <div class="flex h-10 overflow-hidden rounded-l-sm">
      <div class="bg-true-gray-25 flex items-center justify-center border-[1px] px-5">Nom</div>
      <input class="w-full text-black" type="text" placeholder="Nom du style" v-model="musique.nom" required />
    </div>

    <div class="flex w-fit gap-3 px-3 text-black">
      <button type="button" @click.prevent="updateMusique(musique)"><SaveIcon class="w-7 text-white" /></button>
      <button type="button" @click.prevent="deleteMusique(musique)"><TrashIcon class="w-7 text-white" /></button>
    </div>
  </div>
</template>
<script>
// Bibliothèque Firestore : import des fonctions
import {
  query,
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { SaveIcon, TrashIcon } from "@heroicons/vue/outline";

export default {
  name: "ListeView",
  data() {
    return {
      listeMusique: [],
      nom: null,
      filter: "",
    };
  },
  components: { SaveIcon, TrashIcon },

  mounted() {
    // Montage de la vue
    // Appel de la liste des categories synchronisée
    this.getMusique();
  },
  methods: {
    async getMusique() {
      const firestore = getFirestore();
      const dbMusique = collection(firestore, "Musique");
      const q = query(dbMusique, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeMusique = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    },
    async createMusique() {
      const firestore = getFirestore();
      const dbTick = collection(firestore, "Musique");
      const docRef = await addDoc(dbTick, {
        nom: this.nom,
      });
      console.log("document créé avec le id : ", docRef.id);
    },
    async updateMusique(musique) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "Musique", musique.id);
      await updateDoc(docRef, {
        nom: musique.nom,
      });
    },
    async deleteMusique(musique) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "Musique", musique.id);
      await deleteDoc(docRef);
    },
  },
};
</script>

<style scoped>
</style>
