<template>
  <li
    class="text-uppercase"
    :class="item.text === 'donate' ? 'btn_me btn_full_primary' : ''">
    <a :href="'#'+item.id">{{ item.text }}</a>
  </li>
</template>

<script>
export default {
    name:'ItemNavComponent',
    props:{
        item:Object
    }
};
</script>

<style lang="scss" scoped>
li:last-child a:hover {
  color: $primary-color;
}
a {
  font-weight: 400;
  font-size: 12px;
  color: $text-light;
  transition: all 500ms;
  &:hover {
    color: $primary-color;
  }
}
@media screen and (min-width: 2000px){
  a{
    font-size: 22px;
  }
}
</style>
