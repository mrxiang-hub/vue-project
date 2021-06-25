<template>
  <div class="example1">
    <el-button type="primary" @click="showModal">显示弹窗</el-button>
    <el-dialog
        title="demo"
        :visible.sync="isShow"
        width="40%"
        @close="closeModal"
    >
      <el-scrollbar class="main" :native="false">
        <el-form :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 label-width="100px"
                 label-position="left"
        >
          <el-form-item prop="name" label="姓名">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item prop="age" label="年龄">
            <el-input v-model="ruleForm.age"></el-input>
          </el-form-item>
        </el-form>
      </el-scrollbar>
      <template #footer>
        <div>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button type="primary">确认</el-button>
          <el-button type="danger" @click="closeModal">取消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import myMixin from "@/views/mix/myMixin";

export default {
  name: "example1",
  mixins: [myMixin],
  data() {
    return {
      ruleForm: {},
      rules: {
        name: [
          {required: true, message: '姓名不能五日空', trigger: 'change'},
        ],
        age: [
          {required: true, message: '年龄不能为空', trigger: 'change'},
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  height: 400px;

  .item {
    width: 100px;
    height: 100px;
    background: #F56C6C;
    margin: 10px;
  }
}
</style>