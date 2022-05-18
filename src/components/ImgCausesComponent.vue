<template>
  <div class="col">
    <picture @click="dropdown_image = true">
      <source :srcset="imgCauses.original" media="(min-width: 1400px)" />
      <source :srcset="imgCauses.lg" media="(min-width: 992px)" />
      <source :srcset="imgCauses.md" media="(min-width: 768px)" />
      <img :src="imgCauses.xs" :alt="imgCauses.text" />
    </picture>
    <div class="dropdown_image" v-if="dropdown_image">
      <div class="img">
        <div class="icon_mark" @click="dropdown_image = false">
          <font-awesome-icon
            icon="fa-solid fa-xmark"
            @click="dropdown_menu = false"
          />
        </div>
        <div class="text_dropdown">
          <h4>Lorem</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
            saepe totam veniam amet numquam dolores! Provident non id quia?
            Ullam?
          </p>
        </div>
        <img :src="imgCauses.original" :alt="imgCauses.text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImgCausesComponent",
  props: {
    imgCauses: Object,
  },
  data() {
    return {
      dropdown_image: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.dropdown_image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 38%;
  border-radius: 0.25rem;
  box-shadow: 0 0 10px $secondary-color;
  color: red;
  animation: appear 1s;
  .img {
    position: relative;
    img {
      border-radius: 0.25rem;
      width: 100%;
    }
    .icon_mark {
      position: absolute;
      top: 1%;
      right: 1%;
    }
    .text_dropdown {
      padding: 1rem;
      color: $text-light;
      background-color: #ed686480;
      position: absolute;
      bottom: 0;
    }
  }
}
</style>