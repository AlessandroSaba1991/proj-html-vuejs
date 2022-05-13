<template>
  <nav>
        <ul>
          <ItemNav :item="item" v-for="item in navList" :key="item.id" />
        </ul>
      </nav>
</template>

<script>
import ItemNav from './ItemNavComponent.vue'

export default {
    name:'NavComponent',
    components:{
        ItemNav
    },
    data() {
    return {
      navList: [
        {
          id: 1,
          text: "home",
        },
        {
          id: 2,
          text: "mission",
        },
        {
          id: 3,
          text: "causes",
        },
        {
          id: 4,
          text: "journal",
        },
        {
          id: 5,
          text: "donate",
        },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  align-items: center;
  column-gap: 2.5rem;
  margin-bottom: 0;
}
</style>