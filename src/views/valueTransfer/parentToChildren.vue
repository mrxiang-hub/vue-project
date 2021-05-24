<template>
  <div class="parentToChildren">
    <el-button
        @click="editVal"
        type="primary"
    >父传子
    </el-button>
    <Child
        :txt="readyTxt"
    ></Child>
  </div>
</template>

<script>
import Child from './child';

export default {
  name: "parentToChildren",
  components: {
    Child
  },
  data() {
    return {
      readyTxt: '我是父组件中的值'
    }
  },
  methods: {
    editVal() {
      this.readyTxt = 'change'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>