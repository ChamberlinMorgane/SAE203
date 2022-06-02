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

  <img class="h-2/6 w-full" src="/img/angele-concert.jpg" alt="angele" />
  <div class="mt-15 ml-auto mb-11 h-auto w-auto bg-gray-300 lg:mr-44">
    <p class="py:11 px-12 font-work-sans text-sm font-bold text-black lg:py-28 lg:text-2xl">
      Retrouvez Angele le 1er et le 3 Juillet prochain dans la grande scene Est à 21h pour un concert de dingue
    </p>
    <div class="m-auto flex justify-center gap-5">
      <a href="https://open.spotify.com/artist/3QVolfxko2UyCOtexhVTli"
        ><img class="h-4 w-4 lg:h-9 lg:w-9" src="/icones/spotify.svg" alt="spotify"
      /></a>
      <a href="https://www.instagram.com/angele_vl/"><img class="h-4 w-4 lg:h-9 lg:w-9" src="/icones/insta-noir.svg" alt="instagram" /></a>
      <a href="https://twitter.com/angele_vl"><img class="h-4 w-4 lg:h-9 lg:w-9" src="/icones/twitter-noir.svg" alt="twitter" /></a>
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2">
    <img src="/img/angele4.jpg" />
    <img src="/img/angele3.jpg" />
    <img src="/img/angele1.jpg" />
    <img src="/img/angele2.jpg" />
  </div>
  <a href="https://open.spotify.com/artist/3QVolfxko2UyCOtexhVTli"
    ><img class="m-auto mt-36 mb-32 flex w-5/6 justify-center lg:w-2/6" src="/img/SPOTIFY.jpg" alt="card spotify"
  /></a>
  <p class="m-auto flex justify-center text-center text-2xl">RETROUVEZ D’AUTRES ARTISTES LES MEMES JOURS QU’ELLE !!!</p>
  <div class="m-auto flex h-2 w-3/6 justify-center bg-purple-700"></div>

  <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
    <div>
      <CardArtist class="mb-10 mt-20" nom="DOJA CAT" image="/img/cardib.jpg" />
    </div>
    <div>
      <CardArtist class="mb-10 mt-20" nom="COLDPLAY" image="/img/coldplay.jpg" />
    </div>
    <div>
      <CardArtist class="mb-10 mt-20" nom="SIA" image="/img/sia.jpg" />
    </div>
    <div>
      <CardArtist class="mb-10" nom="DAVID GUETTA" image="/img/davidguetta.jpg" />
    </div>
    <div>
      <CardArtist class="mb-10" nom="ED SHEERAN" image="/img/edsheeran.jpg" />
    </div>
    <div>
      <CardArtist class="mb-10" nom="DADDY YANKEE" image="/img/daddyyankee.jpg" />
    </div>
    <div>
      <CardArtist class="mb-10" nom="OLIVIA RODRIGO" image="/img/oliviarudberg.jpg" />
    </div>
    <div>
      <CardArtist class="mb-10" nom="OMAR RUDBERG" image="/img/omarudberg.jpg" />
    </div>
    <div>
      <CardArtist class="mb-10" nom="BIBI" image="/img/bibi.jpg" />
    </div>
    <div>
      <CardArtist class="mb-10" nom="CHANMINA" image="/img/chanmina.jpg" />
    </div>
    <div>
      <CardArtist class="mb-10" nom="FALLY IPUPA" image="/img/faillyipupa.jpg" />
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