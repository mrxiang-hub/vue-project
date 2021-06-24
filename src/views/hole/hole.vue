<template>
  <div class="hole">
    <h3 class="title">插槽以及插槽的作用</h3>
    <div class="desc" v-for="(item,index) in desc" :key="index">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "hole",
  data() {
    return {
      desc: [
        '1: 俗话说一个萝卜一个坑，插槽其实就是这个道理，在子组件中挖坑，然后父组件中种萝卜，把坑填上',
        '2: 匿名插槽,就相当于是在子组件中挖了一个坑，但是没有规定',
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.hole {
  .title {
    font-size: 14px;
    font-weight: 600;
  }

  .desc {
    font-size: 12px;
    line-height: 30px;
  }
}
</style>