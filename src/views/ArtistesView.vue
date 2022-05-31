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

    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <div>
        <CardArtist class="mb-10" nom="DJ SNAKE" image="/src/assets/images/djsnake.jpg" />
      </div>
      <div>
        <CardArtist class="mb-10" nom="ED SHEERAN" image="/src/assets/images/edsheeran.jpg" />
      </div>
      <div>
        <CardArtist class="mb-10" nom="ANGELE" image="/src/assets/images/angele.jpg" />
      </div>
      <div>
        <CardArtist class="mb-10" nom="DAVID GUETTA" image="/src/assets/images/davidguetta.jpg" />
      </div>
      <div>
        <CardArtist class="mb-10" nom="OMAR RUDBERG" image="/src/assets/images/omarudberg.jpg" />
      </div>
      <div>
        <CardArtist class="mb-10" nom="GIRL IN RED" image="/src/assets/images/girlinred.jpg" />
      </div>
    </div>

    <p class="mt-28 flex justify-center text-2xl font-bold text-white">ASIE</p>
    <line class="m-auto mb-20 flex w-48 justify-center border-4 border-solid bg-white"></line>

    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <div>
        <CardArtist class="mb-10" nom="BLACKPINK" image="/src/assets/images/blackpink.jpg" />
      </div>
      <div>
        <CardArtist class="mb-10" nom="BIBI" image="/src/assets/images/bibi.jpg" />
      </div>
      <div>
        <CardArtist class="mb-10" nom="CHANMINA" image="/src/assets/images/chanmina.jpg" />
      </div>
    </div>

    <p class="mt-28 flex justify-center text-2xl font-bold text-white">AFRIQUE</p>
    <line class="m-auto mb-20 flex w-48 justify-center border-4 border-solid bg-white"></line>

    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <CardArtist class="mb-10" nom="FALLY IPUPA" image="/src/assets/images/faillyipupa.jpg" />
      </div>
      <div>
        <CardArtist class="mb-10" nom="DIZZY DROSS" image="/src/assets/images/dizzydross.jpg" />
      </div>
    </div>

    <p class="mt-28 flex justify-center text-2xl font-bold text-white">AMERIQUE DU NORD</p>
    <line class="m-auto mb-20 flex w-48 justify-center border-4 border-solid bg-white"></line>

    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <div>
        <CardArtist class="mb-10" nom="COLDPLAY" image="/src/assets/images/coldplay.jpg" />
      </div>
      <div>
        <CardArtist class="mb-10" nom="DOJA CAT" image="/src/assets/images/cardib.jpg" />
      </div>
      <div>
        <CardArtist class="mb-10" nom="OLIVIA RODRIGO" image="/src/assets/images/oliviarudberg.jpg" />
      </div>
      <div>
        <CardArtist class="mb-10" nom="SABRINA CARPENTER" image="/src/assets/images/sabrina.jpg" />
      </div>
    </div>

    <p class="mt-28 flex justify-center text-2xl font-bold text-white">AMERIQUE DU SUD</p>
    <line class="m-auto mb-20 flex w-48 justify-center border-4 border-solid bg-white"></line>

    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <div>
        <CardArtist class="mb-10" nom="SHAKIRA" image="/src/assets/images/shakira.jpg" />
      </div>
      <div>
        <CardArtist class="mb-10" nom="DADDY YANKEE" image="/src/assets/images/daddyyankee.jpg" />
      </div>
    </div>

    <p class="mt-28 flex justify-center text-2xl font-bold text-white">OCÉANIE</p>
    <line class="m-auto mb-20 flex w-48 justify-center border-4 border-solid bg-white"></line>

    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <div>
        <CardArtist class="mb-10" nom="TONES AND I " image="/src/assets/images/tonesandi.jpg" />
      </div>
      <div>
        <CardArtist class="mb-10" nom="SIA" image="/src/assets/images/sia.jpg" />
      </div>
    </div>

    <Bouton
      nom="Achetez vos billet dès maintenant"
      class="m-auto mt-32 flex w-3/6 justify-center border-4 border-black bg-white text-5xl font-extrabold"
    />
    <div class="m-auto my-32 flex justify-center gap-11">
      <a href="artistes"><img class="w-16" src="src/assets/icones/arrow-narrow-up.svg" alt="flèche" /></a>
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