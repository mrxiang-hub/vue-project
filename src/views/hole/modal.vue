<template>
  <div class="modal">
    <div class="header">
      <slot>我是头部</slot>
    </div>
    <div class="content">
      <slot name="content" :data="info"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  data() {
    return {
      info: {
        name: '姓名',
        age: '年龄',
        work: '工作',
        address: '地址'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  width: 500px;
  border: 1px solid #DCDFE6;
  border-radius: 5px;
  overflow: hidden;

  .header {
    height: 40px;
    border-bottom: 1px solid #DCDFE6;
    line-height: 40px;
    font-size: 14px;
    padding: 0 10px;
  }

  .content {
    min-height: 300px;
    max-height: 500px;
    overflow-y: auto;
    padding: 10px;
  }

  .footer {
    text-align: center;
    height: 50px;
    border-top: 1px solid #DCDFE6;
    line-height: 50px;
  }
}
</style>