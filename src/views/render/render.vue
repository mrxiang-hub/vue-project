<template>
  <div>
    <LevelTitle :level="1" @handle="handle">
      <template #desc>
        <div class="hole">
          hello Vue
        </div>
      </template>
      <template #default>
        <div class="hole">
          hello render
        </div>
      </template>
      <template #info="{name}">
        <div class="hole">
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
  },
  methods: {
    handle(data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.hole {
  line-height: 40px;
}

</style>