<template>
  <main>
    <HeroSection />
    <MissionSection />
    <ValuesSection />
  </main>
</template>

<script>
import HeroSection from "./HeroSectionComponent.vue";
import MissionSection from "./MissionSectionComponent.vue";
import ValuesSection from './ValuesSectionComponent.vue'

export default {
  name: "MainComponent",
  components: {
    HeroSection,
    MissionSection,
    ValuesSection
  },
};
</script>

<style lang="scss" scoped>

</style>