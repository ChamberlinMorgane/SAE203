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
        <p class="text-white! my-44 animate-bounce text-8xl font-extrabold">404</p>
        <form action="#" method="POST">
          <div class="flex items-center justify-center text-black">
            <input
              type="text"
              name="search"
              placeholder="What are you looking for?"
              class="
                dark:bg-darker
                w-full
                rounded-l-md
                px-4
                py-2
                focus:outline-none focus:ring focus:ring-blue-400
                dark:focus:ring-blue-800
              "
            />
            <button
              class="
                focus:ring-primary-light
                dark:focus:ring-primary-darker
                rounded-r-md
                bg-blue-600
                p-2
                text-white
                hover:bg-blue-700
                focus:outline-none focus:ring
                dark:bg-blue-700 dark:hover:bg-blue-800
              "
            >
              <span class="sr-only">Recherche</span>
              <svg
                aria-hidden="true"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>
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