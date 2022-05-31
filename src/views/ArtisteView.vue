<template>
  <div class="mt-20 mb-20">
    <div class="h-1 w-full bg-white"></div>
    <div class="flex items-center justify-between py-8">
      <div class="h-1 w-1/3 bg-white"></div>
      <div class="flex w-1/3 justify-around">
        <h2 class="font-staatliches text-3xl">ARTISTE</h2>
      </div>
      <div class="h-1 w-1/3 bg-white"></div>
    </div>
    <div class="h-1 w-full bg-white"></div>
  </div>

  <img src="src/assets/images/angele-artiste.jpg" alt="angele " />
  <div class="relative m-auto flex h-96 w-4/6 flex-wrap justify-center bg-purple-300">
    <div>
      <p class="m-auto flex w-4/6 justify-center pt-20 text-center text-lg text-black">Belgique / 1-3 juillet / Grande scène Est</p>
      <p class="m-auto flex w-4/6 justify-center pt-11 text-center text-lg text-black">
        Après le triomphe de son nouvel album tant attendu “Nonente cinq” sortie en décembre dernier Angèle et ses titres engagés sait se
        faire adorer par tous. Son premier album “BROL” certifié disque d’or fait d’Angèle une figure francophone incontestable de la pop.
        Seule ou en feat avec Dua lipa ou Dadju, Angèle se montre polyvalente musicalement et toujours au top.
      </p>
    </div>
    <div class="flex w-10 gap-16">
      <img src="src/assets/icones/spotify.svg" alt="spotify" />
      <img src="src/assets/icones/twitter-noir.svg" alt="twitter" />
      <img src="src/assets/icones/insta-noir.svg" alt="instagram" />
    </div>
  </div>
  <a href="https://youtu.be/Hi7Rx3En7-k"
    ><img class="m-auto mt-24 flex w-1/3 justify-center" src="src/assets/images/vidéo.jpg" alt="video angele"
  /></a>
  <a href="artistes"><Bouton nom="AUTRES ARTISTES" class="m-auto flex w-2/5 justify-center rounded-lg bg-orange-300" /></a>
</template>
<script>
import Bouton from "/src/components/Bouton.vue";

export default {
  components: { Bouton },
};
</script>