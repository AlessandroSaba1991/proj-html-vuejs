<template>
  <div class="logo">
    <img src="@/assets/img/avada-charity-logo.png" alt="logo charity" />
  </div>
</template>

<script>
export default {
  name: "LogoHeaderComponent",
};
</script>

<style lang="scss" scoped>
img {
  width: 250px;
}
@media screen and (min-width: 2000px) {
  img {
    width: 370px;
  }
}
</style>