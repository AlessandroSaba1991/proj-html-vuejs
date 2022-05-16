<template>
  <footer>
    <TopFooter />
    <BottomFooter />
  </footer>
</template>

<script>
import TopFooter from "./TopFooterComponent.vue";
import BottomFooter from "./BottomFooterComponent.vue";

export default {
  name: "FooterComponent",
  components: {
    TopFooter,
    BottomFooter,
  },
};
</script>

<style lang="scss" scoped>
footer {
  text-align: center;
}
</style>