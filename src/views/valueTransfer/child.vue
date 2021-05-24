<template>
  <div class="child">
    <div class="val">
      {{ txt }}
    </div>
    <el-button type="primary"
               @click="emitVal"
    >子传父
    </el-button>
  </div>
</template>

<script>
export default {
  name: "child",
  props: {
    txt: String
  },
  methods: {
    /**
     * 子组件向父组件传值
     */
    emitVal() {
      this.$emit('changeVal', '我是子组件传过来的值')
    }
  }
}
</script>

<style lang="scss" scoped>
.child {
  .val {
    padding: 20px 0;
  }
}
</style>