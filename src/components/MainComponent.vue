<template>
  <main>
    <HeroSection />
    <MissionSection />
    <ValuesSection />
    <CausesSection />
    <JournalSection />
  </main>
</template>

<script>
import HeroSection from "./HeroSectionComponent.vue";
import MissionSection from "./MissionSectionComponent.vue";
import ValuesSection from "./ValuesSectionComponent.vue";
import CausesSection from "./CausesSectionComponent.vue";
import JournalSection from './JournalSectionComponent.vue'

export default {
  name: "MainComponent",
  components: {
    HeroSection,
    MissionSection,
    ValuesSection,
    CausesSection,
    JournalSection
  },
};
</script>

<style lang="scss" scoped>

</style>