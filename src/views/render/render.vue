<template>
  <div>
    <LevelTitle :level="1">
      <template #desc>
        <div>
          hello Vue
        </div>
      </template>
      <template #default>
        <div>
          hello render
        </div>
      </template>
      <template #info="{name}">
        <div>
          {{ name }}
        </div>
      </template>
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