<template>
  <div class="relative mt-12 flex h-[80vh] flex-col justify-center gap-20 px-5">
    <form @submit.prevent="deleteArtistepref">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="grid place-items-center">
          <img :src="photoActuelle" class="w-1/2" />
        </div>
        <div class="grid grid-cols-1 gap-14">
          <div class="flex h-10 overflow-hidden rounded-sm text-black">
            <div class="flex items-center justify-center border-[1px] bg-cyan-600 px-5">Nom</div>
            <input class="w-full bg-slate-100 pl-2" type="text" placeholder="Nom de l'artiste" v-model="artistepref.nom" disabled />
          </div>
        </div>
      </div>
      <div class="grid w-full grid-cols-2 place-items-center">
        <button class="w-fit bg-slate-100 px-6 py-3" type="submit">Supprimer</button>
        <button class="w-fit bg-slate-100 px-6 py-3" type="button"><RouterLink to="/choixartiste">Annuler</RouterLink></button>
      </div>
    </form>
  </div>
</template>
<script>
import { getFirestore, doc, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { getStorage, ref, getDownloadURL, uploadString, deleteObject } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";
export default {
  data() {
    return {
      artistepref: {
        nom: null,
        image: null,
      },

      refArtistepref: null,
      photoActuelle: null,
    };
  },
  mounted() {
    this.getArtistepref(this.$route.params.id);
  },
  methods: {
    async getArtistepref(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artistepref", id);
      this.refArtistepref = await getDoc(docRef);
      if (this.refArtistepref.exists()) {
        this.artistepref = this.refArtistepref.data();
        this.photoActuelle = this.artistepref.image;
      } else {
        this.console.log("artistepref inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "artistepref/" + this.artistepref.image);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.photoActuelle = url;
        })
        .catch((error) => {
          console.log("erreur downloadurl", error);
        });
    },

    async deleteArtistepref() {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, "artistepref", this.$route.params.id));
      const storage = getStorage();
      let docRef = ref(storage, "artistepref/" + this.artistepref.image);
      deleteObject(docRef);
      this.$router.push("/choixartiste");
    },
  },
};
</script>
