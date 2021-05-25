<template>
  <div class="brother1">
    <h3 class="title">组件1</h3>
    <el-button
        type="primary"
        @click="sendVal"
    >传值
    </el-button>
  </div>
</template>

<script>
import Bus from './bus';

export default {
  name: "brother1",
  methods: {
    sendVal() {
      Bus.$emit('sendVal', 'Hello Vue!!!')
    }
  }
}
</script>

<style lang="scss" scoped>
.brother1 {
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