<template>
  <li
    class="text-uppercase"
    :class="item.text === 'donate' ? 'btn_me bg_gold' : ''">
    <a :href="item.id">{{ item.text }}</a>
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
  color: $text-light;
}
a {
  font-weight: 400;
  font-size: 12px;
  color: $text-light;
  &:hover {
    color: $primary-color;
  }
}
</style>
