<template>
  <div class="relative h-screen overflow-hidden bg-indigo-900">
    <img
      src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9"
      class="absolute h-full w-full object-cover"
    />
    <div class="absolute inset-0 bg-black opacity-25"></div>
    <div class="container relative z-10 mx-auto flex items-center px-6 py-32 md:px-12 xl:py-40">
      <div class="relative z-10 flex w-full flex-col items-center font-mono">
        <h1 class="mt-4 text-center text-5xl font-extrabold leading-tight text-white">Tout seul ici</h1>
        <p class="my-44 animate-bounce text-8xl font-extrabold text-white">404</p>
        <Bouton nom="Retourne à la page d'accueil" class="animate-bounce border-2 border-white bg-black text-white" />
      </div>
    </div>
  </div>
</template>

<script>
import Bouton from "/src/components/Bouton.vue";
export default {
  components: { Bouton },
};
</script>