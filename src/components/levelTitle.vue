<script>
export default {
  name: "levelTitle",
  props: {
    level: {
      type: Number
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
        {},
        [
          this.$slots.desc,
          this.$slots.default,
          this.$scopedSlots.info({name: '作用域插槽'}),
        ]
    )
  }
}
</script>

<style scoped>

</style>