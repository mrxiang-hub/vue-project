<template>
  <div class="brother2">
    <h3 class="title">组件2</h3>
    {{ txt }}
  </div>
</template>

<script>
import Bus from './bus';

export default {
  name: "brother2",
  data() {
    return {
      txt: 'Hello World!!!'
    }
  },
  created() {
    Bus.$on('sendVal', str => {
      this.txt = str;
    })
  }
}
</script>

<style lang="scss" scoped>
.brother2 {
  height: 100px;
  margin-top: 20px;
  border: 1px solid #DCDFE6;
  text-align: center;

  .title {
    line-height: 40px;
    color: #303133;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>