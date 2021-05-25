import Vue from 'vue';
import Vuex from 'vuex';
import menu from './modules/menu';
import transfer from './modules/transfer';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        menu,
        transfer
    },
    getters
});
export default store;