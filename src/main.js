import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/scss/reset.scss';
import * as echarts from 'echarts';

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
