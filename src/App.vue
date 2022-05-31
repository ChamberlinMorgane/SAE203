<template>
  <header>
    <Headermobile class="lg:hidden" />
    <Header class="hidden lg:flex" />
  </header>

  <RouterView />
  <footer>
    <Footer class="hidden sm:flex" />
    <FooterTel class="sm:hidden" />
  </footer>
</template>

<script>
import IconLogo from "./components/icons/IconLogo.vue";
import { FilmIcon } from "@heroicons/vue/outline";
import Header from "./components/Header.vue";
import Headermobile from "./components/Headermobile.vue";
import Footer from "./components/Footer.vue";
import FooterTel from "./components/FooterTel.vue";

export default {
  components: { IconLogo, FilmIcon, Headermobile, Header, Footer, FooterTel },
};
</script>