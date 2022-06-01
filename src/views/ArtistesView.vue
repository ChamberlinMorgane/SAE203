<template>
  <main>
    <div class="mt-20 mb-20">
      <div class="h-1 w-full bg-white"></div>
      <div class="flex items-center justify-between py-8">
        <div class="h-1 w-1/3 bg-white"></div>
        <div class="flex w-1/3 justify-around">
          <h2 class="text-3xl">ARTISTES</h2>
        </div>
        <div class="h-1 w-1/3 bg-white"></div>
      </div>
      <div class="h-1 w-full bg-white"></div>
    </div>
    <p class="mt-28 flex justify-center text-2xl font-bold text-white">EUROPE</p>
    <line class="m-auto mb-20 flex w-48 justify-center border-4 border-solid bg-white"></line>

    <div class="grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
      <div>
        <a href="artiste"><CardArtist class="mb-10" nom="DJ SNAKE" image="/img/djsnake.jpg" /></a>
      </div>
      <div>
        <a href="artiste"><CardArtist class="mb-10" nom="ED SHEERAN" image="/img/edsheeran.jpg" /></a>
      </div>
      <div>
        <a href="artiste"><CardArtist class="mb-10" nom="ANGELE" image="/img/angele.jpg" /></a>
      </div>
      <div>
        <a href="artiste"><CardArtist class="mb-10" nom="DAVID GUETTA" image="/img/davidguetta.jpg" /></a>
      </div>
      <div>
        <a href="artiste"><CardArtist class="mb-10" nom="OMAR RUDBERG" image="/img/omarudberg.jpg" /></a>
      </div>
      <div>
        <a href="artiste"><CardArtist class="mb-10" nom="GIRL IN RED" image="/img/girlinred.jpg" /></a>
      </div>
    </div>

    <p class="mt-28 flex justify-center text-2xl font-bold text-white">ASIE</p>
    <line class="m-auto mb-20 flex w-48 justify-center border-4 border-solid bg-white"></line>

    <div class="grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
      <div>
        <a href="artiste"><CardArtist class="mb-10" nom="BLACKPINK" image="/img/blackpink.jpg" /></a>
      </div>
      <div>
        <a href="artiste"><CardArtist class="mb-10" nom="BIBI" image="/img/bibi.jpg" /></a>
      </div>
      <div>
        <a href="artiste"><CardArtist class="mb-10" nom="CHANMINA" image="/img/chanmina.jpg" /></a>
      </div>
    </div>

    <p class="mt-28 flex justify-center text-2xl font-bold text-white">AFRIQUE</p>
    <line class="m-auto mb-20 flex w-48 justify-center border-4 border-solid bg-white"></line>

    <div class="grid grid-cols-1 justify-items-center lg:grid-cols-2">
      <div>
        <a href="artiste"><CardArtist class="mb-10" nom="FALLY IPUPA" image="/img/faillyipupa.jpg" /></a>
      </div>
      <div>
        <a href="artiste"><CardArtist class="mb-10" nom="DIZZY DROSS" image="/img/dizzydross.jpg" /></a>
      </div>
    </div>

    <p class="mt-28 flex justify-center text-2xl font-bold text-white">AMERIQUE DU NORD</p>
    <line class="m-auto mb-20 flex w-48 justify-center border-4 border-solid bg-white"></line>

    <div class="grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
      <div>
        <a href="artiste"><CardArtist class="mb-10" nom="COLDPLAY" image="/img/coldplay.jpg" /></a>
      </div>
      <div>
        <a href="artiste"><CardArtist class="mb-10" nom="DOJA CAT" image="/img/cardib.jpg" /></a>
      </div>
      <div>
        <a href="artiste"><CardArtist class="mb-10" nom="OLIVIA RODRIGO" image="/img/oliviarudberg.jpg" /></a>
      </div>
      <div>
        <a href="artiste"><CardArtist class="mb-10" nom="SABRINA CARPENTER" image="/img/sabrina.jpg" /></a>
      </div>
    </div>

    <p class="mt-28 flex justify-center text-2xl font-bold text-white">AMERIQUE DU SUD</p>
    <line class="m-auto mb-20 flex w-48 justify-center border-4 border-solid bg-white"></line>

    <div class="grid grid-cols-1 justify-items-center lg:grid-cols-2">
      <div>
        <a href="artiste"><CardArtist class="mb-10" nom="SHAKIRA" image="/img/shakira.jpg" /></a>
      </div>
      <div>
        <a href="artiste"><CardArtist class="mb-10" nom="DADDY YANKEE" image="/img/daddyyankee.jpg" /></a>
      </div>
    </div>

    <p class="mt-28 flex justify-center text-2xl font-bold text-white">OCÉANIE</p>
    <line class="m-auto mb-20 flex w-48 justify-center border-4 border-solid bg-white"></line>

    <div class="grid grid-cols-1 justify-items-center lg:grid-cols-2">
      <div>
        <a href="artiste"><CardArtist class="mb-10" nom="TONES AND I " image="/img/tonesandi.jpg" /></a>
      </div>
      <div>
        <a href="artiste"><CardArtist class="mb-10" nom="SIA" image="/img/sia.jpg" /></a>
      </div>
    </div>

    <Bouton
      nom="Achetez vos billet dès maintenant"
      class="m-auto mt-32 flex w-3/6 justify-center border-4 border-black bg-white text-5xl font-extrabold"
    />
    <div class="m-auto my-32 flex justify-center justify-items-center gap-11">
      <a href="artistes"><img class="w-16" src="/icones/arrow-narrow-up.svg" alt="flèche" /></a>
      <a href="artistes"><p class="text-2xl font-bold">Découvrez la programmation pour ce week-end de folie</p></a>
    </div>
  </main>
</template>

<script>
import CardArtist from "../components/Card.vue";
import Bouton from "/src/components/Bouton.vue";
export default {
  components: {
    CardArtist,
    Bouton,
  },
};
</script>