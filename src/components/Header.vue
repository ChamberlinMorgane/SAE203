<template>
  <template>
    <div class="my-auto flex h-[118px] w-full flex-row gap-8 bg-blue-400 text-black">
      <a href="/"><LogoHeader class="mr-44 pr-4" /></a>
      <RouterLink class="pt-6 text-xl font-bold xl:text-3xl" to="/">Accueil</RouterLink>
      <RouterLink class="pt-6 text-xl font-bold xl:text-3xl" to="/programmation">Programmation</RouterLink>
      <RouterLink class="pt-6 text-xl font-bold xl:text-3xl" to="/festival">Festival</RouterLink>
      <RouterLink class="pt-6 text-xl font-bold xl:text-3xl" to="/concert">Concerts</RouterLink>
      <RouterLink class="pt-6 text-xl font-bold xl:text-3xl" to="/artistes">Artistes</RouterLink>
    </div>
  </template>
</template>

<script>
import LogoHeader from "./icons/LogoHeader.vue";
export default {
  components: { LogoHeader },
};
</script>
  