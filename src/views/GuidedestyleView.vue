<template>
  <h1 class="font-inter text-tonic-200 text-decoration-line: mt-48 text-center text-3xl underline">GUIDE DE STYLE</h1>

  <h2 class="font-inter my-10 w-full bg-blue-200 text-center text-4xl text-black">Couleurs</h2>
  <div class="grid grid-cols-2 justify-items-center">
    <div class="my-3 mx-4 h-12 w-20 rounded-2xl border-white bg-gray-800"></div>
    <div class="my-3 mx-4 h-12 w-20 rounded-2xl border-yellow-500 bg-yellow-100"></div>
    <div class="my-3 mx-4 h-12 w-20 rounded-2xl border-black bg-amber-600"></div>
    <div class="my-3 mx-4 h-12 w-20 rounded-2xl border-black bg-red-500"></div>
    <div class="my-3 mx-4 h-12 w-20 rounded-2xl border-black bg-violet-700"></div>
    <div class="my-3 mx-4 h-12 w-20 rounded-2xl border-black bg-violet-300"></div>
    <div class="my-3 mx-4 h-12 w-20 rounded-2xl border-black bg-red-300"></div>
    <div class="my-3 mx-4 h-12 w-20 rounded-2xl border-black bg-yellow-200"></div>
    <div class="my-3 mx-4 h-12 w-20 rounded-2xl border-black bg-white"></div>
    <div class="my-3 mx-4 h-12 w-20 rounded-2xl border-black bg-purple-300"></div>
    <div class="my-3 mx-4 h-12 w-20 rounded-2xl border-black bg-gray-300"></div>
    <div class="my-3 mx-4 h-12 w-20 rounded-2xl border-black bg-purple-700"></div>
    <div class="my-3 mx-4 h-12 w-20 rounded-2xl border-red-500 bg-gray-200"></div>
    <div class="my-3 mx-4 h-12 w-20 rounded-2xl border-black bg-yellow-200"></div>
    <div class="my-3 mx-4 h-12 w-20 rounded-2xl border-black bg-yellow-200"></div>
    <div class="my-3 mx-4 h-12 w-20 rounded-2xl border-black bg-yellow-200"></div>
  </div>

  <h2 class="font-inter my-10 w-full bg-blue-200 text-center text-4xl text-black">Typographie</h2>
  <div class="m-auto flex-grow justify-center">
    <p class="font-work-sans">Heading 1</p>
    <p class="font-bebas-neue">Heading 2</p>
    <p class="font-work-sans font-extrabold">Button</p>
    <p class="font-permanent-marker text-base">Body Medium</p>
    <p class="font-work-sans text-xl">Body xl</p>
    <p class="font-work-sans text-lg">Body Large</p>
    <p class="font-work-sans text-sm">Body small</p>
    <p class="font-word-sans text-xs">Body XSmall</p>
  </div>

  <h2 class="font-inter my-10 w-full bg-blue-200 text-center text-4xl text-black">Composants</h2>

  <Bouton nom="achetez vos billets" class="mb-36" />
  <Card nom="nom de l'artiste" class="mb-36" />
  <Footer class="mb-36" />
  <FooterTel />
  <Header class="mb-36" />
  <Headermobile class="mb-36" />

  <h2 class="font-inter my-10 w-full bg-blue-200 text-center text-4xl text-black">Icones</h2>
  <div class="grid w-64 grid-cols-4 justify-items-center gap-12">
    <img src="src/assets/icones/arrow-narrow-up.svg" alt="fleche" />
    <img src="src/assets/icones/facebook-app-symbol.svg" alt="facebook blanc" />
    <img src="src/assets/icones/insta-noir.svg" alt="instagram-noir" />
    <img src="src/assets/icones/instagram.svg" alt="instagram blanc" />
    <img src="src/assets/icones/spotify-color.svg" alt="spotify couleur" />
    <img src="src/assets/icones/spotify.svg" alt="spotify noir" />
    <img src="src/assets/icones/twitter-noir.svg" alt="twitter noir" />
    <img src="src/assets/icones/twitter.svg" alt="twitter blanc" />
  </div>
</template>

<script >
import Card from "../components/Card.vue";
import Bouton from "../components/Bouton.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Headermobile from "../components/Headermobile.vue";
export default {
  components: {
    Bouton,
    Card,
    Footer,
    Header,
    Headermobile,
  },
  name: "App",
};
</script> 