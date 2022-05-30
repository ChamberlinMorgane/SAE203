<template>
  <div class="relative flex h-[118px] w-full flex-col gap-2.5 bg-blue-400">
    <div class="h-[104.98px] flex-shrink-0 flex-grow-0 self-stretch">
      <div class="h-[81px] w-full">
        <div class="absolute left-[26.5px] top-[15.51px] m-auto flex w-full flex-col items-start justify-between gap-2.5">
          <a href="/"><LogoHeader /></a>
        </div>
        <div class="h-6 w-full">
          <div class="absolute left-[244.5px] top-[35.09px] flex w-[1160px] items-center justify-between">
            <RouterLink class="flex-shrink-0 flex-grow-0 text-center text-[22px] font-bold text-black" to="/Artistes">Artistes</RouterLink>
            <RouterLink class="flex-shrink-0 flex-grow-0 text-center text-[22px] font-bold text-black" to="/Programmation"
              >Programmation</RouterLink
            >
            <RouterLink class="flex-shrink-0 flex-grow-0 text-center text-[22px] font-bold text-black" to="/Festival">Festival</RouterLink>
            <RouterLink class="flex-shrink-0 flex-grow-0 text-center text-[22px] font-bold text-black" to="/Festival">Concert</RouterLink>
            <RouterLink class="flex-shrink-0 flex-grow-0 text-center text-[22px] font-bold text-black" to="/Contact">Contact</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoHeader from "./icons/LogoHeader.vue";
export default {
  components: { LogoHeader },
};
</script>