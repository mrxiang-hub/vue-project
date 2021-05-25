export default {
    namespaced: true,
    state: {
        val: 'Hello World!!!'
    },
    mutations: {
        UPDATE_VAL: (state, str) => {
            state.val = str;
        }
    },
    actions: {}
}