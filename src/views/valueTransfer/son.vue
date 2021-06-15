<template>
  <div class="son">
    <h3 class="title" @click='pre'>子组件</h3>
    <div class="strBox">{{ str }}</div>
    <div>{{ data.demo }}</div>
    <Grandson></Grandson>
  </div>
</template>

<script>
import Grandson from './grandson';

export default {
  name: "son",
  inject: ['str', 'data',"meth"],
  components: {
    Grandson
  },
  methods:{
    pre(){
      this.meth()
    }
  }
}
</script>

<style lang="scss" scoped>
.son {
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