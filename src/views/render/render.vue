<template>
  <div>
    <LevelTitle :level="1">
      hello render
    </LevelTitle>
  </div>
</template>

<script>
import LevelTitle from '@/components/levelTitle'

export default {
  name: "render",
  components: {
    LevelTitle
  }
}
</script>

<style scoped>

</style>