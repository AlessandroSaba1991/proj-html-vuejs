<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
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
};
</script>

<style lang="scss">
@import "@/assets/scss/style";
@media screen and (min-width: 2000px){
  .title_me {
      h2 {
        font-size: 42px !important;
        margin-bottom: 1.5rem !important;
      }
      p {
        font-size: 24px !important;
        margin-bottom: 6rem !important;        
      }
    }
}
</style>
