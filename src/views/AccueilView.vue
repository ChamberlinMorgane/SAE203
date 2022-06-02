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
    <div class="m-auto mt-20 mb-8 w-4/6 shrink-0 justify-center border-4 border-solid border-yellow-500 bg-yellow-100">
      <p class="mt-12 mr-7 ml-7 shrink-0 text-2xl text-black">
        DU VENDREDI 1ER JUILLET 2022 AU DIMANCHE 3 JUILLET 2022 LA VILLE DE GRENOBLE OUVRE L’UN DES PLUS GRAND FESTIVAL DE FRANCE MAIS
        ATTENTION LES PLACES SONT LIMITÉES ALORS NE PERDEZ PAS DE TEMPS RESERVEZ VOS PLACES
      </p>
      <a href="404"><Bouton nom="Réservez vos billets en quelques cliques" class="right-auto" /></a>
    </div>
    <div class="m-auto mt-24 grid w-4/6 grid-cols-1 justify-center gap-5 lg:grid-cols-3">
      <img src="/img/angele.jpg" class="flex-grow self-stretch rounded-[32px] object-cover" />

      <img src="/img/cardib.jpg" class="flex-grow self-stretch rounded-[32px] object-cover" />

      <img src="/img/sabrina.jpg" class="flex-grow self-stretch rounded-[32px] object-cover" />
    </div>
    <a href="programmation"
      ><div class="m-auto h-auto w-5/6 justify-center rounded-[32px] bg-indigo-100 p-10">
        <p class="h-[68px] w-auto flex-grow self-stretch text-center font-work-sans text-lg font-extrabold text-black lg:w-4/6 lg:text-4xl">
          DÉCOUVRIR TOUTE LA PROGRAMMATION
        </p>
      </div></a
    >
    <a href="404"><Bouton nom="Réservez vos billets en quelques cliques !!" class="m-auto w-3/6 justify-center" /></a>
    <img class="w-6/6 h-auto" src="/img/prix.png" alt="prix" />
  </main>
</template>
<script>
import Bouton from "/src/components/Bouton.vue";

export default {
  components: { Bouton },
};
</script>

