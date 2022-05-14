<template>
  <div class="col">
    <picture>
      <source :srcset="imgCauses.original" media="(min-width: 1400px)" />
      <source :srcset="imgCauses.lg" media="(min-width: 992px)" />
      <source :srcset="imgCauses.md" media="(min-width: 768px)" />
      <img :src="imgCauses.xs" :alt="imgCauses.text" />
    </picture>
  </div>
</template>

<script>
export default {
  name: "ImgCausesComponent",
  props: {
    imgCauses: Object,
  },
};
</script>

<style>
</style>