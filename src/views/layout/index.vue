<template>
  <el-container>
    <SideBar/>
    <el-container>
      <el-header>
        <div class="hamburger" @click="isCollapseMenu">
          <i class="el-icon-s-unfold" v-if="flag"></i>
          <i class="el-icon-s-fold" v-else></i>
        </div>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from './components/sideBar';
import {mapMutations} from 'vuex'

export default {
  name: "index",
  components: {
    SideBar
  },
  data() {
    return {
      flag: false
    }
  },
  methods: {
    ...mapMutations({
      updateCollapse: 'menu/UPDATE_ISCOLLAPSE'
    }),
    isCollapseMenu() {
      this.flag = !this.flag;
      this.updateCollapse(this.flag);
    }
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;

  .el-header {
    height: 50px;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    display: flex;
    align-items: center;

    .hamburger {
      display: inline-block;
      font-size: 25px;
      cursor: pointer;
      color: #404040;
    }
  }
}
</style>