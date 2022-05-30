<template>
  <header>
    <Header />
  </header>

  <RouterView />
  <div class="relative h-[483px] w-[1440px]">
    <svg width="1600" height="812" fill="none" class="h-[812px] w-[1440px]" preserveAspectRatio="none">
      <rect x="46.1125" y="341.251" width="1600.15" height="470.749" fill="#99BFA8"></rect>
      <ellipse cx="337.263" cy="262.402" rx="337.263" ry="171.491" fill="#99BFA8"></ellipse>
      <ellipse cx="1019.37" cy="234.509" rx="420.632" ry="234.509" fill="#99BFA8"></ellipse>
    </svg>
    <p class="absolute left-[507.65px] top-[375.01px] h-[16.61px] w-[295.3px] text-left text-[15px] text-black">Mentions légales</p>
    <img src="instagram-(1)-1.png" class="absolute left-[814px] top-[451px] h-6 w-6 object-cover" /><img
      src="facebook-app-symbol-(1)-1.png"
      class="absolute left-[686px] top-[451px] h-6 w-6 object-cover"
    /><img src="twitter-(2)-1.png" class="absolute left-[541px] top-[451px] h-6 w-6 object-cover" />
    <div class="absolute left-[141.67px] top-[356.21px] h-[2.37px] w-[938.99px] bg-[#beccd7]"></div>
    <p class="absolute left-[112.81px] top-[373.82px] h-[13.05px] w-[295.3px] text-left text-[15px] text-black">Nous contacter</p>
    <p class="absolute left-[112.81px] top-[401.12px] h-[13.05px] w-[295.3px] text-left text-[15px] text-black">A propos</p>
    <p class="absolute left-[504.33px] top-[401.12px] h-[13.05px] w-[295.3px] text-left text-[15px] text-black">Programmation</p>
    <p class="absolute left-[962.21px] top-[375.01px] h-[13.05px] w-[295.3px] text-left text-[15px] text-black">Nos artistes</p>
    <p class="absolute left-[965.53px] top-[401.12px] h-[13.05px] w-[295.3px] text-left text-[15px] text-black">Concerts</p>
    <div
      class="
        absolute
        left-[190px]
        top-[-22px]
        flex
        h-[350px]
        w-[811px]
        flex-col
        items-start
        justify-start
        gap-[9px]
        overflow-hidden
        px-7
        py-2
      "
    >
      <p class="absolute left-[103px] top-[-75px] h-5 w-[1045px] text-left text-3xl text-black">
        Rejoint notre NewsLetter pour être au courrant des dernières actu !!
      </p>
      <div class="relative flex h-[75px] flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-[5px] self-stretch">
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-first-name"> Prénom </label>
        <input
          class="
            mb-3
            block
            w-full
            appearance-none
            rounded-3xl
            border border-orange-500
            bg-yellow-100
            py-3
            px-4
            leading-tight
            text-gray-700
            focus:bg-yellow-200 focus:outline-none
          "
          id="grid-first-name"
          type="text"
          placeholder="Prénom"
        />
      </div>
      <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-first-name"> Nom </label>
      <input
        class="
          mb-3
          block
          w-full
          appearance-none
          rounded-3xl
          border border-orange-500
          bg-yellow-100
          py-3
          px-4
          leading-tight
          text-gray-700
          focus:bg-yellow-200 focus:outline-none
        "
        id="grid-name"
        type="text"
        placeholder="Nom de famille"
      />
      <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-first-name"> Adresse mail </label>
      <input
        class="
          mb-3
          block
          w-full
          appearance-none
          rounded-3xl
          border border-orange-500
          bg-yellow-100
          py-3
          px-4
          leading-tight
          text-gray-700
          focus:bg-yellow-200 focus:outline-none
        "
        id="grid-first-name"
        type="text"
        placeholder="adressemail@mail.com"
      />
      <div class="relative flex h-[43px] w-[251px] flex-shrink-0 flex-grow-0 items-start justify-center gap-1.5">
        <div class="h-[5px] w-1.5 flex-shrink-0 flex-grow-0 bg-[#c4c4c4]"></div>
        <p class="w-[244px] flex-shrink-0 flex-grow-0 text-left text-[10px] text-black">
          Je souhaite recevoir la newsletter et donne mon accord pour l’utilisation de mes données personnelle
        </p>
      </div>
      <div class="h-[45px] w-[246px] flex-shrink-0 flex-grow-0">
        <div class="absolute left-[26.5px] top-[300.5px] h-[45px] w-[185.79px] rounded-[23px] border-[3px] border-black bg-amber-100"></div>
        <p class="absolute left-[79.61px] top-[313.72px] h-[27.35px] w-[194.39px] text-left text-xl text-black">Rejoindre</p>
      </div>
    </div>
  </div>
</template>

<script>
import IconLogo from "./components/icons/IconLogo.vue";
import { FilmIcon } from "@heroicons/vue/outline";
import Header from "./components/icons/Header.vue";

export default {
  components: { IconLogo, FilmIcon, Header },
};
</script>