<template>
  <div class="life">
    <Demo></Demo>
    <ul class="list">
      <li v-for="(o,i) in hook"
          :key="i"
      >
        <h3 class="title">{{ o.title }}</h3>
        <div class="desc">{{ o.desc }}</div>
      </li>
    </ul>
    <hr/>
    <div class="list">
      <h3 class="title">父子组件的生命周期流程</h3>
      <div class="desc">
        1: 父组件先开始加载，但是子组件比父组件先加载完成;<br/>
        2: 加载流程是，父组件走到 beforeMount时会停止,这时候，子组件开始加载，等到子组件mounted之后，父组件才mounted <br/>
        <span class="tip">详细请打开控制台,看父子组件加载过程</span>
      </div>
    </div>
  </div>
</template>

<script>
import Demo from './demo';

export default {
  name: "life",
  components: {
    Demo
  },
  data() {
    return {
      hook: [
        {
          title: 'beforeCreate',
          desc: 'Vue实例创建之前,这时候获取不到组件的任何东西'
        },
        {
          title: 'created',
          desc: 'Vue实例创建之后，这时候可以获取到绑定在Vue对象上的属性，比如data等，但获取不到dom节点，在这里可以做数据的初始化,如果牵扯到dom的操作，写在$nextTick中即可'
        },
        {
          title: 'beforeMount',
          desc: '组件载入之前，这时候，可以获取到data等属性，也可以获取到dom节点，单 data中的数据还未绑定到 dom节点上，dom中只是Vue占位符,虽然能够获取到dom但获取不到dom中的内容'
        },
        {
          title: 'mounted',
          desc: '组件载入后， 这时候载入已经完成，可以任意获取实例的data等属性和dom节点，如果有必要操作dom可以再这里进行操作，(Vue是数据双向绑定，只需要操作数据，视图会自动更新,不推荐在这里过多的操作dom)'
        },
        {
          title: 'beforeUpdate',
          desc: '视图更新之前，在mounted生命周期之前任意去修改数据,都会触发该生命周期,在mounted之后如果视图层绑定的数据被改变，会触发beforeUpdate，在这获取到的dom上的内容还是没有更新之前的内容'
        },
        {
          title: 'updated',
          desc: '视图更新之后，触发条件同上，在这里获取到的dom上的内容是更新之后的内容'
        },
        {
          title: 'beforeDestroy',
          desc: '组件销毁之前,离开页面时候触发，应用场景不多，基本和destroy应用场景一样的'
        },
        {
          title: 'destroyed',
          desc: '组件销毁之后，离开页面时候触发， 可以在这里做一些定时器清除，监听事件清除等操作'
        }
      ],
    }
  },
  beforeCreate() {
    console.log('beforeCreate， 父');
  },
  created() {
    console.log('created， 父');
  },
  beforeMount() {
    console.log('beforeMount， 父');
  },
  mounted() {
    console.log('mounted， 父');
  }
}
</script>

<style lang="scss" scoped>
.life {
  .list {
    .title {
      font-size: 14px;
      font-weight: 600;
      line-height: 30px;
    }

    .desc {
      font-size: 12px;
      line-height: 30px;

      .tip {
        color: #F56C6C;
      }
    }
  }
}
</style>