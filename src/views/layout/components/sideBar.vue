<template>
  <el-scrollbar>
    <el-menu class="el-menu-vertical-demo"
             background-color="#304156"
             text-color="#bfcbd9"
             :collapse="isCollapse"
             :default-active="activeIndex"
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
import {mapGetters} from 'vuex';

export default {
  name: "sideBar",
  components: {
    sideItem
  },
  data() {
    return {
      routeData: routes,
      activeIndex: this.$route.path
    }
  },
  computed: {
    ...mapGetters(['isCollapse'])
  },
}
</script>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
  background: #304156;

  .el-menu {
    border: none;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
    min-height: 400px;
    overflow-x: hidden;
  }

  /*隐藏文字*/
  ::v-deep .el-menu--collapse .el-submenu__title span {
    display: none;
  }

  /*隐藏 > */
  ::v-deep .el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
    display: none;
  }
}
</style>