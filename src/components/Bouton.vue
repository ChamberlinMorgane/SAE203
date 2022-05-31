<template>
  <div class="w-6/6 my-7 flex justify-center gap-7 overflow-hidden rounded-[48px] bg-red-400 px-10 py-6">
    <p class="w-1/3 flex-grow text-center font-bebas-neue text-xl font-bold text-black">{{ nom }}</p>
  </div>
</template>

<script>
export default {
  /* Les "props" servent à définir les "attributs" qui seront passés a l'instance du composant pour le personnalisé.
  Chaque "props" a un nom et un type */
  props: {
    nom: String,
  },
  components: {},
};
</script>