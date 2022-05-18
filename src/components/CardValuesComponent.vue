<template>
  <div class="col">
    <div class="card_values" @mouseleave="dropdown_menu = false">
      <div class="icon mb-2">
        <font-awesome-icon :icon="value.icon" />
      </div>
      <h6 class="mb-3">{{ value.title }}</h6>
      <p>{{ value.text }}</p>
      <div
        class="button text-uppercase mt-4"
        @click="dropdown_menu === false ? dropdown_menu = true : dropdown_menu = false">
        <a class="btn_me btn_full_primary">Learn More</a>
      </div>
      <div class="dropdown_menu" v-if="dropdown_menu">
        <div class="text_dropdown">
          <div class="icon_mark" @click="dropdown_menu = false">
            <font-awesome-icon
              icon="fa-solid fa-xmark"
              @click="dropdown_menu = false"/>
          </div>
          <h6>{{ value.title }}</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            fuga reiciendis ipsam dolorum porro esse nulla velit, ullam ea
            alias, praesentium atque molestiae harum animi, vitae optio quas sed
            cumque. In placeat non obcaecati neque repudiandae laborum ullam
            explicabo nemo optio dignissimos dicta impedit omnis ducimus
            voluptas suscipit aliquam eius fugit, minima quis blanditiis
            perferendis a nulla. Magnam consequatur facere distinctio nesciunt!
            Ducimus pariatur veniam qui dolorum soluta magnam quisquam odio
            cumque temporibus nulla expedita magni est dignissimos odit commodi
            id quos, modi perferendis minus. Nisi sed tempora suscipit
          </p>
        </div>
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
  data() {
    return {
      dropdown_menu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.card_values {
  position: relative;
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
  .dropdown_menu {
    position: absolute;
    top: -30%;
    left: 0;
    z-index: 1;
    height: 110%;
    overflow-y: auto;
    padding: 2rem;
    text-align: center;
    background-color: rgb(187 160 86 / 93%);
    border-radius: 0.25rem;
    box-shadow: 0 0 10px $primary-color;
    animation: entry 1s ease-in-out;
    .text_dropdown {
      position: relative;
      .icon_mark {
        position: absolute;
        top: -6%;
        right: -3%;
      }
      h6 {
        font-weight: 300;
      }
      p {
        font-size: 12px;
        line-height: 23px;
        letter-spacing: 0;
        font-weight: 100;
      }
    }
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