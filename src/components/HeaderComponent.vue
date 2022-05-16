<template>
  <header>
    <div class="container">
     <LogoHeader />
      <Nav />
    </div>
  </header>
</template>

<script>
import LogoHeader from './LogoHeaderComponent.vue'
import Nav from './NavComponent.vue'

export default {
  name: "HeaderComponent",
  components:{
      LogoHeader,
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