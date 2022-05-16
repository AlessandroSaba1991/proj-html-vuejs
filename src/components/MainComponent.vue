<template>
  <main>
    <HeroSection />
    <MissionSection />
    <ValuesSection />
    <CausesSection />
    <JournalSection />
    <DonateSection />
  </main>
</template>

<script>
import HeroSection from "./HeroSectionComponent.vue";
import MissionSection from "./MissionSectionComponent.vue";
import ValuesSection from "./ValuesSectionComponent.vue";
import CausesSection from "./CausesSectionComponent.vue";
import JournalSection from "./JournalSectionComponent.vue";
import DonateSection from './DonateSectionComponent.vue'

export default {
  name: "MainComponent",
  components: {
    HeroSection,
    MissionSection,
    ValuesSection,
    CausesSection,
    JournalSection,
    DonateSection
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 2000px){
  .title_me {
      h2 {
        font-size: 38px;
        color: $text-dark;
      }
      p {
        font-family: "Raleway", sans-serif;
        letter-spacing: 0;
        margin-bottom: 4rem;
        color: $text-light-dark;
      }
    }
}
</style>