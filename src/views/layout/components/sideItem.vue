<template>
  <div v-if="!item.meta.hide">
    <template v-if="hasOneShowingChild(item.children, item)">
      <router-link :to="resolvePath(oneChild)">
        <el-menu-item :index="resolvePath(oneChild)">
          <i class="el-icon-document"></i>
          <span slot="title">{{ oneChild.meta.title }}</span>
        </el-menu-item>
      </router-link>
    </template>
    <el-submenu v-else :index="item.path">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </template>
      <sideItem
          v-for="child in item.children"
          :key="child.path"
          :item="child"
          :base-path="resolvePath(child)"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from "path";

export default {
  name: "sideItem",
  props: {
    item: Object,
    basePath: String,
  },
  data() {
    return {
      oneChild: {}
    }
  },
  methods: {
    hasOneShowingChild(child = [], parent) {
      // 筛选出不隐藏的子菜单
      const showingChild = child.filter(x => {
        if (x.meta.hide) {
          return false;
        } else {
          this.oneChild = x;
          return true;
        }
      });
      if (showingChild.length === 1) {
        return true;
      }
      if (showingChild.length === 0) {
        this.oneChild = {...parent, path: '', noShowingChildren: true}
        return true;
      }
      return false;
    },
    /**
     * 将子菜单path解析成绝对路径
     * @param childPath
     * @returns {string}
     */
    resolvePath(child) {
      return path.resolve(this.basePath, child.path);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>