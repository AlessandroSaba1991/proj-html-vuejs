<template>
  <section id="1" class="hero">
    <div class="hero_text text-center">
      <h1 class="text-uppercase">make a difference</h1>
      <p>
        As long as poverty, injustice & inequality persist, none of us can truly
        rest
      </p>
      <div class="button text-uppercase">
        <a href="#2" class="btn_me btn_empty_light me-3">our mission</a>
        <a href="#5" class="btn_me btn_empty_primary">donate now</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSectionComponent",
};
</script>

<style lang="scss" scoped>
.hero {
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(@/assets/img/home-page-slider.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .hero_text {
    color: $text-light;
    h1 {
      font-size: 50px;
      font-weight: 400;
    }
    p {
      font-weight: 300;
    }
    .button {
      margin-top: 2rem;
    }
  }
}
@media screen and (min-width: 2000px) {
  .hero {
    height: 100vh;
    .hero_text {
      h1 {
        font-size: 80px;
      }
      p {
        font-size: 26px;
      }
      .button {
        margin-top: 4rem;
      }
    }
  }
}
</style>