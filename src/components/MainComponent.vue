<template>
  <main>
    <HeroSection />
    <section class="mission">
      <div class="container-fluid">
        <div class="row">
          <div class="col-8">
            <div class="mission_text">
              <h2 class="text-uppercase mb-3">every moment counts</h2>
              <div class="gold_line mb-4"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                sunt quos eum assumenda eligendi ipsum nostrum autem ratione
                reprehenderit pariatur.
              </p>
              <p>
                Debitis reiciendis officiis inventore repudiandae, vel
                repellendus, laudantium commodi! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. In reiciendis quae, illo
                distinctio veniam sunt, quia, a perferendis excepturi ad
                distinctio veniam sunt.
              </p>
              <p>
                Adipisci porro nemo ipsa non harum maxime enim ducimus!inventore
                repudiandae, vel repellendus, laudantium modi!
              </p>
              <div class="button text-uppercase mt-4">
                <a class="btn_me btn_full_primary" href="#">our mission</a>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="mission_data">
              <h2><font-awesome-icon icon="fa-regular fa-heart" size="m"/> <span>2032</span></h2>
              <p>Volunteers worldwide</p>
              <h2><font-awesome-icon icon="fa-solid fa-globe" /> <span>132</span></h2>
              <p>Active project</p>
              <h2><font-awesome-icon icon="fa-solid fa-dollar-sign" /> <span>3.8M</span></h2>
              <p>Donated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import HeroSection from "./HeroSectionComponent.vue";

export default {
  name: "MainComponent",
  components: {
    HeroSection,
  },
};
</script>

<style lang="scss" scoped>
.mission_text {
  width: 80%;
  padding: 5rem 0;
  margin: 0 auto;
  h2 {
    font-size: 26px;
    color: $text-dark;
  }
  p {
    font-size: 12px;
    letter-spacing: 0;
    line-height: 28px;
    color: $text-light-dark;
  }
}
.mission_data {
  font-family: "Raleway", sans-serif;
  text-align: center;
  padding: 5rem 0;
  color: $text-light;
  h2 {
      margin-bottom: 0;
      span{
          font-size: 40px;
      }
  }
  p{
      margin-bottom: 2.4rem;
  }
  p:last-child{
      margin-bottom: 0;
  }
}
.col-4 {
  background-image: url("@/assets/img/home-content-bg-1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>