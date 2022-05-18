<template>
  <main>
    <HeroSection />
    <MissionSection />
    <ValuesSection />
    <CausesSection />
    <JournalSection />
    <DonateSection @changeShowForm="changeShowForm"/>
    <DonateForm v-if="showForm" @changeShowForm="changeShowForm" />
  </main>
</template>

<script>
import HeroSection from "./HeroSectionComponent.vue";
import MissionSection from "./MissionSectionComponent.vue";
import ValuesSection from "./ValuesSectionComponent.vue";
import CausesSection from "./CausesSectionComponent.vue";
import JournalSection from "./JournalSectionComponent.vue";
import DonateSection from "./DonateSectionComponent.vue";
import DonateForm from './DonateFormComponent.vue'

export default {
  name: "MainComponent",
  components: {
    HeroSection,
    MissionSection,
    ValuesSection,
    CausesSection,
    JournalSection,
    DonateSection,
    DonateForm
  },
  data(){
    return{
      showForm:false
    }
  },
  methods:{
    changeShowForm(){
      if(this.showForm===true){
        this.showForm=false
      } else {

        this.showForm=true
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>