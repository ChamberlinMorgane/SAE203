<template>
  <div class="w-100% relative flex flex-col items-center justify-center gap-[67px] overflow-hidden bg-blue-400 py-8">
    <div class="relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-center gap-[18px] overflow-hidden">
      <h3 class="flex-shrink-0 flex-grow-0 text-center text-xl font-bold text-black">
        Rejoint notre NewsLetter pour être au courrant des dernières actu !!
      </h3>
      <div class="items-start justify-start gap-5 self-stretch overflow-hidden">
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-first-name"> Nom</label>
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
          placeholder="Nom"
        />
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-first-name"> Prénom </label>
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
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-first-name"> Adresse mail </label>
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
          placeholder="adressemail@mail.com"
        />
        <div class="relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-2.5 rounded-[3px] bg-fuchsia-900 px-3 py-2">
          <p class="flex-shrink-0 flex-grow-0 text-center text-2xl font-semibold text-slate-50">Je m’inscris !</p>
        </div>
      </div>
    </div>
    <div class="relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-[50px]">
      <a href="https://www.instagram.com/"><img src="/icones/instagram.svg" alt="icone instagram" /></a>
      <a href="https://www.facebook.com/"><img src="/icones/facebook-app-symbol.svg" alt=" icone facebook" /></a>
      <a href="https://www.twitter.com/"><img src="/icones/twitter.svg" alt="" /></a>
    </div>
    <div class="grid grid-cols-4 gap-8">
      <a class="flex-shrink-0 flex-grow-0 text-center text-xl font-medium text-black" href="./programmation">Programmation</a>
      <a class="flex-shrink-0 flex-grow-0 text-center text-xl font-medium text-black" href="./festival">Festival</a>
      <a class="flex-shrink-0 flex-grow-0 text-center text-xl font-medium text-black" href="./artistes">Artistes</a>
      <a class="flex-shrink-0 flex-grow-0 text-center text-xl font-medium text-black" href="./contact">Contact</a>
      <a class="flex-shrink-0 flex-grow-0 text-center text-xl font-medium text-black" href="./mentionsLegales">Mentions légales</a>
      <a class="flex-shrink-0 flex-grow-0 text-center text-xl font-medium text-black" href="./guidestyle">Guide de style</a>
      <a class="flex-shrink-0 flex-grow-0 text-center text-xl font-medium text-black" href="./voschoix">Choix style</a>
      <a class="flex-shrink-0 flex-grow-0 text-center text-xl font-medium text-black" href="./choixartiste">Choix artiste</a>
    </div>
  </div>
</template>