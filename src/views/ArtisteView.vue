<template>
  <div class="mt-20 mb-20">
    <div class="h-1 w-full bg-white"></div>
    <div class="flex items-center justify-between py-8">
      <div class="h-1 w-8 bg-white sm:w-1/3"></div>
      <div class="flex w-8 justify-around md:w-1/3">
        <h2 class="font-staatliches text-3xl">ARTISTE</h2>
      </div>
      <div class="h-1 w-8 bg-white sm:w-1/3"></div>
    </div>
    <div class="h-1 w-full bg-white"></div>
  </div>

  <img src="/img/angele-artiste.jpg" alt="angele " />
  <div class="relative m-auto flex h-auto w-4/6 flex-wrap justify-center bg-purple-300">
    <div>
      <p class="m-auto flex w-4/6 justify-center pt-11 text-center font-work-sans text-lg font-black text-black">
        Belgique / 1-3 juillet / Grande scène Est
      </p>
      <p class="m-auto flex w-4/6 justify-center pt-11 text-center font-work-sans text-lg text-black">
        Après le triomphe de son nouvel album tant attendu “Nonente cinq” sortie en décembre dernier Angèle et ses titres engagés sait se
        faire adorer par tous. Son premier album “BROL” certifié disque d’or fait d’Angèle une figure francophone incontestable de la pop.
        Seule ou en feat avec Dua lipa ou Dadju, Angèle se montre polyvalente musicalement et toujours au top.
      </p>
    </div>
    <div class="ljustify-center m-auto mt-16 mb-12 flex gap-16">
      <a href="https://open.spotify.com/artist/3QVolfxko2UyCOtexhVTli"><img src="/icones/spotify.svg" alt="spotify" /></a>
      <a href="https://twitter.com/angele_vl"><img src="/icones/twitter-noir.svg" alt="twitter" /></a>
      <a href="https://www.instagram.com/angele_vl/"><img src="/icones/insta-noir.svg" alt="instagram" /></a>
    </div>
    <p class="mr-10 ml-10 text-center font-work-sans text-black">
      retrouver Angèle le 1 er et le 3 juillet sur la grande scène de notre festival pour un concert fantatique de la jeune belge
    </p>
  </div>
  <a href="https://youtu.be/Hi7Rx3En7-k"><img class="m-auto mt-24 flex w-2/3 justify-center" src="/img/vidéo.jpg" alt="video angele" /></a>
  <a href="artistes"><Bouton nom="AUTRES ARTISTES" class="m-auto flex w-2/5 justify-center rounded-lg bg-orange-300" /></a>
</template>
<script>
import Bouton from "/src/components/Bouton.vue";

export default {
  components: { Bouton },
};
</script>