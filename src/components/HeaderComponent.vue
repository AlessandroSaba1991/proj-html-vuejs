<template>
  <header>
    <div class="container">
     <Logo />
      <Nav />
    </div>
  </header>
</template>

<script>
import Logo from './LogoComponent.vue'
import Nav from './NavComponent.vue'

export default {
  name: "HeaderComponent",
  components:{
      Logo,
      Nav
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  padding: 1.5rem 0;
  position: fixed;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>