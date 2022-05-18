<template>
  <main>
    <HeroSection />
    <MissionSection />
    <ValuesSection />
    <CausesSection />
    <JournalSection />
    <DonateSection @changeShowForm="openShowForm" />
    <DonateForm v-if="showForm" @changeShowForm="closeShowForm" />
  </main>
</template>

<script>
import HeroSection from "./HeroSectionComponent.vue";
import MissionSection from "./MissionSectionComponent.vue";
import ValuesSection from "./ValuesSectionComponent.vue";
import CausesSection from "./CausesSectionComponent.vue";
import JournalSection from "./JournalSectionComponent.vue";
import DonateSection from "./DonateSectionComponent.vue";
import DonateForm from "./DonateFormComponent.vue";

export default {
  name: "MainComponent",
  components: {
    HeroSection,
    MissionSection,
    ValuesSection,
    CausesSection,
    JournalSection,
    DonateSection,
    DonateForm,
  },
  data() {
    return {
      showForm: false,
    };
  },
  methods: {
    openShowForm() {
      this.showForm = true;
      setTimeout(
        () => document.getElementById("app").scrollIntoView(false),
        1000
      );
    },
    closeShowForm() {
      document.getElementById("6").classList.add("slider_close");
      setTimeout(() => {
        this.showForm = false;
        document.getElementById("6").classList.remove("slider_close");
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>