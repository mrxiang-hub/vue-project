<template>
  <div class="grandson">
    <h3 class="title">孙组件</h3>
    <div class="strBox">{{ str }}</div>
    <div>{{ data.demo }}</div>
  </div>
</template>

<script>
export default {
  name: "grandson",
  inject: ['str', 'data']
}
</script>

<style lang="scss" scoped>
.grandson {
  border: 1px solid #DCDFE6;
  padding: 0 20px 20px;
  margin-top: 20px;

  .title {
    line-height: 40px;
    color: #303133;
    font-size: 20px;
    font-weight: bold;
  }

  .strBox {
    margin-bottom: 20px;
  }
}
</style>