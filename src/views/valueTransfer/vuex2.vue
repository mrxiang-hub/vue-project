<template>
  <div class="vuex2">
    <h3 class="title">组件2</h3>
    <div class="val-box">
      {{ val }}
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "vuex2",
  computed: {
    ...mapGetters(['val'])
  }
}
</script>

<style lang="scss" scoped>
.vuex2 {
  width: 400px;
  height: 400px;
  border: 1px solid #DCDFE6;

  .title {
    line-height: 40px;
    color: #303133;
    font-size: 20px;
    font-weight: bold;
  }

  .val-box {
    margin: 10px;
  }
}
</style>