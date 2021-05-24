<template>
  <div class="childrenToParent">
    <h3 class="title">父组件</h3>
    <div>{{ txt }}</div>
    <Child1
        @handle="handleChange"
    ></Child1>
  </div>
</template>

<script>
import Child1 from './child1';

export default {
  name: "childrenToParent",
  components: {
    Child1
  },
  data() {
    return {
      txt: 'hello world！！！',
    }
  },
  methods: {
    handleChange(str) {
      this.txt = str;
    }
  }
}
</script>

<style lang="scss" scoped>
.childrenToParent {
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