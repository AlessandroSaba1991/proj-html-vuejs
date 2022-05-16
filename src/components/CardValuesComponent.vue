<template>
  <div class="col">
    <div class="card_values">
      <div class="icon mb-2">
        <font-awesome-icon :icon="value.icon" />
      </div>
      <h6 class="mb-3">{{ value.title }}</h6>
      <p>{{ value.text }}</p>
      <div class="button text-uppercase mt-4">
        <a href="#" class="btn_me btn_full_primary">Learn More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardValuesComponent",
  props: {
    value: Object,
  },
};
</script>

<style lang="scss" scoped>
.card_values {
  .icon {
    font-size: 49px;
    color: $primary-color;
  }
  h6 {
    font-weight: 300;
  }
  p {
    font-size: 11px;
    line-height: 23px;
    letter-spacing: 0;
    font-weight: 100;
  }
  .button {
    margin-bottom: 2rem;
  }
}
@media screen and (min-width: 2000px) {
  .card_values {
    .icon {
      font-size: 78px;
      color: $primary-color;
      margin-bottom: 0 !important;
    }
    h6 {
      font-size: 25px;
      margin-bottom: 2rem !important;
      font-weight: 400;
    }
    p {
      font-size: 17px;
      line-height: 40px;
    }
    .button {
      margin-top: 3.5rem !important;
      margin-bottom: 4rem;
    }
  }
}
</style>