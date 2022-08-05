<template>
  <section id="6" class="form_me">
    <div class="title_me">
      <h2 class="text-uppercase mb-3">Become A volunteer</h2>
      <div class="gold_line mb-4"></div>
      <p>Make a Difference</p>
    </div>
    <div class="icon_mark">
      <font-awesome-icon
        icon="fa-solid fa-xmark"
        @click="$emit('closeShowForm')"
      />
    </div>
    <form action="#" method="post" class="position-relative" @submit.prevent="message=true">
      <label for="name">Name*</label>
      <input v-model="name_user" type="text" name="name" id="name" min="3" required />
      <label for="surname">Surname*</label>
      <input type="text" name="surname" id="surname" min="3" required />
      <label for="email">Email Address*</label>
      <input type="email" name="email" id="email" required />
      <button
        class="btn_me btn_empty_primary"
        @click="$emit('changeShowForm')"
        type="submit">
        Send
      </button>
      <div
        class="
          pop_up_ok
          bg-success
          text-white
          px-3
          py-2
          rounded-2
          position-absolute
          top-0
          start-50
          translate-middle
        "
        v-if="message"
      >
        <span class="h3">Send Successfully 😉<br> Thank You {{name_user}}</span>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "DonateFormComponent",
  data(){
    return{
      message:false,
      name_user:""
    }
  }
};
</script>

<style lang="scss" scoped>
.form_me {
  position: relative;
  padding: 10rem 0;
  text-align: center;
  color: $text-dark;
  height: 920px;
  transition: all 1s;
  animation: slider 1s linear;
  overflow: hidden;
  &.slider_close {
    animation: sliderOut 1s;
  }
  .title_me {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 26px;
      font-weight: 400;
    }
    p {
      letter-spacing: 0;
      margin-bottom: 2.5rem;
    }
  }
  .icon_mark {
    font-size: 25px;
    color: red;
    position: absolute;
    top: 1%;
    right: 1%;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;

    button {
      background-color: transparent;
      margin-top: 2rem;
    }
  }
}
</style>