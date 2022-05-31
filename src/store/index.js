import { createStore } from 'vuex'

export default createStore({
    state: {
        tips:1
    },
    getters: {},
    mutations: {
        add(state){
            state.tips++
        }
    },
    actions: {
        
    },
    modules: {}
})