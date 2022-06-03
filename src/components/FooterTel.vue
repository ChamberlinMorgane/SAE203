<template>
  <div class="mt-40 flex w-full flex-col items-center justify-center gap-12 overflow-hidden bg-blue-400 py-8">
    <div class="">
      <h3 class="mb-5 text-center text-xl font-bold text-black">Rejoint notre NewsLetter pour être au courrant des dernières actu !!</h3>

      <div class="mx-3">
        <label class="text-black" for="grid-first-name">Nom</label>
        <input
          class="
            mb-3
            block
            w-full
            appearance-none
            rounded-3xl
            border border-purple-500
            bg-purple-100
            py-3
            px-4
            leading-tight
            text-gray-500
            focus:bg-purple-200 focus:outline-none
          "
          id="grid-first-name"
          type="text"
          placeholder="Nom"
        />
        <label class="text-black" for="grid-first-name"> Prénom </label>
        <input
          class="
            mb-3
            block
            w-full
            appearance-none
            rounded-3xl
            border border-purple-500
            bg-purple-100
            py-3
            px-4
            leading-tight
            text-gray-700
            focus:bg-purple-200 focus:outline-none
          "
          id="grid-first-name"
          type="text"
          placeholder="Prénom"
        />
        <label class="text-black" for="grid-first-name"> Adresse mail </label>
        <input
          class="
            mb-3
            block
            w-full
            appearance-none
            rounded-3xl
            border border-purple-500
            bg-purple-100
            py-3
            px-4
            leading-tight
            text-gray-700
            focus:bg-purple-200 focus:outline-none
          "
          id="grid-first-name"
          type="text"
          placeholder="Adresse mail"
        />
        <div class="gap-2.5 rounded-[3px] bg-fuchsia-900 py-2">
          <p class="flex-shrink-0 flex-grow-0 text-center font-semibold text-slate-50 lg:text-2xl">Je m’inscris !</p>
        </div>
      </div>
    </div>
    <Logo />
    <div class="grid grid-cols-3 justify-center gap-5">
      <a href="https://www.instagram.com/"><img class="px-2" src="/icones/instagram.svg" alt="icone instagram" /></a>
      <a href="https://www.facebook.com/"><img class="px-2" src="/icones/facebook-app-symbol.svg" alt=" icone facebook" /></a>
      <a href="https://www.twitter.com/"><img class="px-2" src="/icones/twitter.svg" alt="" /></a>
    </div>
    <div class="mx-auto grid grid-cols-2 gap-x-10 gap-y-2 text-left text-base text-black">
      <a href="./programmation">Programmation</a>
      <a href="./festival">Festival</a>
      <a href="./artistes">Artistes</a>
      <a href="./contact">Contact</a>
      <a href="./mentionsLegales">Mentions légales</a>
      <a href="./guidestyle">Guide de style</a>
      <a href="./voschoix">Choix style</a>
      <a href="./choixartiste">Choix artiste</a>
    </div>
  </div>
</template>
