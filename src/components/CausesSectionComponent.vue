<template>
  <section id="3" class="causes">
    <div class="container">
      <div class="title_me">
        <h2 class="text-uppercase mb-3">Recent Causes</h2>
        <div class="gold_line mb-4"></div>
        <p>We run projects in over 30 countries in 5 continents</p>
      </div>
      <div class="row row-cols-4 gx-4">
        <ImgCauses :imgCauses="imgCauses" v-for="imgCauses in imgCausesList" :key="imgCauses.id" />
      </div>
    </div>
    <div class="link_causes">
      <a class="text-uppercase" href="#3">view all our causes</a>
    </div>
  </section>
</template>

<script>
import ImgCauses from "./ImgCausesComponent.vue";

export default {
  name: "CausesSectionComponent",
  components: {
    ImgCauses,
  },
  data() {
    return {
      imgCausesList: [
        {
          id: 1,
          text: "Fair Trade",
          original: require("@/assets/img/avada-charity-fair-trade-featured.jpg"),
          lg: require("@/assets/img/avada-charity-fair-trade-featured-600x450.jpg"),
          md: require("@/assets/img/avada-charity-fair-trade-featured-400x300.jpg"),
          xs: require("@/assets/img/avada-charity-fair-trade-featured-200x150.jpg"),
        },
        {
          id: 2,
          text: "Shelter",
          original: require("@/assets/img/avada-charity-shelter-featured.jpg"),
          lg: require("@/assets/img/avada-charity-shelter-featured-600x450.jpg"),
          md: require("@/assets/img/avada-charity-shelter-featured-400x300.jpg"),
          xs: require("@/assets/img/avada-charity-shelter-featured-200x150.jpg"),
        },
        {
          id: 3,
          text: "Farming",
          original: require("@/assets/img/avada-charity-farming-featured.jpg"),
          lg: require("@/assets/img/avada-charity-farming-featured-600x450.jpg"),
          md: require("@/assets/img/avada-charity-farming-featured-400x300.jpg"),
          xs: require("@/assets/img/avada-charity-farming-featured-200x150.jpg"),
        },
        {
          id: 4,
          text: "Vaccines",
          original: require("@/assets/img/avada-charity-vaccines-featured.jpg"),
          lg: require("@/assets/img/avada-charity-vaccines-featured-600x450.jpg"),
          md: require("@/assets/img/avada-charity-vaccines-featured-400x300.jpg"),
          xs: require("@/assets/img/avada-charity-vaccines-featured-200x150.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.causes {
  position: relative;
  padding-top: 5rem;
  text-align: center;
  .container {
    max-width: 1200px;
    .title_me {
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        font-size: 26px;
        color: $text-dark;
      }
      p {
        font-family: "Raleway", sans-serif;
        letter-spacing: 0;
        margin-bottom: 4rem;
        color: $text-light-dark;
      }
    }
  }
  .link_causes {
    margin-top: 5rem;
    padding: 2.5rem 0;
    background-color: $secondary-color;
    text-align: center;
    a {
      color: $text-light;
      font-size: 14px;
      transition: all 500ms;
    }
    a:hover{
      color: $primary-color;
    }
  }
}
@media screen and (min-width: 2000px){
  .causes {
  padding-top: 10rem;
  .container {
    max-width: 82%;
    .title_me{
      margin-bottom: 3rem;
    }
  }
  .link_causes {
    margin-top: 10rem;
    padding: 4rem 0;
    a {
      font-size: 20px;
    }
  }
}
}
</style>