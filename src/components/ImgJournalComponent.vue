<template>
  <div class="col-12">
    <div class="card_slider" @click="$emit('changeImage')">
      <div class="img">
        <img :src="slider.img" :alt="slider.title" />
      </div>
      <div class="text_slider">
        <h6>{{ slider.title }}</h6>
        <p>
          {{ slider.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImgJournalComponent",
  props: {
    slider: Object,
    index: Number,
  },
};
</script>

<style lang="scss" scoped>
.col-12 {
  height: fit-content;
  .card_slider {
    display: flex;
    .img {
      width: 25%;
      img{
        width: 100%;
        aspect-ratio: 1 / 0.8;
      }
    }
    .text_slider {
      width: 75%;
      padding-left: 0.75rem;
      h6 {
        font-size: 15px;
        letter-spacing: 0.3px;
        color: #fcd66c;
        margin: 0.25rem 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow-x: hidden;
        width: 100%;
      }
      p {
        font-size: 11px;
        letter-spacing: 0;
        line-height: 25px;
        color: $text-light-dark;
        margin-bottom: 0;
      }
    }
  }
}
@media screen and (min-width: 2000px){
  .col-12 {
  .card_slider {
    .text_slider {
      width: 75%;
      padding-left: 1rem;
      h6 {
        font-size: 25px;
        margin: 0.5rem 0;
      }
      p {
        font-size: 18px;
        letter-spacing: 0;
        line-height: 38px;
      }
    }
  }
}}
</style>