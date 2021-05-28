<template>
  <div class="routing">
    <div class="explain">
      <h3 class="title">路由钩子函数总共有6个</h3>
      <div class="desc">路由钩子的主要功能是用来做路由守卫，在进入路由之前或者之后做一些拦截或者其他操作</div>
      <ul class="list">
        <li>
          1: 全局路由钩子函数： beforeEach, afterEach <br/>

        </li>
        <li>
          2: 单个路由钩子函数： beforeEnter
        </li>
        <li>
          3: 全局路由钩子函数： beforeRouteEnter, beforeRouteLeave, beforeRouteUpdate
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "routing"
}
</script>

<style lang="scss" scoped>
.routing {
  .explain {
    & > .title {
      font-weight: 600;
      line-height: 40px;
    }

    .desc {
      font-size: 12px;
      color: #F56C6C;
    }

    .list {
      li {
        font-size: 12px;
        line-height: 30px;
      }
    }
  }
}
</style>