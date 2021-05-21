export default {
    namespaced: true,
    state: {
        isCollapse: false
    },
    mutations: {
        UPDATE_ISCOLLAPSE: (state, bool) => {
            state.isCollapse = bool;
        }
    },
    actions: {}
}


