<template>
  <section id="5" class="donate">
    <div class="title_me">
      <h2 class="text-uppercase mb-3">change a life today</h2>
      <div class="gold_line mb-4"></div>
      <p>
        As long as poverty, injustice & inequality persist, none of us can truly
        rest. It doesn't <br />
        take much to change a life, Get in tousch today and start making the
        difference
      </p>
    </div>
    <div class="button text-uppercase mb-5">
      <a href="#6" class="btn_me btn_empty_light" @click="$emit('changeShowForm')">volunteer</a>
      <a href="#5" class="btn_me btn_empty_light">donate now</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "DonateSectionComponent",
};
</script>

<style lang="scss" scoped>
.donate {
  text-align: center;
  color: $text-light;
  padding: 6rem 0;
  background-image: url("@/assets/img/home-footer.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .title_me {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 26px;
      font-weight: 400;
    }
    p {
      letter-spacing: 0;
      margin-bottom: 2.5rem;
    }
  }
  a:first-child {
    margin-right: 2.5rem;
  }
}
@media screen and (min-width: 2000px) {
  .donate {
    padding: 12rem 0;
    .title_me {
      p {
        margin-bottom: 4rem !important;
      }
    }
    a:first-child {
      margin-right: 4rem;
    }
  }
}
</style>