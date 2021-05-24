<template>
  <div class="child">
    <div class="val">
      {{ txt }}
    </div>
  </div>
</template>

<script>
export default {
  name: "child",
  props: {
    txt: String
  }
}
</script>

<style lang="scss" scoped>
.child {
  .val {
    padding: 20px 0;
  }
}
</style>