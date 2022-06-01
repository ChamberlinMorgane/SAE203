<template>
  <main class="w-100%">
    <div class="relative flex w-full snap-x overflow-x-auto pb-14">
      <div class="w-full shrink-0 rounded-lg shadow-xl">
        <img src="/img/carouselimg1.jpg" alt="image concert" />
      </div>
      <div class="w-full shrink-0 rounded-lg shadow-xl">
        <img src="/img/carouselimg2.jpg" alt="image concert" />
      </div>
      <div class="w-full shrink-0 rounded-lg shadow-xl">
        <img src="/img/carouselimg3.jpg" alt="image concert" />
      </div>
      <div class="w-full shrink-0 rounded-lg shadow-xl">
        <img src="/img/carouselimg4.jpg" alt="image concert" />
      </div>
    </div>
    <div class="m-auto mt-20 mb-8 h-auto w-4/6 shrink-0 justify-center border-4 border-solid border-yellow-500 bg-yellow-100">
      <p class="mt-12 mr-7 ml-7 shrink-0 text-2xl text-black">
        DU VENDREDI 1ER JUILLET 2022 AU DIMANCHE 3 JUILLET 2022 LA VILLE DE GRENOBLE OUVRE L’UN DES PLUS GRAND FESTIVAL DE FRANCE MAIS
        ATTENTION LES PLACES SONT LIMITÉES ALORS NE PERDEZ PAS DE TEMPS RESERVEZ VOS PLACES
      </p>
      <Bouton nom="Réservez vos billets en quelques cliques" class="right-auto" />
    </div>
    <div class="m-auto mt-24 flex h-[172.63px] w-4/6 justify-center gap-5">
      <img src="/img/angele.jpg" class="flex-grow self-stretch rounded-[32px] object-cover" />

      <img src="/img/cardib.jpg" class="flex-grow self-stretch rounded-[32px] object-cover" />

      <img src="/img/sabrina.jpg" class="flex-grow self-stretch rounded-[32px] object-cover" />
    </div>
    <div class="relative m-auto flex h-[122px] w-4/6 justify-center gap-2.5 rounded-[32px] bg-indigo-100 px-[248px] py-[27px]">
      <p class="h-[68px] w-4/6 flex-grow self-stretch text-center font-work-sans text-4xl font-extrabold text-black">
        DÉCOUVRIR TOUTE LA PROGRAMMATION
      </p>
    </div>
    <Bouton nom="Réservez vos billets en quelques cliques !!" class="m-auto w-3/6 justify-center" />

    <div class="relative m-auto h-[447px] w-[1084px] justify-center">
      <div
        class="tr absolute left-[755.12px] top-[-1px] h-[383.01px] w-[291.46px] origin-top-left rotate-12 rounded-[23px] bg-amber-600"
      ></div>
      <div class="absolute left-[37.53px] h-[382.98px] w-[301.27px] origin-top-right -rotate-12 rounded-[23px] bg-red-500"></div>
      <div class="absolute left-[347px] top-[13px] h-[381px] w-[389px] rounded-[23px] bg-violet-700"></div>
      <p class="absolute left-[348px] top-[42px] h-[67px] w-[389px] text-center text-3xl text-white">VIP PASS</p>
      <p class="absolute left-[57.48px] top-[40.81px] h-[51.56px] w-[287.76px] origin-top-right -rotate-12 text-center text-3xl text-white">
        PASS JOURNÉE
      </p>
      <p class="float-right m-auto mr-10 mt-8 h-[69.97px] w-[244.75px] origin-top-left rotate-12 text-center text-3xl text-white">
        PASS FESTIVAL + CAMPING
      </p>
      <div class="absolute left-[347px] top-[170px] h-[62px] w-[441px] rounded bg-violet-300"></div>
      <div class="absolute left-[-1px] top-[316.71px] h-[62.6px] w-[286.79px] rounded bg-red-300"></div>
      <div class="absolute left-[802.99px] top-[284.12px] h-[62.6px] w-[286.79px] rounded bg-yellow-200"></div>
      <p class="absolute left-[348px] top-[186px] h-[88px] w-[389px] text-center text-3xl text-black">A PARTIR DE 150€</p>
      <p class="absolute left-[26.82px] top-[328.64px] h-[36.57px] w-[252.38px] text-left text-3xl text-black">A PARTIR DE 43€</p>
      <p class="absolute left-[817.68px] top-[301.49px] h-[39.38px] w-[298.43px] text-left text-3xl text-black">A PARTIR DE 100€</p>
      <p
        class="
          absolute
          left-[149.98px]
          top-[121.36px]
          h-[14.73px]
          w-[146.31px]
          origin-top-right
          -rotate-12
          text-left text-[25px] text-white
        "
      >
        1, 2 ou 3 jours
      </p>
    </div>
  </main>
</template>
<script>
import Bouton from "/src/components/Bouton.vue";

export default {
  components: { Bouton },
};
</script>

