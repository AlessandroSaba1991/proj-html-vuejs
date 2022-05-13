<template>
   <div class="col">
            <div class="card_values">
              <div class="icon mb-2">
                  <font-awesome-icon :icon="value.icon" size="3x" />                  
              </div>
              <h6 class="mb-3">{{value.title}}</h6>
              <p>{{value.text}}</p>
              <div class="button text-uppercase mt-4 ">
                <a href="#" class="btn_me btn_full_primary">Learn More</a>
              </div>
            </div>
          </div>
</template>

<script>
export default {
    name:'CardValuesComponent',
    props:{
        value:Object
    }
}
</script>

<style lang="scss" scoped>
.card_values{
      .icon{
          color: $primary-color;
      }
      h6{
          font-weight: 300;
      }
      p{
          font-size: 11px;
          line-height: 23px;
          letter-spacing: 0;
          font-weight: 100;
      }
  }
</style>