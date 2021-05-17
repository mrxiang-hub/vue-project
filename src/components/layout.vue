<template>
  <el-container>
    <el-aside>
      <NavBar></NavBar>
    </el-aside>
    <el-container>
      <el-header>
        <div class="log-out">
          <i class="el-icon-switch-button"></i>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavBar from '@/components/navBar'

export default {
  name: "layout",
  components: {
    NavBar
  },
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;

  .el-aside {
    width: 200px;
    height: 100%;
  }

  .el-container {
    .el-header {
      height: 90px;
      box-shadow: 2px 4px 6px #d9dce4;
      position: relative;

      .log-out {
        font-size: 25px;
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        cursor: pointer;

        &:hover {
          color: #F56C6C;
        }
      }
    }

    .el-main {
    }
  }
}
</style>