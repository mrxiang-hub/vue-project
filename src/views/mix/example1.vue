<template>
  <div>
    混入1
  </div>
</template>

<script>
import myMixin from "@/views/mix/myMixin";

export default {
  name: "example1",
  mixins: [myMixin],
}
</script>

<style lang="scss" scoped>

</style>