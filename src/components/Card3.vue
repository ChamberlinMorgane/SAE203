<template>
  <div class="max-w-xs rounded-xl sm:max-w-lg lg:max-w-2xl">
    <div class="container mx-auto">
      <div class="block">
        <div class="flex flex-col">
          <div class="p-4">
            <img class="rounded-sm" :src="image" alt="artiste" />
          </div>
          <figcaption class="p-4 text-center">
            <h3 class="py-1 font-permanent-marker text-2xl font-semibold">{{ nom }}</h3>
            <a :href="'update/' + id"><PencilAltIcon class="h-5 rounded-l-sm" /></a>
            <a :href="'delete/' + id"><TrashIcon class="h-5 rounded-r-sm" /></a>

            <!-- <RouterLink :to="{ name: 'Update', params: { id: id } }"><PencilAltIcon class="h-5 rounded-l-sm" /></RouterLink>
            <RouterLink :to="{ name: 'Delete', params: { id: id } }"><TrashIcon class="h-5 rounded-r-sm" /></RouterLink> -->
          </figcaption>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { PencilAltIcon, TrashIcon } from "@heroicons/vue/outline";
export default {
  /* Les "props" servent à définir les "attributs" qui seront passés a l'instance du composant pour le personnalisé.
  Chaque "props" a un nom et un type */
  props: {
    nom: String,
    image: String,
    id: String,
  },
  components: {
    PencilAltIcon,
    TrashIcon,
  },
};
</script>