<script>
export default {
  name: "levelTitle",
  props: {
    level: {
      type: Number,
    }
  },
  data() {
    return {
      str: '小明'
    }
  },
  render(createElement) {
    return createElement(
        `h${this.level}`,
        {
          style: {
            color: '#F56C6C',
            cursor: 'pointer',
            border: '1px solid #DCDFE6',
            padding: '20px'
          },
          on: {
            click: () => {
              this.$emit('handle', this.str)
            }
          }
        },
        [
          this.$slots.desc,
          this.$slots.default,
          this.$scopedSlots.info({name: this.str}),
          this.$scopedSlots.demo({name: this.level}),
        ]
    )
  }
}
</script>

<style scoped>

</style>