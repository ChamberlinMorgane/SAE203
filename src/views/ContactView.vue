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
  <form class="mx-56 mb-14 w-full max-w-lg">
    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-white" for="grid-first-name"> Prénom </label>
        <input
          class="
            text-grey-600
            mb-3
            block
            w-full
            appearance-none
            rounded
            border border-red-500
            bg-gray-200
            py-3
            px-4
            leading-tight
            focus:bg-white focus:outline-none
          "
          id="grid-first-name"
          type="text"
          placeholder="Jane"
        />
        <p class="text-xs italic text-red-500">Veillez completer ce champ</p>
      </div>
      <div class="w-full px-3 md:w-1/2">
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-last-name"> Nom </label>
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
          placeholder="Doe"
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
        />
      </div>
    </div>

    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="w-full px-3">
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-white" for="grid-password"> Objet </label>
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
            text-gray-600
            focus:border-gray-500 focus:bg-white focus:outline-none
          "
          id="email"
          type="email"
        />
      </div>
    </div>

    <div class="mb-12">
      <div class="form-check">
        <input
          class="
            form-check-input
            float-left
            mx-7
            mt-1
            mr-2
            h-4
            w-4
            cursor-pointer
            appearance-none
            rounded-sm
            border border-gray-300
            bg-white bg-contain bg-center bg-no-repeat
            align-top
            transition
            duration-200
            checked:border-blue-600 checked:bg-blue-600
            focus:outline-none
          "
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label inline-block text-white" for="flexCheckDefault">
          Je rencontre des problèmes de chargement sur le site
        </label>
      </div>

      <div class="form-check">
        <input
          class="
            form-check-input
            float-left
            mx-7
            mt-1
            mr-2
            h-4
            w-4
            cursor-pointer
            appearance-none
            rounded-sm
            border border-gray-300
            bg-white bg-contain bg-center bg-no-repeat
            align-top
            transition
            duration-200
            checked:border-blue-600 checked:bg-blue-600
            focus:outline-none
          "
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label class="form-check-label inline-block text-white" for="flexCheckChecked"> Je n’arrive pas à joindre les liens </label>
      </div>

      <div class="form-check">
        <input
          class="
            form-check-input
            float-left
            mx-7
            mt-1
            mr-2
            h-4
            w-4
            cursor-pointer
            appearance-none
            rounded-sm
            border border-gray-300
            bg-white bg-contain bg-center bg-no-repeat
            align-top
            transition
            duration-200
            checked:border-blue-600 checked:bg-blue-600
            focus:outline-none
          "
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label class="form-check-label inline-block text-white" for="flexCheckChecked"> Je rencontre des bugs fréquents </label>
      </div>

      <div class="form-check">
        <input
          class="
            form-check-input
            float-left
            mx-7
            mt-1
            mr-2
            h-4
            w-4
            cursor-pointer
            appearance-none
            rounded-sm
            border border-gray-300
            bg-white bg-contain bg-center bg-no-repeat
            align-top
            transition
            duration-200
            checked:border-blue-600 checked:bg-blue-600
            focus:outline-none
          "
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label class="form-check-label inline-block text-white" for="flexCheckChecked"> Utilisation du site </label>
      </div>

      <div class="form-check">
        <input
          class="
            form-check-input
            float-left
            mx-7
            mt-1
            mr-2
            h-4
            w-4
            cursor-pointer
            appearance-none
            rounded-sm
            border border-gray-300
            bg-white bg-contain bg-center bg-no-repeat
            align-top
            transition
            duration-200
            checked:border-blue-600 checked:bg-blue-600
            focus:outline-none
          "
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label class="form-check-label inline-block text-white" for="flexCheckChecked"> Confidentialité </label>
      </div>

      <div class="form-check">
        <input
          class="
            form-check-input
            float-left
            mx-7
            mt-1
            mr-2
            h-4
            w-4
            cursor-pointer
            appearance-none
            rounded-sm
            border border-gray-300
            bg-white bg-contain bg-center bg-no-repeat
            align-top
            transition
            duration-200
            checked:border-blue-600 checked:bg-blue-600
            focus:outline-none
          "
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label class="form-check-label inline-block text-white" for="flexCheckChecked"> Dépannage </label>
      </div>

      <div class="form-check">
        <input
          class="
            form-check-input
            float-left
            mx-7
            mt-1
            mr-2
            h-4
            w-4
            cursor-pointer
            appearance-none
            rounded-sm
            border border-gray-300
            bg-white bg-contain bg-center bg-no-repeat
            align-top
            transition
            duration-200
            checked:border-blue-600 checked:bg-blue-600
            focus:outline-none
          "
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked"> Autre </label>
      </div>
    </div>

    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="w-full px-3">
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-password"> Votre message </label>
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
        ></textarea>
      </div>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3">
        <button
          class="
            focus:shadow-outline
            hover:bg-orange-fonce
            rounded
            border-2 border-white
            py-2
            px-4
            font-bold
            text-white
            shadow
            focus:outline-none
          "
          type="button"
        >
          Envoyez
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