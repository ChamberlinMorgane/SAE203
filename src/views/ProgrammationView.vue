<template>
  <p class="m-auto mt-20 w-2/3 justify-center text-center text-3xl">
    DES ARTISTES DU MONDE ENTIER SERONT PRÉSENT A CE FESTIVAL. VENEZ VOIR VOS ARTISTES PREFERES DE PARTOUT DANS LE MONDE DANS UN SEUL
    FESTIVAL
  </p>
  <Bouton nom="1 Juillet !!" class="ml-11 flex w-1/6 justify-start text-5xl font-extrabold" />
  <p class="m-auto mb-11 w-2/3 justify-center text-center font-bold text-white">
    <span class="h-[298.54px] w-[1155.3px] text-center text-[50px] font-bold text-white">ED SHEERAN - </span
    ><span class="h-[298.54px] w-[1155.3px] text-center text-6xl font-bold text-white">ANGELE</span
    ><span class="h-[298.54px] w-[1155.3px] text-center text-[50px] font-bold text-white">-</span
    ><span class="h-[298.54px] w-[1155.3px] text-center text-[80px] font-bold text-white"> </span><br /><span
      class="h-[298.54px] w-[1155.3px] text-center text-[80px] font-bold text-white"
      >DAVID GUETTA</span
    ><span class="h-[298.54px] w-[1155.3px] text-center text-[50px] font-bold text-white"
      >- OMAR RUDBERG- BIBI- CHANMINA- FALLY IPUPA- COLDPLAY-</span
    ><span class="h-[298.54px] w-[1155.3px] text-center text-[80px] font-bold text-white">DOJA CAT</span
    ><span class="h-[298.54px] w-[1155.3px] text-center text-[50px] font-bold text-white">- OLIVIA RODRIGO- DADDY YANKEE- SIA</span>
  </p>

  <Bouton nom="2 Juillet !!" class="float-right mr-11 flex w-1/6 bg-indigo-400 text-5xl font-extrabold" />
  <p class="m-auto mb-11 w-2/3 justify-center text-center font-bold text-white">
    <span class="h-[296px] w-[1149.51px] text-center text-[80px] font-bold text-white">DJ SNAKE</span
    ><span class="h-[296px] w-[1149.51px] text-center text-[50px] font-bold text-white">- ED SHEERAN- DAVID GUETTA- GIRL IN RED- </span
    ><span class="h-[296px] w-[1149.51px] text-center text-[80px] font-bold text-white">BLACKPINK</span
    ><span class="h-[296px] w-[1149.51px] text-center text-[50px] font-bold text-white">- DIZZY DROSS-</span
    ><span class="h-[296px] w-[1149.51px] text-center text-6xl font-bold text-white"> COLDPLAY</span
    ><span class="h-[296px] w-[1149.51px] text-center text-[50px] font-bold text-white">- OLIVIA RODRIGO- </span
    ><span class="h-[296px] w-[1149.51px] text-center text-6xl font-bold text-white">DADDY YANKEE</span
    ><span class="h-[296px] w-[1149.51px] text-center text-[50px] font-bold text-white">- TONES AND I- SIA</span>
  </p>

  <Bouton nom="3 Juillet !!" class="ml-11 flex w-1/6 justify-end bg-pink-400 text-5xl font-extrabold" />
  <p class="m-auto mb-11 w-2/3 justify-center text-center font-bold text-white">
    <span class="h-[296px] w-[1141.78px] text-center text-[50px] font-bold text-white">DJ SNAKE- </span
    ><span class="h-[296px] w-[1141.78px] text-center text-[80px] font-bold text-white">STROMAE</span
    ><span class="h-[296px] w-[1141.78px] text-center text-[50px] font-bold text-white">- ANGELE- DAVID GUETTA- </span
    ><span class="h-[296px] w-[1141.78px] text-center text-6xl font-bold text-white">BLACKPINK</span
    ><span class="h-[296px] w-[1141.78px] text-center text-[50px] font-bold text-white"
      >- DOJA CAT- SABRINA CARPENTER-SHAKIRA DADDY YANKEE- </span
    ><span class="h-[296px] w-[1141.78px] text-center text-6xl font-bold text-white">TONES AND I</span
    ><span class="h-[296px] w-[1141.78px] text-center text-[50px] font-bold text-white">- </span
    ><span class="h-[296px] w-[1141.78px] text-center text-[80px] font-bold text-white">SIA</span>
  </p>

  <Bouton
    nom="Achetez vos billet dès maintenant"
    class="m-auto mt-32 flex w-3/6 justify-center border-4 border-black bg-white text-5xl font-extrabold"
  />
  <div class="m-auto my-32 flex justify-center gap-11">
    <a href="artistes"><img class="w-16" src="src/assets/icones/arrow-narrow-up.svg" alt="flèche" /></a>
    <a href="artistes"><p class="text-2xl font-bold">Découvrez la liste complet des artistes présent au festival</p></a>
  </div>
</template>

<script>
import Bouton from "/src/components/Bouton.vue";

export default {
  components: { Bouton },
};
</script>