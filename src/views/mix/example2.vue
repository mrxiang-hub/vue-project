<template>
  <div class="example2">
    <el-button type="primary" @click="showModal">显示</el-button>
    <el-button type="danger" @click="closeModal">隐藏</el-button>
    <div class="box" v-if="isShow">

    </div>
  </div>
</template>

<script>
import myMixin from "@/views/mix/myMixin";

export default {
  name: "example2",
  mixins: [myMixin],
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  background: #F56C6C;
}
</style>