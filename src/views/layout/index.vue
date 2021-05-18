<template>
  <el-container>
    <SideBar/>
    <el-container>
      <el-header></el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from './components/sideBar';

export default {
  name: "index",
  components: {
    SideBar
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
</style>