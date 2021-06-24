<template>
  <div class="search-form-box">
    <el-form
        :model="formData"
        ref="formRef"
        :inline="true"
    >
      <el-form-item
          v-for="(item, index) in formOptions"
          :key="index"
          :prop="item.prop"
          :label="item.label ? (item.label + '：') : ''"
          :rules="item.rules"
      >
        <formItem
            v-model="formData[item.prop]"
            :itemOptions="item"
        />
      </el-form-item>
      <!--      操作按钮-->
      <el-form-item>
        <el-button
            v-if="btnItems.includes('search')"
            size="mini"
            type="primary"
            class="btn-search"
            @click="onSearch"
        >搜索
        </el-button>
        <el-button
            v-if="btnItems.includes('export')"
            size="mini"
            type="primary"
            class="btn-export"
            @click="onExport"
        >导出
        </el-button>
        <el-button
            v-if="btnItems.includes('reset')"
            size="mini"
            type="default"
            class="btn-reset"
            @click="onReset"
        >重置
        </el-button>
        <div class="btn-box">
          <slot name="btns"></slot>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import formItem from './formItem'

export default {
  name: 'searchForm',
  props: {
    /**
     * 表单配置
     * 示例：
     * [{
     *   label: '用户名', // label文字
     *   prop: 'username', // 字段名
     *   element: 'el-input', // 指定elementui组件
     *   initValue: '阿黄', // 字段初始值
     *   placeholder: '请输入用户名', // elementui组件属性
     *   rules: [{ required: true, message: '必填项', trigger: 'blur' }], // elementui组件属性
     *   events: { // elementui组件方法
     *     input (val) {
     *       console.log(val)
     *     },
     *     ...... // 可添加任意elementui组件支持的方法
     *   }
     *   ...... // 可添加任意elementui组件支持的属性
     * }]
     */
    formOptions: {
      type: Array,
      required: true,
      default() {
        return []
      }
    },
    // 提交按钮项，多个用逗号分隔（search, export, reset）
    btnItems: {
      type: Array,
      default() {
        return ['search']
      }
    }
  },

  data() {
    return {
      formData: {}
    }
  },
  created() {
    this.addInitValue()
  },

  methods: {
    // 校验
    onValidate(callback) {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          callback();
        } else {
          return false;
        }
      })
    },
    // 搜索
    onSearch() {
      this.onValidate(() => {
        this.$emit('onSearch', this.formData)
      })
    },
    // 导出
    onExport() {
      this.onValidate(() => {
        this.$emit('onExport', this.formData)
      })
    },
    onReset() {
      this.$refs.formRef.resetFields()
    },
    // 添加初始值
    addInitValue() {
      const obj = {}
      this.formOptions.forEach(curr => {
        if (curr.initValue !== undefined) {
          obj[curr.prop] = curr.initValue
        }
      })
      this.formData = obj
    }
  },
  components: {formItem}
}
</script>

<style lang='scss' scoped>
.search-form-box {
  display: flex;
  margin-bottom: 15px;
}

.btn-box {
  display: inline-block;
  margin-left: 10px;
}
</style>

