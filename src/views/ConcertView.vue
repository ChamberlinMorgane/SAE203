<template>
  <div class="mt-20 mb-20">
    <div class="h-1 w-full bg-white"></div>
    <div class="flex items-center justify-between py-8">
      <div class="h-1 w-1/3 bg-white"></div>
      <div class="flex w-1/3 justify-around">
        <h2 class="font-staatliches text-3xl">CONCERT</h2>
      </div>
      <div class="h-1 w-1/3 bg-white"></div>
    </div>
    <div class="h-1 w-full bg-white"></div>
  </div>

  <img class="h-2/6 w-full" src="src/assets/images/angele-concert.jpg" alt="angele" />
  <div class="ml-auto mr-44 h-auto w-1/5 bg-gray-300">
    <p class="py:11 px-12 font-work-sans text-sm font-bold text-black lg:py-28 lg:text-2xl">
      Retrouvez Angele le 1er et le 3 Juillet prochain dans la grande scene Est à 21h pour un concert de dingue
    </p>
    <div class="m-auto flex w-4 justify-center gap-11 lg:w-9">
      <img src="src/assets/icones/spotify.svg" alt="spotify" />
      <img src="src/assets/icones/insta-noir.svg" alt="instagram" />
      <img src="src/assets/icones/twitter-noir.svg" alt="twitter" />
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2">
    <img src="src/assets/images/angele4.jpg" />
    <img src="src/assets/images/angele3.jpg" />
    <img src="src/assets/images/angele1.jpg" />
    <img src="src/assets/images/angele2.jpg" />
  </div>

  <div class="relative m-auto mt-28 mb-24 flex h-[174px] w-4/6 justify-center overflow-hidden">
    <div class="relative h-5/6 w-4/6 bg-white"></div>
    <p class="absolute top-16 ml-auto w-2/6 text-center font-bebas-neue text-xl text-gray-900 lg:text-4xl">
      6 000 000 d’auditeurs par mois
    </p>
    <img src="src/assets/icones/spotify-color.svg" class="absolute top-6 mr-80 h-24 w-24 object-cover font-bold lg:h-32 lg:w-32" />
  </div>
  <p class="m-auto flex justify-center text-2xl">RETROUVEZ D’AUTRES ARTISTES LES MEMES JOURS QU’ELLE !!!</p>
  <div class="m-auto flex h-2 w-3/6 justify-center bg-purple-700"></div>

  <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
    <div>
      <CardArtist class="mb-10 mt-20" nom="DOJA CAT" image="/src/assets/images/cardib.jpg" />
    </div>
    <div>
      <CardArtist class="mb-10 mt-20" nom="COLDPLAY" image="/src/assets/images/coldplay.jpg" />
    </div>
    <div>
      <CardArtist class="mb-10 mt-20" nom="SIA" image="/src/assets/images/sia.jpg" />
    </div>
    <div>
      <CardArtist class="mb-10" nom="DAVID GUETTA" image="/src/assets/images/davidguetta.jpg" />
    </div>
    <div>
      <CardArtist class="mb-10" nom="ED SHEERAN" image="/src/assets/images/edsheeran.jpg" />
    </div>
    <div>
      <CardArtist class="mb-10" nom="DADDY YANKEE" image="/src/assets/images/daddyyankee.jpg" />
    </div>
    <div>
      <CardArtist class="mb-10" nom="OLIVIA RODRIGO" image="/src/assets/images/oliviarudberg.jpg" />
    </div>
    <div>
      <CardArtist class="mb-10" nom="OMAR RUDBERG" image="/src/assets/images/omarudberg.jpg" />
    </div>
    <div>
      <CardArtist class="mb-10" nom="BIBI" image="/src/assets/images/bibi.jpg" />
    </div>
    <div>
      <CardArtist class="mb-10" nom="CHANMINA" image="/src/assets/images/chanmina.jpg" />
    </div>
    <div>
      <CardArtist class="mb-10" nom="FALLY IPUPA" image="/src/assets/images/faillyipupa.jpg" />
    </div>
  </div>
</template>

<script>
import CardArtist from "../components/Card.vue";
export default {
  components: {
    CardArtist,
  },
};
</script>