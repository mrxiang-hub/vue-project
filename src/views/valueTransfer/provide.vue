<template>
  <div class="ancestors">
    <h3 class="title">祖先组件</h3>
    <el-button type="primary"
               @click="changeVal"
    >传值
    </el-button>
    <Son></Son>
    <div class="desc">
      <div class="item"
           v-for="(item, index) in desc"
           :key="index"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import Son from './son';

export default {
  name: "provide",
  components: {
    Son
  },
  provide() {
    return {
      str: this.str,
      data: this.$data,
      meth:this.changeVal
    }
  },
  data() {
    return {
      str: 'Hello World!!!',
      demo: '我是父组件中的值',
      desc: [
        '1: provide/inject 成对出现，用于祖先组件向他下面的后代组件传值;',
        '2: 他的优势在于无论组件嵌套多深，都可以非常简单的获取到祖先组件的值,不需要使用props去层层传递;',
        '3: 弊端是provide/inject不是响应式的, 祖先组件中的值变化，后代组件拿到的仍然是他的初始值;',
        '4: 也可以通过 provide 注入一个 响应式的值，去解决 3 所述的问题，比如把 Vue实例传进去，或者Vue实例里面的属性传进去，就可以得到响应式的值了;'
      ]
    }
  },
  methods: {
    changeVal() {
      this.str = '1234567';
      this.demo = '变变变！！！';
    }
  }
}
</script>

<style lang="scss" scoped>
.ancestors {
  border: 1px solid #DCDFE6;
  padding: 0 20px 20px;
  text-align: center;

  .title {
    line-height: 40px;
    color: #303133;
    font-size: 20px;
    font-weight: bold;
  }

  .desc {
    background: #F2F6FC;
    padding: 20px;
    margin: 40px;
    text-align: left;

    .item {
      line-height: 30px;
    }
  }
}
</style>