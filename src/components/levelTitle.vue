<script>
export default {
  name: "levelTitle",
  props: {
    level: {
      type: Number
    }
  },
  render(createElement) {
    return createElement(
        `h${this.level}`,
        {},
        this.$slots.default
    )
  }
}
</script>

<style scoped>

</style>