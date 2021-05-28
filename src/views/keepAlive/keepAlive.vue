<template>
  <div class="alive">
    <!--    // 什么是keepAlive-->
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
    <!--    如何实现keepAlive-->
    <el-card>
      <div slot="header" class="clearfix">
        <span>实现路由缓存的几种方法</span>
      </div>
    </el-card>
    <div class="item" v-for="(item,index) in application" :key="index">
      <h3 class="title">{{ item.title }}</h3>
      <div clsss="desc" v-for="(n,key) in item.desc"
           :key="key"
           v-html="n"
      ></div>
    </div>
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
      ],
      application: [
        {
          title: '1： 利用路由的meta属性',
          desc: ['1：首先在路由的meta对象中添加 keepAlive： true键值对',
            '2:写两个router-view标签, 在需要缓存的视图标签外包裹 keep-alive标签',
            '如图:<img src="@/assets/img/keep.png"/>'
          ]
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