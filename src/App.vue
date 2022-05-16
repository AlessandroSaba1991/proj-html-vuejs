<template>
  <div id="app">
    <Header />
   <Main />
   <Footer />
  </div>
</template>

<script>
import Header from "@/components/HeaderComponent.vue";
import Main from '@/components/MainComponent.vue'
import Footer from './components/FooterComponent.vue'

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style";
</style>
