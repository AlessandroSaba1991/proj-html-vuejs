<template>
  <section id="2" class="mission">
    <div class="container-fluid">
      <div class="row">
        <div class="col-8">
          <div class="mission_text">
            <h2 class="text-uppercase mb-3">every moment counts</h2>
            <div class="gold_line mb-4"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In sunt
              quos eum assumenda eligendi ipsum nostrum autem ratione
              reprehenderit pariatur.
            </p>
            <p>
              Debitis reiciendis officiis inventore repudiandae, vel
              repellendus, laudantium commodi! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. In reiciendis quae, illo distinctio
              veniam sunt, quia, a perferendis excepturi sunt.
            </p>
            <p>
              Adipisci porro nemo ipsa non harum maxime enim ducimus!inventore
              repudiandae, vel repellendus, laudantium modi!
            </p>
            <div class="button text-uppercase">
              <a class="btn_me btn_full_primary" href="#2">our mission</a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="mission_data">
            <h2>
              <font-awesome-icon icon="fa-regular fa-heart" /> <span>2032</span>
            </h2>
            <p>Volunteers worldwide</p>
            <h2>
              <font-awesome-icon icon="fa-solid fa-globe" /> <span>132</span>
            </h2>
            <p>Active projects</p>
            <h2>
              <font-awesome-icon icon="fa-solid fa-dollar-sign" /> <span>3.8M</span>
            </h2>
            <p>Donated</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MissionSectionComponent",
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
  .button {
    color: $text-light;
    margin-top: 1.5rem;
  }
}
.col-4 {
  background-image: url("@/assets/img/home-content-bg-1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .mission_data {
    font-family: "Raleway", sans-serif;
    text-align: center;
    padding: 5rem 0;
    color: $text-light;
    h2 {
      margin-bottom: 0;
      &:hover {
        backface-visibility: visible !important;
        animation: flip 2s ease;
      }
      span {
        font-size: 40px;
      }
    }
    p {
      margin-bottom: 2.4rem;
    }
    p:last-child {
      margin-bottom: 0;
    }
  }
}

@keyframes flip {
  0% {
    transform: perspective(600px) rotateY(0);
    animation-timing-function: ease-out;
  }
  40% {
    transform: perspective(600px) translateZ(150px) rotateY(170deg);
    animation-timing-function: ease-out;
  }
  50% {
    transform: perspective(600px) translateZ(150px) rotateY(190deg) scale(1);
    animation-timing-function: ease-in;
  }
  80% {
    transform: perspective(600px) rotateY(360deg) scale(0.95);
    animation-timing-function: ease-in;
  }
  100% {
    transform: perspective(600px) scale(1);
    animation-timing-function: ease-in;
  }
}

@media screen and (min-width: 2000px) {
  .mission_text {
    padding-top: 10rem;
    padding-bottom: 11rem;
    h2 {
      margin-top: 12px;
      margin-bottom: 1.5rem !important;
      font-size: 42px;
    }
    p {
      font-size: 20px;
      line-height: 45px;
    }
    .button {
      margin-top: 3.5rem;
      margin-bottom: 2rem;
    }
  }
  .col-4 {
    .mission_data {
      padding-top: 10rem;
      padding-bottom: 11rem;
      h2 {
        font-size: 46px;
        span {
          font-size: 58px;
        }
      }
      p {
        font-size: 23px;
        margin-bottom: 5.5rem;
      }
      p:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>