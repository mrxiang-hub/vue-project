<template>
  <div class="placeholder">
    <searchForm :formOptions="formOptions" :btnItems="btnGroup" @onSearch="onSearch"/>
  </div>
</template>

<script>
import searchForm from "@/components/searchForm";

export default {
  name: "search",
  components: {
    searchForm
  },
  data() {
    return {
      formOptions: [
        {
          label: '用户ID',
          prop: 'id',
          element: 'el-input',
          rules: [
            {
              required: true,
              message: '用户ID不能为空',
              trigger: 'blur'
            }
          ],
          placeholder: '请输入用户ID',
          clearable: true
        },
        {
          label: '账户类型',
          prop: 'type',
          element: 'el-select',
          options: [
            {label: '管理员', value: '1'},
            {label: '操作员', value: '2'}
          ]
        },
        {
          label: '状态',
          prop: 'status',
          element: 'el-select',
          options: [
            {label: '冻结', value: '1'},
            {label: '正常', value: '2'}
          ]
        },
        {
          label: '创建时间',
          prop: 'createdTime',
          element: 'el-date-picker',
          type: 'datetime'
        }
      ],
      btnGroup: ['search', 'export', 'reset']
    }
  },
  methods: {
    onSearch(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.placeholder {

}
</style>