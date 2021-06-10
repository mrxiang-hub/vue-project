<template>
  <div class="placeholder">
    <searchForm :formOptions="formOptions" @onSearch="onSearch"/>
  </div>
</template>

<script>
import searchForm from "@/components/searchForm";

export default {
  name: "placeholder",
  components: {
    searchForm
  },
  data() {
    return {
      formOptions: [
        {
          label: '意见内容',
          prop: 'content',
          element: 'el-input'
        },
        {
          label: '类型',
          prop: 'type',
          element: 'el-select',
          options: [
            {label: '给点意见', value: '1'},
            {label: '售后问题', value: '2'}
          ]
        },
        {
          label: '状态',
          prop: 'status',
          element: 'el-select',
          options: []
        },
        {
          label: '提交时间',
          prop: 'timeRange',
          element: 'el-date-picker'
        }
      ]
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