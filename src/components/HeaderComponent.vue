<template>
  <header class="my_header" :class="bgNav()">
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
      h1: "",
      h2: "",
      h_values: "",
      h3: "",
      h4: "",
      h5: "",
      h_header: "",
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      this.take_values();      
    },
    bgNav() {
      const first_step = this.h1 - this.h_header;
      const second_step = first_step + this.h2;
      const third_step = second_step + this.h_values;
      const fourth_step = third_step + this.h3 + this.h4;
      const fifth_step = fourth_step + this.h5;
      let class_bg;
      if (this.scrollPosition > fifth_step) {
        class_bg = "bg_secondary";
      } else if (this.scrollPosition > fourth_step) {
        class_bg = "bg_primary";
      } else if (this.scrollPosition > third_step) {
        class_bg = "bg_secondary";
      } else if (this.scrollPosition > second_step) {
        class_bg = "bg_primary";
      } else if (this.scrollPosition > first_step) {
        class_bg = "bg_secondary";
      }
      return class_bg;
    },
    take_values() {
      this.h1 = document.getElementById("1").clientHeight;
      this.h2 = document.getElementById("2").clientHeight;
      this.h_values = document.querySelector(".values").clientHeight;
      this.h3 = document.getElementById("3").clientHeight;
      this.h4 = document.getElementById("4").clientHeight;
      this.h5 = document.getElementById("5").clientHeight;
      this.h_header = document.querySelector(".my_header").clientHeight / 2;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    setTimeout(() => {
      this.take_values();
    }, 200);
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  padding: 1.5rem 0;
  position: fixed;
  z-index: 2;
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