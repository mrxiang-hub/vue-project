<template>
  <el-scrollbar>
    <el-menu class="el-menu-vertical-demo"
             background-color="#304156"
             text-color="#bfcbd9"
             :collapse="isCollapse"
    >
      <sideItem
          v-for="(route,index) in routeData"
          :key="index"
          :item="route"
          :basePath="route.path"
      ></sideItem>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import {routes} from '@/router/index';
import sideItem from "@/views/layout/components/sideItem";

export default {
  name: "sideBar",
  components: {
    sideItem
  },
  data() {
    return {
      isCollapse: false,
      routeData: routes
    }
  },
}
</script>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
  background: #304156;

  ::v-deep .el-scrollbar__wrap {
    overflow-x: hidden;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    background: transparent;
    width: 200px;
    min-height: 400px;
  }
}
</style>