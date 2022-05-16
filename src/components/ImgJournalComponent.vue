<template>
  <div class="col-12">
    <div class="card_slider">
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
    name:'ImgJournalComponent',
    props:{
        slider:Object
    }
};
</script>

<style lang="scss" scoped>
.col-12 {
      height: fit-content;
      .card_slider {
        display: flex;
        .img {
          width: 25%;
        }
        .text_slider {
          width: 75%;
          padding-left: 0.75rem;
          h6 {
            font-size: 15px;
            letter-spacing: 0.3px;
            color: $primary-color;
            margin: 0.25rem 0;
          }
          p {
            font-size: 11px;
            letter-spacing: 0;
            line-height: 25px;
            color: $text-dark;
            margin-bottom: 0;
          }
        }
      }
    }
</style>