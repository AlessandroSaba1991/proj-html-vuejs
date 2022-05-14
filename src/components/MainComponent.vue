<template>
  <main>
    <HeroSection />
    <MissionSection />
    <ValuesSection />
    <CausesSection />
  </main>
</template>

<script>
import HeroSection from "./HeroSectionComponent.vue";
import MissionSection from "./MissionSectionComponent.vue";
import ValuesSection from "./ValuesSectionComponent.vue";
import CausesSection from './CausesSectionComponent.vue'

export default {
  name: "MainComponent",
  components: {
    HeroSection,
    MissionSection,
    ValuesSection,
    CausesSection
  },
};
</script>

<style lang="scss" scoped>

</style>