<template>
  <main>
    <HeroSection />
    <MissionSection />
    <ValuesSection />
    <CausesSection />
    <JournalSection />
    <DonateSection @changeShowForm="openShowForm" />
    <DonateForm
      v-if="showForm"
      @changeShowForm="ValidShowForm"
      @closeShowForm="closeShowForm"
    />
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
      setTimeout(() => {
        const h6 = document.getElementById("6").clientHeight - 160;
        window.scrollBy(0, h6);
      }, 1000);
    },
    ValidShowForm() {
      setTimeout(() => {
        document.getElementById("6").classList.add("slider_close");
        setTimeout(() => {
          this.showForm = false;
          document.getElementById("6").classList.remove("slider_close");
        }, 1000);
      }, 2000);
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