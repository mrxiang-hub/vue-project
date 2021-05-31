<template>
  <el-container>
    <SideBar/>
    <el-container>
      <el-header>
        <div class="hamburger" @click="isCollapseMenu">
          <i class="el-icon-s-unfold" v-if="flag"></i>
          <i class="el-icon-s-fold" v-else></i>
        </div>
        <div class="logout" @click="logout">
          <i class="el-icon-switch-button"></i>
        </div>
      </el-header>
      <el-main>
        <transition name="fade-transform" mode="out-in">
          <keep-alive :include="alives">
            <router-view :key="$route.fullPath"/>
          </keep-alive>
        </transition>
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
      flag: false,
      alives: [
        'keepAlive'
      ],
    }
  },
  methods: {
    ...mapMutations({
      updateCollapse: 'menu/UPDATE_ISCOLLAPSE'
    }),
    isCollapseMenu() {
      this.flag = !this.flag;
      this.updateCollapse(this.flag);
    },
    logout() {
      this.$router.replace('/login');
    },
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
    justify-content: space-between;

    .hamburger {
      display: inline-block;
      font-size: 25px;
      cursor: pointer;
      color: #404040;
    }

    .logout {
      font-size: 25px;
      cursor: pointer;

      &:hover {
        color: #F56C6C;
      }

      &:active {
        transform: translateY(2px);
      }
    }
  }

  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all .5s;
  }

  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
}

</style>