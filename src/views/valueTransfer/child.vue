<template>
  <div class="child">
    <h3 class="title">
      子组件
    </h3>
    <div class="val">
      {{ txt }}
    </div>
  </div>
</template>

<script>
export default {
  name: "child",
  props: {
    txt: String
  }
}
</script>

<style lang="scss" scoped>
.child {
  height: 100px;
  margin-top: 20px;
  border: 1px solid #DCDFE6;

  .title {
    line-height: 40px;
    color: #303133;
    font-size: 20px;
    font-weight: bold;
  }

  .val {
    padding: 20px 0;
  }
}
</style>