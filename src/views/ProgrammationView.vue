<template>
  <div class="mt-20 mb-20">
    <div class="h-1 w-full bg-white"></div>
    <div class="flex items-center justify-between py-8">
      <div class="h-1 w-8 bg-white sm:w-1/3"></div>
      <div class="flex w-8 justify-around md:w-1/3">
        <h2 class="font-staatliches text-3xl">PROGRAMMATION</h2>
      </div>
      <div class="h-1 w-8 bg-white sm:w-1/3"></div>
    </div>
    <div class="h-1 w-full bg-white"></div>
  </div>
  <p class="m-auto mt-20 w-2/3 justify-center text-center font-work-sans text-3xl font-bold">
    DES ARTISTES DU MONDE ENTIER SERONT PRÉSENT A CE FESTIVAL. VENEZ VOIR VOS ARTISTES PREFERES DE PARTOUT DANS LE MONDE DANS UN SEUL
    FESTIVAL
  </p>
  <Bouton nom="1 Juillet !!" class="ml-11 flex w-1/6 justify-start text-5xl font-extrabold" />
  <p class="m-auto mb-11 w-2/3 justify-center text-center font-work-sans font-bold text-white">
    <span class="h-[298.54px] w-[1155.3px] text-center font-work-sans text-lg font-bold text-white lg:text-6xl">ED SHEERAN - </span
    ><span class="h-[298.54px] w-[1155.3px] text-center font-work-sans text-lg font-bold text-white lg:text-6xl">ANGELE</span
    ><span class="h-[298.54px] w-[1155.3px] text-center font-work-sans text-lg font-bold text-white lg:text-6xl">-</span
    ><span class="h-[298.54px] w-[1155.3px] text-center font-work-sans text-xl font-bold text-white lg:text-7xl"> </span><br /><span
      class="h-[298.54px] w-[1155.3px] text-center font-work-sans text-xl font-bold text-white lg:text-7xl"
      >DAVID GUETTA</span
    ><span class="h-[298.54px] w-[1155.3px] text-center font-work-sans text-lg font-bold text-white lg:text-6xl"
      >- OMAR RUDBERG- BIBI- CHANMINA- FALLY IPUPA- COLDPLAY-</span
    ><span class="h-[298.54px] w-[1155.3px] text-center font-work-sans text-xl font-bold text-white lg:text-7xl">DOJA CAT</span
    ><span class="h-[298.54px] w-[1155.3px] text-center font-work-sans text-lg font-bold text-white lg:text-6xl"
      >- OLIVIA RODRIGO- DADDY YANKEE- SIA</span
    >
  </p>

  <Bouton nom="2 Juillet !!" class="ml-auto mr-11 flex w-1/6 bg-indigo-400 text-xl font-extrabold lg:text-5xl" />
  <p class="m-auto mb-11 w-2/3 justify-center text-center font-bold text-white">
    <span class="h-[296px] text-center font-work-sans text-xl font-bold text-white lg:text-7xl">DJ SNAKE</span
    ><span class="h-[296px] text-center font-work-sans text-lg font-bold text-white lg:text-6xl"
      >- ED SHEERAN- DAVID GUETTA- GIRL IN RED- </span
    ><span class="h-[296px] text-center font-work-sans text-xl font-bold text-white lg:text-7xl">BLACKPINK</span
    ><span class="h-[296px] text-center font-work-sans text-lg font-bold text-white lg:text-6xl">- DIZZY DROSS-</span
    ><span class="h-[296px] text-center font-work-sans text-lg font-bold text-white lg:text-6xl"> COLDPLAY</span
    ><span class="h-[296px] text-center font-work-sans text-lg font-bold text-white lg:text-6xl">- OLIVIA RODRIGO- </span
    ><span class="h-[296px] text-center font-work-sans text-lg font-bold text-white lg:text-6xl">DADDY YANKEE</span
    ><span class="lg:text-6x text-lgl h-[296px] text-center font-work-sans font-bold text-white">- TONES AND I- SIA</span>
  </p>

  <Bouton nom="3 Juillet !!" class="ml-11 flex w-1/6 justify-end bg-pink-400 text-xl font-extrabold lg:text-5xl" />
  <p class="m-auto mb-11 w-2/3 justify-center text-center font-bold text-white">
    <span class="h-[296px] text-center font-work-sans text-lg font-bold text-white lg:text-6xl">DJ SNAKE- </span
    ><span class="h-[296px] text-center font-work-sans text-xl font-bold text-white lg:text-7xl">STROMAE</span
    ><span class="h-[296px] text-center font-work-sans text-lg font-bold text-white lg:text-6xl">- ANGELE- DAVID GUETTA- </span
    ><span class="h-[296px] text-center font-work-sans text-lg font-bold text-white lg:text-6xl">BLACKPINK</span
    ><span class="h-[296px] text-center font-work-sans text-lg font-bold text-white lg:text-6xl"
      >- DOJA CAT- SABRINA CARPENTER-SHAKIRA DADDY YANKEE- </span
    ><span class="h-[296px] text-center font-work-sans text-lg font-bold text-white lg:text-6xl">TONES AND I</span
    ><span class="h-[296px] text-center text-[50px] font-bold text-white">- </span
    ><span class="h-[296px] text-center font-work-sans text-xl font-bold text-white lg:text-7xl">SIA</span>
  </p>

  <a href="404"
    ><Bouton
      nom="Achetez vos billet dès maintenant"
      class="m-auto mt-32 flex w-3/6 justify-center border-4 border-black bg-white text-xl lg:text-5xl"
  /></a>
  <div class="m-auto my-32 flex justify-center gap-11">
    <a href="artistes"><img class="w-16" src="/icones/arrow-narrow-up.svg" alt="flèche" /></a>
    <a href="artistes"><p class="text-2xl font-bold">Découvrez la liste complet des artistes présent au festival</p></a>
  </div>
</template>

<script>
import Bouton from "/src/components/Bouton.vue";

export default {
  components: { Bouton },
};
</script>