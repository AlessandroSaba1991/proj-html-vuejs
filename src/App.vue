<template>
  <div id="app">
    <div class="splash" v-if="!loading"></div>
    <div class="wrapper" v-if="loading">
      <Header />
      <Main />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/HeaderComponent.vue";
import Main from "@/components/MainComponent.vue";
import Footer from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
  data() {
    return {
      loading: false,      
    };
  },
  methods: {
    splash() {
      setTimeout(() => {
        this.loading = true;
      }, 3500);
    },
  },
  mounted() {
    this.splash();
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style";
</style>
