<template>
  <section id="4" class="journal">
    <div class="container">
      <div class="title_me">
        <h2 class="text-uppercase mb-3">latest articles</h2>
        <div class="gold_line mb-4"></div>
        <p>Together we make all the difference</p>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="card_article">
            <img
              :src="img_active.img"
              :alt="img_active.title"
            />
            <div class="text_article">
              <h6>{{img_active.title}}</h6>
              <p>
                {{img_active.text}}
              </p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="row h-100 align-content-between">
            <ImgJournal
              :slider="slider" :index="index"
              v-for="(slider,index) in sliderList"
              :key="slider.id" @changeImage="changeImage(slider,index)"
            />
          </div>
        </div>
      </div>
      <div class="button">
        <a
          class="btn_me btn_full_secondary text-uppercase d-inline-block w-100"
          href="#4"
          >view all our articles</a
        >
      </div>
    </div>
  </section>
</template>

<script>
import ImgJournal from "./ImgJournalComponent.vue";

export default {
  name: "JournalSectionComponent",
  components: {
    ImgJournal,
  },
  data() {
    return {
      img_active: {
        id:0,
        img: require("@/assets/img/photo-1444213007800-cff19e1677ac.jpg"),
        title: "Understanding community complexities",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Prasent ac nibh vestibulum, laoreet ipsum.",
      },
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
  methods:{
    changeImage(object,index){
      this.sliderList.splice(index,1)
      this.sliderList.push(this.img_active)
      this.img_active = object
    }
  }
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
      border: 1px solid #ebeaea;
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
      a{
        transition: all 500ms;
      }
      a:hover{
        color: $primary-color;
      }
    }
  }
  img{
    width: 100%;
    aspect-ratio: 2 / 1.5;
  }
}
@media screen and (min-width: 2000px){
  .journal {
  padding-top: 10rem;
  padding-bottom: 8rem;
  .container {
    max-width: 58%;
    .title_me{
      margin-bottom: 3rem;
    }
    .card_article {
      border: 1px solid #ebeaea;
      .text_article {
        padding: 1.75rem;
        h6 {
          font-size: 25px;
          margin-top: 1.25rem;
        }
        p {
          font-size: 18px;          
          line-height: 38px;          
        }
      }
    }
    .button {
      margin-top: 8rem;     
    }
  }  
}
}
</style>