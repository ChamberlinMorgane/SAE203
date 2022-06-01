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

  <img class="m-auto flex h-2/6 w-3/6 justify-center" src="/img/plan.jpg" alt="plan du festival" />
  <p class="m-auto mt-11 flex justify-center text-2xl font-bold">Découvrez nos 3 grandes scene et nos deux petite</p>
  <p class="m-auto mt-11 flex justify-center text-3xl font-bold">Les grandes scènes</p>
  <div class="grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
    <div>
      <img class="mt-20 h-5/6 w-5/6" src="/img/scenenord.jpg" alt="scene nord" />
      <Bouton nom="Scène Nord" class="m-auto w-1/2 justify-center" />
    </div>
    <div>
      <img class="mt-20 h-5/6 w-5/6" src="/img/scenesud.jpg" alt="scene sud" />
      <Bouton nom="Scène Sud" class="m-auto w-1/2 justify-center bg-yellow-400" />
    </div>
    <div>
      <img class="mt-20 h-5/6 w-5/6" src="/img/sceneest.jpg" alt="scene est" />
      <Bouton nom="Scène Est" class="m-auto w-1/2 justify-center bg-green-400" />
    </div>
  </div>

  <p class="relative m-auto mt-32 flex justify-center text-3xl font-bold">Les petites scènes</p>

  <div class="grid grid-cols-1 justify-items-center lg:w-4/6 lg:grid-cols-2">
    <div>
      <img class="mt-11 h-5/6 w-5/6" src="/img/scenecentre.jpg" alt="scene centre" />
      <Bouton nom="Scène Centre" class="m-auto w-1/2 justify-center bg-pink-400" />
    </div>

    <div>
      <img class="mt-11 h-5/6 w-5/6" src="/img/sceneouest.jpg" alt="scene ouest" />
      <Bouton nom="Scène Ouest" class="m-auto w-1/2 justify-center bg-blue-400" />
    </div>
  </div>

  <p class="m-auto mt-56 flex justify-center">Notre équipe qui s'est occupé de mettre en oeuvre ce fantastiqur festival</p>

  <div class="grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
    <img class="h-6/6 mt-10 mb-10 w-2/6" src="/img/personne1.jpg" alt="premiere personne" />
    <p class="font-work-sans">Community manager</p>
    <img class="h-6/6 mt-10 mb-10 w-2/6" src="/img/personne2.jpg" alt="deuxième personne" />
    <p class="font-work-sans">chef de projet</p>
    <img class="h-6/6 mt-10 mb-10 w-2/6" src="/img/personne3.jpg" alt="troisième personne" />
    <p class="font-work-sans">Organistrice</p>
    <img class="h-6/6 mt-10 mb-10 w-2/6" src="/img/personne4.jpg" alt="quatrième personne" />
    <p class="font-work-sans">Juriste</p>
    <img class="h-6/6 mt-10 mb-10 w-2/6" src="/img/personne5.jpg" alt="cinquième personne" />
    <p class="font-work-sans">Community manager</p>
    <img class="h-6/6 mt-10 mb-10 w-2/6" src="/img/personne6.jpg" alt="sixième personne" />
    <p class="font-work-sans">Trésorier</p>
    <img class="h-6/6 mt-10 mb-10 w-2/6" src="/img/personne7.jpg" alt="septième personne" />
    <p class="font-work-sans">Organisateur</p>
  </div>

  <div
    class="
      relative
      flex
      h-[124px]
      w-[1194px]
      items-start
      justify-start
      gap-2.5
      overflow-hidden
      rounded-[27px]
      border-4 border-white
      bg-black
      p-[22px]
    "
  >
    <p class="h-20 w-[1150px] flex-grow self-stretch text-center text-[35px] text-white">
      Ce festival est fait de facon ethique avec trois équipes qui oeuvre tous les jours au bon entretient de l’endroit
    </p>
  </div>
  <img class="ml-auto h-1/3 w-1/3" src="/img/image-a-propos-poubelle.jpg" alt="image poubelle" />
  <img class="h-1/3 w-1/3" src="/img/image-a-propos-recyclage.jpg" alt="image recyclage" />
  <div
    class="
      relative
      flex
      h-[218px]
      w-[466px]
      items-start
      justify-start
      gap-7
      overflow-hidden
      rounded-[14px]
      border-4 border-white
      bg-black
      p-[25px]
    "
  >
    <p class="h-[168px] w-[416px] flex-grow self-stretch text-center text-[35px] text-white">
      Pour preserver cet endroit il sera mis a disposition des poubelles de trie et nous vous invitons a les utiliser.
    </p>
  </div>
</template>

<script>
import Bouton from "../components/Bouton.vue";
export default {
  components: {
    Bouton,
  },
};
</script>