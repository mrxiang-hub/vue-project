<template>
  <div class="brother1">
    <h3 class="title">组件1</h3>
  </div>
</template>

<script>
export default {
  name: "brother1"
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