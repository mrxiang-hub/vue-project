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
        ]
    )
  }
}
</script>

<style scoped>

</style>