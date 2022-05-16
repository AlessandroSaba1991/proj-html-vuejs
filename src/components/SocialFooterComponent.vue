<template>
  <div class="social">
    <font-awesome-icon :icon="'fa-brands ' + social.name" />
  </div>
</template>

<script>
export default {
  name: "SocialFooterComponent",
  props: {
    social: Object,
  },
};
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: $text-light;
  color: $primary-color;
  border-radius: 50%;
  padding: 0.5rem;
  transition: all 500ms;
}
.social:hover{
  transform: scale(1.3);
}
@media screen and (min-width: 2000px) {
  .social {
    font-size: 30px;
    width: 55px;
    height: 55px;
  }
}
</style>