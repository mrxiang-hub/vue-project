<template>
  <div class="child1">
    <h3 class="title">子组件</h3>
    <el-button type="primary" @click="emitVal">传值</el-button>
  </div>
</template>

<script>
export default {
  name: "child1",
  methods: {
    emitVal() {
      this.$emit('handle', 'Hello Vue!!!')
    }
  }
}
</script>

<style lang="scss" scoped>
.child1 {
  height: 100px;
  margin-top: 20px;
  border: 1px solid #DCDFE6;

  .title {
    line-height: 40px;
    color: #303133;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>