<template>
  <section id="6" class="form_me" @submit.prevent>
    <div class="title_me">
      <h2 class="text-uppercase mb-3">Become A volunteer</h2>
      <div class="gold_line mb-4"></div>
      <p>Make a Difference</p>
    </div>
    <form action="#" method="post">
      <div class="icon_mark">
        <font-awesome-icon
          icon="fa-solid fa-xmark"
          @click="$emit('changeShowForm')"
        />
      </div>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" />
      <label for="surname">Surname</label>
      <input type="text" name="surname" id="surname" />
      <label for="email">Email Address</label>
      <input type="text" name="email" id="email" />
      <button class="btn_me btn_empty_primary" type="submit" @click="$emit('changeShowForm')">Send</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "DonateFormComponent",
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
  form {
      
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
    .icon_mark {
        font-size: 25px;
        color: red;
      position: absolute;
      top: 1%;
      right: 1%;
    }
    button {
      background-color: transparent;
      margin-top: 2rem;
    }
  }
}
</style>