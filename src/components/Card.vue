<template>
  <div class="max-w-xs rounded-xl bg-cyan-800 sm:max-w-lg lg:max-w-2xl">
    <div class="container mx-auto">
      <div class="block">
        <div class="flex flex-col">
          <div class="p-4">
            <img class="rounded-sm" :src="image" alt="artiste" />
          </div>
          <figcaption class="p-4 text-center">
            <h3 class="py-1 font-permanent-marker text-2xl font-semibold">{{ nom }}</h3>
            <p class="">EN SAVOIR PLUS</p>
          </figcaption>
        </div>
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