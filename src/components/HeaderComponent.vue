<template>
  <header :class="bgNav()">
    <div class="container">
      <LogoHeader />
      <Nav />
    </div>
  </header>
</template>

<script>
import LogoHeader from "./LogoHeaderComponent.vue";
import Nav from "./NavComponent.vue";

export default {
  name: "HeaderComponent",
  components: {
    LogoHeader,
    Nav,
  },
  data() {
    return {
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    bgNav() {
      let class_bg
      if (this.scrollPosition > 5770) {
        class_bg ='bg_trasparent'
      } else if (this.scrollPosition > 3080) {
        class_bg ='bg_secondary'
      } else if (this.scrollPosition > 2060) {
        class_bg ='bg_trasparent'
      } else if (this.scrollPosition >  1220) {
        class_bg ='bg_secondary'
      }
      return class_bg
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  padding: 1.5rem 0;
  position: fixed;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media screen and (min-width: 2000px) {
  header {
    padding: 2.5rem 0;
  }
  .container {
    max-width: 91%;
  }
}
</style>