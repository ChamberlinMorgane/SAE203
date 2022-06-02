<template>
  <div class="mt-20 mb-20">
    <div class="h-1 w-full bg-white"></div>
    <div class="flex items-center justify-between py-8">
      <div class="h-1 w-8 bg-white sm:w-1/3"></div>
      <div class="flex w-8 justify-around md:w-1/3">
        <h2 class="font-staatliches text-3xl">FESTIVAL</h2>
      </div>
      <div class="h-1 w-8 bg-white sm:w-1/3"></div>
    </div>
    <div class="h-1 w-full bg-white"></div>
  </div>

  <img class="m-auto flex h-auto w-5/6 justify-center" src="/img/plan.jpg" alt="plan du festival" />
  <a href="/img/plan-du-festival.pdf" download rel="noopener noreferrer" target="_blank"
    ><img class="w-5 lg:w-14" src="/icones/download.png" alt="#"
  /></a>
  <p class="m-auto mt-11 flex justify-center text-xl font-bold lg:text-2xl">Découvrez nos 3 grandes scene et nos deux petite</p>
  <p class="m-auto mt-11 flex justify-center text-xl font-bold lg:text-3xl">Les grandes scènes</p>

  <div class="grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
    <div>
      <img class="m-auto mt-20 mb-10 flex h-auto w-5/6 justify-center" src="/img/scenenord.jpg" alt="scene nord" />
      <Bouton nom="Scène Nord" class="m-auto w-1/2 justify-center" />
    </div>
    <div>
      <img class="m-auto mt-20 mb-10 flex h-auto w-5/6 justify-center" src="/img/scenesud.jpg" alt="scene sud" />
      <Bouton nom="Scène Sud" class="m-auto w-1/2 justify-center bg-yellow-400" />
    </div>
    <div>
      <img class="m-auto mt-20 mb-10 flex h-auto w-5/6 justify-center" src="/img/sceneest.jpg" alt="scene est" />
      <Bouton nom="Scène Est" class="m-auto w-1/2 justify-center bg-green-400" />
    </div>
  </div>

  <p class="relative m-auto mt-32 flex justify-center text-3xl font-bold">Les petites scènes</p>

  <div class="grid grid-cols-1 justify-items-center lg:w-4/6 lg:grid-cols-2">
    <div>
      <img class="m-auto mt-11 mb-10 flex h-auto w-5/6 justify-center" src="/img/scenecentre.jpg" alt="scene centre" />
      <Bouton nom="Scène Centre" class="m-auto w-1/2 justify-center bg-pink-400" />
    </div>

    <div>
      <img class="m-auto mt-11 mb-10 flex h-auto w-5/6 justify-center" src="/img/sceneouest.jpg" alt="scene ouest" />
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
  <div class="grid grid-cols-1">
    <div
      class="
        relative
        mt-11
        flex
        h-auto
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
      <p class="h-auto flex-grow self-stretch text-center text-base text-white lg:text-3xl">
        Ce festival est fait de facon ethique avec trois équipes qui oeuvre tous les jours au bon entretient de l’endroit
      </p>
    </div>
    <img class="m-auto flex h-2/3 w-2/3 justify-center" src="/img/image-a-propos-poubelle.jpg" alt="image poubelle" />
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2">
    <img class="h-3/3 m-auto mb-14 mt-20 flex w-2/3 justify-center" src="/img/image-a-propos-recyclage.jpg" alt="image recyclage" />
    <div
      class="relative flex h-auto items-start justify-start gap-7 overflow-hidden rounded-[14px] border-4 border-white bg-black p-[25px]"
    >
      <p class="h-auto flex-grow self-stretch text-center text-base text-white lg:text-3xl">
        Pour preserver cet endroit il sera mis a disposition des poubelles de trie et nous vous invitons a les utiliser.
      </p>
    </div>
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