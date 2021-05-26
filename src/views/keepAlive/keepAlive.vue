<template>
  <div class="alive">
    <el-card>
      <div slot="header" class="clearfix">
        <span>keepAlive</span>
      </div>
      <div class="item"
           v-for="(item, index) in desc"
           :key="index"
      >
        <h3 class="title">{{ item.title }}</h3>
        <div class="desc"
             v-for="(n, key) in item.desc"
             :key="key"
        >{{ n }}
        </div>
      </div>
      <el-alert
          title="注意这里所有的name都是组件的name属性，不是路由的name属性"
          type="warning"
          show-icon
          :closable="false"
      >
      </el-alert>
    </el-card>

  </div>
</template>

<script>
export default {
  name: "keepAlive",
  data() {
    return {
      desc: [
        {
          title: '什么是keepAlive',
          desc: ['keepAlive标签可以对组件进行缓存操作,只对组件进行一次初始化']
        },
        {
          title: '应用场景',
          desc: ['开发过程中总有部分组件我们希望保持持久化，下次展示时候，不需要重新init,从而达到节省性能的目的，这时候我们就需要用到keepAlive来对组件进行缓存']
        },
        {
          title: '属性',
          desc: [
            'include : 需要缓存的组件name, 数组形式[A, B]',
            'exclude : 排除在外的组件name 数组形式[A, B]',
            'max: 缓存组件的最大值, number类型'
          ],
        }
      ]
    }
  },
  activated() {

  },
  created() {

  }
}
</script>

<style lang="scss" scoped>
.alive {
  .item {
    margin-bottom: 20px;

    .title {
      font-size: 14px;
      font-weight: bold;
      line-height: 30px;
    }

    .desc {
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>