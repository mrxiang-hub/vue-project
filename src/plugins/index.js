import common from '../components/common';

const Plugins = {
    install: (Vue) => {
        // 公共组件
        Vue.component('Common', common)
        // 公共方法  注意(此方法使用时需在使用的地方引入  Vue ，在通过  Vue.commonMethods()调用)
        Vue.commonMethods = () => {
            alert(1);
        }
        // 公共方法，挂在原型上的 公共方法可以直接通过this 调用（可以关在原型上的东西很多，这里为了区分挂在Vue类上的公共方法，所以写了个方法）
        Vue.prototype.myMethod = () => {
            alert(1);
        }
        // 公共管道
        Vue.filter('upperCase', (val) => {
            return val.toUpperCase();
        })
        // 公共指令
        Vue.directive('drag', {
            inserted: (el) => {
                console.log(el)
            }
        })
    }
}
export default Plugins;