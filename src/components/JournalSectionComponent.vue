<template>
  <section class="journal">
    <div class="container">
      <div class="title_me">
        <h2 class="text-uppercase mb-3">latest articles</h2>
        <div class="gold_line mb-4"></div>
        <p>Together we make all the difference</p>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="card_article">
            <picture>
              <source
                srcset="@/assets/img/photo-1444213007800-cff19e1677ac.jpg"
                media="(min-width: 1400px)"
              />
              <source
                srcset="
                  @/assets/img/photo-1444213007800-cff19e1677ac-600x450.jpg
                "
                media="(min-width: 992px)"
              />
              <source
                srcset="
                  @/assets/img/photo-1444213007800-cff19e1677ac-400x300.jpg
                "
                media="(min-width: 768px)"
              />
              <img
                src="@/assets/img/photo-1444213007800-cff19e1677ac-200x150.jpg"
                alt="man with tiger"
              />
            </picture>
            <div class="text_article">
              <h6>Understanding community complexities</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Prasent ac nibh vestibulum, laoreet ipsum.
              </p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="row h-100 align-content-between">
            <ImgJournal
              :slider="slider"
              v-for="slider in sliderList"
              :key="slider.id"
            />
          </div>
        </div>
      </div>
      <div class="button">
        <a
          class="btn_me btn_full_secondary text-uppercase d-inline-block w-100"
          href="#"
          >view all our articles</a
        >
      </div>
    </div>
  </section>
</template>

<script>
import ImgJournal from './ImgJournalComponent.vue'

export default {
  name: "JournalSectionComponent",
  components:{
      ImgJournal
  },
  data() {
    return {
      sliderList: [
        {
          id: 1,
          img: require("@/assets/img/photo-1444664597500-035db93e2323-177x142.jpg"),
          title: "The human story of uniqueness",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Prasent ac nibh vestibulum, laoreet ipsum.",
        },
        {
          id: 2,
          img: require("@/assets/img/photo-1447430617419-95715602278e-177x142.jpg"),
          title: "Sustainable trade tactics",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Prasent ac nibh vestibulum, laoreet ipsum.",
        },
        {
          id: 3,
          img: require("@/assets/img/photo-1460230525622-630fe3294cd7-177x142.jpg"),
          title: "Farmer making a difference",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Prasent ac nibh vestibulum, laoreet ipsum.",
        },
        {
          id: 4,
          img: require("@/assets/img/photo-1460600421604-5e138c208b9c-177x142.jpg"),
          title: "Meeting remote tribes in Peru",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Prasent ac nibh vestibulum, laoreet ipsum.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.journal {
  padding-top: 5rem;
  padding-bottom: 4rem;
  background-color: $bg_light;
  .container {
    max-width: 850px;
    .title_me {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        color: $text-dark;
        font-size: 26px;
      }
      p {
        color: $text-light-dark;
        font-family: "Raleway", sans-serif;
        letter-spacing: 0;
        margin-bottom: 4rem;
      }
    }
    .card_article {
      border: 1px solid #EBEAEA;
      .text_article {
        padding: 1rem;
        h6 {
          font-size: 15px;
          letter-spacing: 0.3px;
          color: $primary-color;
          margin-top: 0.5rem;
        }
        p {
          font-size: 11px;
          letter-spacing: 0;
          line-height: 25px;
          color: $text-light-dark;
          margin-bottom: 0;
        }
      }
    }
    .button {
      margin-top: 4rem;
      text-align: center;
    }
  }
}
</style>