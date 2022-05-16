<template>
  <div class="footer_bottom">
    <div class="copyright">
      <p>
        &copy; Copyright 2012 - <span> </span>2020 AVADA THEME BY THEME FUSION
        &nbsp;&nbsp;|&nbsp;&nbsp; ALL RIGHT RESERVED &nbsp;&nbsp;|&nbsp;&nbsp;
        POWERED BY WORDPRESS
      </p>
    </div>
    <div class="social_icons">
      <Social :social="social" v-for="social in socialList" :key="social.id" />
    </div>
    <div class="page_up">
      <a href="#">
        <font-awesome-icon icon="fa-solid fa-chevron-up" />
      </a>
    </div>
  </div>
</template>

<script>
import Social from "./SocialFooterComponent.vue";

export default {
  name: "BottomFooterComponent",
  components: {
    Social,
  },
  data() {
    return {
      socialList: [
        {
          id: 1,
          name: "fa-facebook-f",
        },
        {
          id: 2,
          name: "fa-instagram",
        },
        {
          id: 3,
          name: "fa-twitter",
        },
        {
          id: 4,
          name: "fa-youtube",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer_bottom {
  position: relative;
  background-color: $bg-light;
  padding: 1rem 0;
  .copyright {
    color: $text-footer;
    font-size: 8px;
    letter-spacing: 0.3px;
  }
  .social_icons {
    display: flex;
    justify-content: center;
    column-gap: 0.5rem;
    margin-bottom: 0.25rem;
  }
  .page_up {
    width: 35px;
    position: absolute;
    bottom: 0;
    right: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    background-color: #464646;
    a {
      font-size: 12px;
      padding-top: 0.25rem;
      color: $text-light;
    }
  }
}
@media screen and (min-width: 2000px) {
  .footer_bottom {
    padding: 1.5rem 0;
    .copyright {
      font-size: 13px;
      letter-spacing: 0.3px;
    }
    .social_icons {
      column-gap: 1rem;
      margin-top: 2rem;
      margin-bottom: 0.5rem;
    }
    .page_up {
      width: 65px;
      a {
        font-size: 20px;
        padding-top: 0.5rem;
      }
    }
  }
}
</style>