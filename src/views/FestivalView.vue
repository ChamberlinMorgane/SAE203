<template>
  <div class="mt-20 mb-20">
    <div class="h-1 w-full bg-white"></div>
    <div class="flex items-center justify-between py-8">
      <div class="h-1 w-1/3 bg-white"></div>
      <div class="flex w-1/3 justify-around">
        <h2 class="font-staatliches text-3xl">FESTIVAL</h2>
      </div>
      <div class="h-1 w-1/3 bg-white"></div>
    </div>
    <div class="h-1 w-full bg-white"></div>
  </div>

  <img class="m-auto flex h-2/6 w-3/6 justify-center" src="src/assets/images/plan.jpg" alt="plan du festival" />
  <p class="m-auto mt-11 flex justify-center text-2xl font-bold">Découvrez nos 3 grandes scene et nos deux petite</p>
  <p class="m-auto mt-11 flex justify-center text-3xl font-bold">Les grandes scènes</p>
  <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
    <div>
      <img class="mt-20 h-5/6 w-5/6" src="src/assets/images/scenenord.jpg" alt="scene nord" />
      <Bouton nom="Scène Nord" class="m-auto w-1/2 justify-center" />
    </div>
    <div>
      <img class="mt-20 h-5/6 w-5/6" src="src/assets/images/scenesud.jpg" alt="scene sud" />
      <Bouton nom="Scène Sud" class="m-auto w-1/2 justify-center bg-yellow-400" />
    </div>
    <div>
      <img class="mt-20 h-5/6 w-5/6" src="src/assets/images/sceneest.jpg" alt="scene est" />
      <Bouton nom="Scène Est" class="m-auto w-1/2 justify-center bg-green-400" />
    </div>
  </div>

  <p class="relative m-auto mt-32 flex justify-center text-3xl font-bold">Les petites scènes</p>

  <div class="grid grid-cols-1 lg:w-4/6 lg:grid-cols-2">
    <div>
      <img class="mt-11 h-5/6 w-5/6" src="src/assets/images/scenecentre.jpg" alt="scene centre" />
      <Bouton nom="Scène Centre" class="m-auto w-1/2 justify-center bg-pink-400" />
    </div>

    <div>
      <img class="mt-11 h-5/6 w-5/6" src="src/assets/images/sceneouest.jpg" alt="scene ouest" />
      <Bouton nom="Scène Ouest" class="m-auto w-1/2 justify-center bg-blue-400" />
    </div>
  </div>

  <p>Notre équipe qui s'est occupé de mettre en oeuvre ce fantastiqur festival</p>
  <img src="src/assets/images/personne1.jpg" alt="premiere personne" />
  <img src="src/assets/images/personne2.jpg" alt="deuxième personne" />
  <img src="src/assets/images/personne3.jpg" alt="troisième personne" />
  <img src="src/assets/images/personne4.jpg" alt="quatrième personne" />
  <img src="src/assets/images/personne5.jpg" alt="cinquième personne" />
  <img src="src/assets/images/personne6.jpg" alt="sixième personne" />
  <img src="src/assets/images/personne7.jpg" alt="septième personne" />
</template>

<script>
import Bouton from "../components/Bouton.vue";
export default {
  components: {
    Bouton,
  },
};
</script>