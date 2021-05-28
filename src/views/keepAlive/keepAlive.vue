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
      <div class="item" v-for="(item,index) in application" :key="index">
        <h3 class="title">{{ item.title }}</h3>
        <div class="desc" v-for="(n,key) in item.desc"
             :key="key"
             v-html="n"
        ></div>
      </div>
    </el-card>
    <el-card>
      <div slot="header" class="clearfix">
        <span>生命周期</span>
      </div>
      <div class="desc">
        <div class="item">
          <div class="desc">
            1:被keep-alive标签包裹的组件会多出两个生命周期activated、deactivated。
          </div>
          <div class="desc">
            2: 被缓存起来的组件只有第一次会触发 beforeCreate--->mounted生命周期函数，但是activated每次都会触发。
          </div>
          <div class="desc">
            3: 没有被缓存的组件，当路由离开时会销毁，也就是说会触发 beforeDestroy和destroyed 生命周期,而被缓存的组件不会走这两个生命周期，而是走deactivated生命周期。
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import Keep from '@/assets/img/keep.png';
import Keep1 from '@/assets/img/keep1.png';
import Keep2 from '@/assets/img/keep2.png';
import Keep3 from '@/assets/img/keep3.png';
import Keep4 from '@/assets/img/keep4.png';

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
            `<img src="${Keep}"/>`
          ]
        },
        {
          title: '2： 使用include、exclude属性实现',
          desc: [
            `<img src="${Keep1}"/>`
          ]
        },
        {
          title: '3： 使用include、exclude属性和beforeRouteLeave钩子函数和vuex (推荐使用)',
          desc: [
            '1: 此方法和方法2比较类似，优点在于,可以通过跳转的路由，来灵活的控制，组件是否需要缓存',
            `<img src="${Keep2}"/>`,
            `<img src="${Keep3}"/>`,
            `<img src="${Keep4}"/>`
          ]
        },
      ]
    }
  },
  activated() {

  },
}
</script>

<style lang="scss" scoped>
.alive {
  .clearfix {
    color: #F56C6C;
  }

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