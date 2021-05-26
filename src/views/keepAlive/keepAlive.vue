<template>
  <div>
    路由缓存
    <el-input v-model="demo"></el-input>
  </div>
</template>

<script>
export default {
  name: "keepAlive",
  data() {
    return {
      demo: ''
    }
  },
  activated() {
    console.log(1111)
  },
  created() {
    console.log(2222)
  }
}
</script>

<style scoped>

</style>