<template>
  <div class="vuexTransfer">
    <h3 class="title">Vuex传值</h3>
    <div class="component-box">
      <Vuex1></Vuex1>
      <Vuex2></Vuex2>
    </div>
  </div>
</template>

<script>
import Vuex1 from './vuex1';
import Vuex2 from './vuex2';

export default {
  name: "vuexTransfer",
  components: {
    Vuex1,
    Vuex2
  }
}
</script>

<style lang="scss" scoped>
.vuexTransfer {
  border: 1px solid #DCDFE6;
  padding: 0 20px 20px;
  text-align: center;

  .title {
    line-height: 40px;
    color: #303133;
    font-size: 20px;
    font-weight: bold;
  }

  .component-box {
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
      flex: 1;
      margin: 20px;
    }
  }
}
</style>