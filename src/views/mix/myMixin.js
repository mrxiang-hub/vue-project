const myMixin = {
    data() {
        return {
            isShow: false
        }
    },
    created() {
    },
    methods: {
        /**
         * 显示弹窗
         */
        showModal() {
            this.isShow = true;
        },
        /**
         * 关闭弹窗
         */
        closeModal() {
            this.isShow = false;
        },
        /**
         * 重置表单
         * @param formName
         */
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
    computed: {}
}
export default myMixin;