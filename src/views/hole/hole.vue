<template>
  <div class="hole">
    <h3 class="title">插槽以及插槽的作用</h3>
    <div class="desc" v-for="(item,index) in desc" :key="index">
      <p v-html="item"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "hole",
  data() {
    return {
      desc: [
        '1: 俗话说一个萝卜一个坑，插槽其实就是这个道理，在子组件中挖坑，然后父组件中填萝卜',
        '2:<span style="color: #F56C6C">具名插槽：</span>就是把坑和萝卜都标好名称，对号入座。',
        '3:<span style="color: #F56C6C">匿名插槽：</span>就是剩下的没有标名称的萝卜和坑',
        '4:<span style="color: #F56C6C">匿名插槽的默认内容：</span>如果坑里本来就有萝卜，那就把萝卜给拔出来，填上父组件的萝卜，如果父组件没有种萝卜，那坑里的萝卜不动',
        '5:插槽的应用其实和父子传值差不多，父子组件传值传的是属性值，但是要传递dom元素呢，父子传值就无能为力了，slot插槽可以解决这个问题，他就是用来把父组件的dom元素传递给子组件的'
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