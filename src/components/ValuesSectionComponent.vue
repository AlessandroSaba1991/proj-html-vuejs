<template>
  <section class="values">
    <div class="container">
      <div class="title_me">
        <h2 class="text-uppercase mb-3">our values</h2>
        <div class="gold_line mb-4"></div>
        <p>Think Big. Act Bigger.</p>
      </div>
      <div class="row row-cols-4 gx-3">
        <CardValues
          :value="value"
          v-for="value in listValues"
          :key="value.id"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CardValues from "./CardValuesComponent.vue";

export default {
  name: "ValuesSectionComponent",
  components: {
    CardValues,
  },
  data() {
    return {
      listValues: [
        {
          id: 1,
          title: "Clean Water",
          icon: "fa-solid fa-droplet",
          text: "Nullam convallis, orci in congue aliquet, diam mauris cursus urna, Id maximus lectus magna maximus.",
        },
        {
          id: 2,
          title: "Vaccinations",
          icon: "fa-solid fa-stethoscope",
          text: "Nullam convallis, orci in congue aliquet, diam mauris cursus urna, Id maximus lectus magna maximus.",
        },
        {
          id: 3,
          title: "Education",
          icon: "fa-solid fa-graduation-cap",
          text: "Nullam convallis, orci in congue aliquet, diam mauris cursus urna, Id maximus lectus magna maximus.",
        },
        {
          id: 4,
          title: "Farming",
          icon: "fa-brands fa-pagelines",
          text: "Nullam convallis, orci in congue aliquet, diam mauris cursus urna, Id maximus lectus magna maximus.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.values {
  padding: 5rem 0;
  text-align: center;
  color: $text-light;
  background-image: url("@/assets/img/home-content-bg-2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .container {
    max-width: 1200px;
    .title_me {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 2.5rem;
      h2 {
        font-size: 26px;
        font-weight: 400;
      }
      p {
        letter-spacing: 0;
        margin-bottom: 4rem;
      }
    }
  }
}
@media screen and (min-width: 2000px) {
  .values {
    padding: 10rem 0;
    .container {
      max-width: 82%;
    }
  }
}
</style>