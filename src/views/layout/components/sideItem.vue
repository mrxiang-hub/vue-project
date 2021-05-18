<template>
  <div v-if="!item.meta.hide">
    <template v-if="hasOneChildren(item.children)">
      <router-link :to="item.path">
        <el-menu-item :index="item.path">
          <i class="el-icon-document"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </router-link>
    </template>
    <el-submenu v-else :index="item.path" popper-append-to-body>
      <template slot="title">
        <div>
          <i class="el-icon-document"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </div>
        <sideItem
            v-for="child in item.children"
            :key="child.path"
            :item="child"
        />
      </template>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "sideItem",
  props: {
    item: Object,
    basePath: String
  },
  methods: {
    /**
     * 只有一个子菜单
     * @param data
     * @returns {boolean}
     */
    hasOneChildren(data = []) {
      let tmp;
      if (data.length > 1) {
        tmp = false;
      } else {
        tmp = true;
      }
      return tmp;
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu-item {
  background-color: rgb(48, 65, 86);
  color: #bfcbd9;

  i {
    color: #bfcbd9;
  }
}

.router-link-active {
  .el-menu-item {
    color: #409eff;

    i {
      color: #409eff;
    }
  }
}
</style>