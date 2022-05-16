<template>
  <div class="footer_top">
      <img
        src="@/assets/img/avada-charity-mobile-logo-retina.png"
        alt="logo charity"
      />
    </div>
</template>

<script>
export default {
    name:'TopFooterComponent'
}
</script>

<style lang="scss" scoped>
.footer_top {
  padding: 2rem 0;
  img{
    width: 250px;
  }
}
@media screen and (min-width: 2000px){
  .footer_top{
    padding: 2.75rem 0;
    img{
    width: 370px;
  }
  }
}
</style>