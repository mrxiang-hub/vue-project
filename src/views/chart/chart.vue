<template>
  <div class="chart">
    <div class="map" ref="map"></div>
  </div>
</template>

<script>
export default {
  name: "chart",
  data() {
    return {}
  },
  created() {
    this.$nextTick(() => {
      this.initChart();
    })
  },
  methods: {
    initChart() {
      let chart = this.$echarts.init(this.$refs['map']);
      let option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }]
      };
      chart.setOption(option);
    }
  }
}
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 100%;

  .map {
    width: 100%;
    height: 100%;
  }
}
</style>