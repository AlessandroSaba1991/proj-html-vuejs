<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="logo">
          <img width="250" src="@/assets/img/avada-charity-logo.png" alt="logo charity" />
        </div>
        <nav>
          <ul>
            <li class="text-uppercase" :class="item.text==='donate'? 'btn_me bg_gold' : ''" v-for="item in navList" :key="item.id"><a :href="item.id">{{item.text}}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data(){
    return {
      navList:[
        {
        id:1,
        text:'home'
      },
      {
        id:2,
        text:'mission'
      },
      {
        id:3,
        text:'causes'
      },
      {
        id:4,
        text:'journal'
      },
      {
        id:5,
        text:'donate'
      },
      ]
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/style";
body { 
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.5px; 
}
header{
  background-color: black;
  width: 100%;
  padding: 1.5rem 0;
  position: fixed;
}
.container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul{
  list-style: none;
  display: flex;
  align-items: center;
  column-gap: 2.5rem;
  margin-bottom: 0;
}
a{
  text-decoration: none;
  font-weight: 400;
  font-size: 12px;
  color: $text-light;
  &:hover{
    color: $primary-color;
  }
  
}
.btn_me{
  padding: 0.25rem 1.5rem;
}
.bg_gold{
  background-color: $primary-color;
}
.bg_pink{
  background-color: $secondary-color;
}
li:last-child a:hover{
    color: $text-light;
  }
</style>
