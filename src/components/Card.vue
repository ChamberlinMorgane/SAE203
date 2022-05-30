<template>
  <div class="ml-7 mr-7 grid grid-cols-2 gap-11">
    <div class="relative flex flex-grow flex-col items-center justify-start gap-5 rounded-[18px] bg-cyan-600 py-2">
      <img class="h-[241px] w-[404.44px] flex-shrink-0 flex-grow-0 rounded-[32px] object-cover" :src="image" />
      <p class="h-11 w-[463.78px] flex-shrink-0 flex-grow-0 self-stretch text-center text-3xl text-white"></p>
      <div class="relative flex w-[466px] flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-[5px] overflow-hidden pb-[5px]">
        <span class="h-11 w-[466px] flex-shrink-0 flex-grow-0 text-center text-[25px] font-bold text-white">{{ nom }}</span
        ><br />
        <p class="h-11 w-[466px] flex-shrink-0 flex-grow-0 text-center text-[25px] font-bold text-white">EN SAVOIR PLUS</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /* Les "props" servent à définir les "attributs" qui seront passés a l'instance du composant pour le personnalisé.
  Chaque "props" a un nom et un type */
  props: {
    nom: String,
    image: String,
  },
  components: {},
};
</script>