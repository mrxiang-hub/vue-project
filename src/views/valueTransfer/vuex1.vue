<template>
  <div class="vuex1">
    <h3 class="title">组件1</h3>
    <div class="val-box">
      {{ val }}
    </div>
    <el-button type="primary"
               @click="changeVal"
    >修改
    </el-button>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: "vuex1",
  computed: {
    ...mapGetters(['val']),
  },
  methods: {
    ...mapMutations({
      updateVal: 'transfer/UPDATE_VAL'
    }),
    changeVal() {
      this.updateVal('1234567');
    }
  }
}
</script>

<style lang="scss" scoped>
.vuex1 {
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