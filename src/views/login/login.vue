<template>
  <div class="logout">
    <div class="outer">
      <div class="title">Login Form</div>
      <el-form :model="loginForm" ref="loginForm" :rules="rules">
        <el-form-item prop="userName">
          <el-input v-model.trim="loginForm.userName"
                    placeholder="Username"
          >
            <i slot="prefix" class="el-icon-user-solid"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model.trim="loginForm.pwd"
                    placeholder="Password"
          >
            <i slot="prefix" class="el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     :loading="loading"
                     @click="login"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        userName: '',
        pwd: '',
      },
      rules: {
        userName: [],
        pwd: []
      },
      loading: false
    }
  },
  methods: {
    login() {
      this.loading = true;
      setTimeout(() => {
        this.$router.push('/');
      }, 500);
    }
  }
}
</script>

<style lang="scss" scoped>
.logout {
  width: 100%;
  height: 100%;
  background: url("../../assets/img/dog.jpg") center/cover;
  position: relative;

  .outer {
    width: 400px;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -65%);

    .title {
      font-size: 30px;
      line-height: 60px;
      text-align: center;
      color: #F2F6FC;
      font-weight: 600;
    }

    ::v-deep .el-input {
      .el-input__inner {
        background: rgb(255, 255, 255, 0.5);
        border: none;
      }

      .el-input__prefix {
        color: #303133;
        font-size: 20px;
      }
    }

    .el-button {
      width: 100%;
    }
  }
}
</style>