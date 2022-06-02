<template>
  <div class="mt-20 mb-20">
    <div class="h-1 w-full bg-white"></div>
    <div class="flex items-center justify-between py-8">
      <div class="h-1 w-1/3 bg-white"></div>
      <div class="flex w-1/3 justify-around">
        <h2 class="font-staatliches text-3xl">CONTACT</h2>
      </div>
      <div class="h-1 w-1/3 bg-white"></div>
    </div>
    <div class="h-1 w-full bg-white"></div>
  </div>

  <form class="mx-auto w-3/4">
    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-white" for="grid-first-name">Nom</label>
        <input
          class="
            text-grey-600
            mb-3
            block
            w-full
            appearance-none
            rounded
            border border-gray-500
            bg-gray-100
            py-3
            px-4
            leading-tight
            focus:bg-white focus:outline-none
          "
          id="grid-first-name"
          type="text"
          placeholder="[Entrer votre nom ici]"
        />
        <p class="text-xs text-red-600">Champ obligatoire</p>
      </div>
      <div class="w-full px-3 md:w-1/2">
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-200" for="grid-last-name">Prénom</label>
        <input
          class="
            text-grey-600
            block
            w-full
            appearance-none
            rounded
            border border-gray-200
            bg-gray-200
            py-3
            px-4
            leading-tight
            focus:border-gray-500 focus:bg-white focus:outline-none
          "
          id="grid-last-name"
          type="text"
          placeholder="[Entrer votre prénom ici]"
        />
      </div>
    </div>
    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="w-full px-3">
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-white" for="grid-password"> E-mail </label>
        <input
          class="
            mb-3
            block
            w-full
            appearance-none
            rounded
            border border-gray-200
            bg-gray-200
            py-3
            px-4
            leading-tight
            text-white
            focus:border-gray-500 focus:bg-white focus:outline-none
          "
          id="email"
          type="email"
          placeholder="[Entrer votre adresse mail ici]"
        />
      </div>
    </div>

    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="w-full px-3">
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-white" for="grid-password"> Message </label>
        <textarea
          class="
            no-resize
            mb-3
            block
            h-48
            w-full
            resize-none
            appearance-none
            rounded
            border border-gray-200
            bg-gray-200
            py-3
            px-4
            leading-tight
            text-gray-700
            focus:border-gray-500 focus:bg-white focus:outline-none
          "
          id="message"
          placeholder="[Entrer votre message ici]"
        ></textarea>
      </div>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3">
        <button
          class="
            focus:shadow-outline
            rounded
            border-2
            bg-cyan-600
            py-2
            px-4
            font-bold
            text-white
            shadow
            hover:bg-cyan-900
            focus:outline-none
          "
          type="button"
        >
          Envoyer
        </button>
      </div>
      <div class="md:w-2/3"></div>
    </div>
  </form>

  <a
    href="https://www.google.fr/maps/place/Parc+Paul+Mistral/@45.1853783,5.734433,17z/data=!3m1!4b1!4m5!3m4!1s0x478af4f18f9b536d:0x27fb9854ae7d0cf2!8m2!3d45.1853745!4d5.736627"
    ><img class="m-auto mb-20 flex h-2/6 w-3/6 justify-center" src="/img/carte.jpg" alt="carte"
  /></a>
</template>