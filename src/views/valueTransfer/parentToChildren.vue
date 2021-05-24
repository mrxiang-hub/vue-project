<template>
  <div class="parentToChildren">
    <h3 class="title">父组件</h3>
    <el-button
        @click="editVal"
        type="primary"
    >传值
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
      readyTxt: "Hello World！！！"
    }
  },
  methods: {
    editVal() {
      this.readyTxt = 'Hello Vue！！！'
    }
  }
}
</script>

<style lang="scss" scoped>
.parentToChildren {
  border: 1px solid #DCDFE6;
  padding: 0 40px 40px;
  text-align: center;

  .title {
    line-height: 40px;
    color: #303133;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>