<template>
  <h1 class="font-inter text-tonic-200 text-decoration-line: bg-black text-center text-3xl underline">GUIDE DE STYLE</h1>

  <h2 class="bg-tonic-200 font-inter my-10 mx-20 text-center text-2xl">Couleurs</h2>
  <div class="flex">
    <div class="bg-tonic-500 my-3 mx-4 h-12 w-20 rounded-2xl border-black"></div>
    <div class="bg-tonic-300 my-3 mx-4 h-12 w-20 rounded-2xl border-black"></div>
    <div class="bg-tonic-200 my-3 mx-4 h-12 w-20 rounded-2xl border-black"></div>
  </div>
  <h3 class="text-1xl font-inter mx-14 my-7 text-black">Shades of Indigo</h3>
  <div class="m-6 flex">
    <div class="h-10 w-40 rounded-l-lg bg-blue-50"></div>
    <div class="h-10 w-40 bg-indigo-50"></div>
    <div class="h-10 w-40 bg-indigo-100"></div>
    <div class="h-10 w-40 bg-indigo-200"></div>
    <div class="h-10 w-40 rounded-r-lg bg-indigo-300"></div>
  </div>
  <h3 class="text-1xl font-inter mx-14 my-7 text-black">Greyscale</h3>
  <div class="m-6 flex">
    <div class="h-10 w-40 rounded-l-lg bg-gray-50"></div>
    <div class="h-10 w-40 bg-gray-100"></div>
    <div class="h-10 w-40 bg-gray-200"></div>
    <div class="h-10 w-40 bg-gray-300"></div>
    <div class="h-10 w-40 rounded-r-lg bg-gray-400"></div>
  </div>
  <div class="m-6 flex">
    <div class="h-10 w-40 rounded-l-lg bg-gray-500"></div>
    <div class="h-10 w-40 bg-gray-600"></div>
    <div class="h-10 w-40 bg-gray-700"></div>
    <div class="h-10 w-40 bg-gray-800"></div>
    <div class="h-10 w-40 rounded-r-lg bg-gray-900"></div>
  </div>

  <h2 class="bg-tonic-200 font-inter my-10 mx-20 text-center text-2xl">Typographie</h2>
  <div class="m-10">
    <p class="font-inter text-7xl">Heading 1</p>
    <p class="font-inter text-4xl">Heading 2</p>
    <p class="font-inter text-3xl">Heading 3</p>
    <p class="font-inter text-2xl">Heading 4</p>
    <p class="font-inter text-xl">Body xl</p>
    <p class="font-inter text-lg">Body Large</p>
    <p class="font-inter text-base">Body Medium</p>
    <p class="font-inter text-sm">Body small</p>
    <p class="font-inter text-xs">Body XSmall</p>
  </div>
  <h2 class="bg-tonic-200 font-inter my-10 mx-20 text-center text-2xl">Bouton</h2>
  <mon-bouton class="m-10">bouton</mon-bouton>
  <h2 class="bg-tonic-200 font-inter my-10 mx-20 text-center text-2xl">Composants</h2>
  <searchbar class="m-10"></searchbar>
  <moncheckbox class="m-10"></moncheckbox>
  <card></card>
  <h2 class="bg-tonic-200 font-inter my-10 mx-20 text-center text-2xl">Icones</h2>
  <div class="m-10 flex justify-around">
    <HeartIcon class="h-10" />
    <CakeIcon class="h-10" />
    <GiftIcon class="h-10" />
    <LibraryIcon class="h-10" />
    <PuzzleIcon class="h-10" />
  </div>
</template>

<script >
import { HeartIcon } from "@heroicons/vue/solid";
import { CakeIcon } from "@heroicons/vue/outline";
import { GiftIcon } from "@heroicons/vue/outline";
import { LibraryIcon } from "@heroicons/vue/outline";
import { PuzzleIcon } from "@heroicons/vue/outline";
import MonBouton from "./components/MonBouton.vue";
import Searchbar from "./components/Searchbar.vue";
import Moncheckbox from "./components/Moncheckbox.vue";
import Card from "./components/Card.vue";
export default {
  components: {
    MonBouton,
    Searchbar,
    Moncheckbox,
    HeartIcon,
    CakeIcon,
    Card,
    GiftIcon,
    LibraryIcon,
    PuzzleIcon,
  },
  name: "App",
};
</script> 