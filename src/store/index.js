import { createStore } from 'vuex'

export default createStore({
    state: {
        tips: [{
            input: "",
            state: false,
        }]
    },
    getters: {
        progress(state) {
            let temp = state.tips.filter((item) => {
                return item.state == true
            })
            return temp.length / state.tips.length
        }
    },
    mutations: {
        add(state) {
            state.tips.push({ input: "", state: false })
        },
        changeState(state, index) {
            state.tips[index].state = !state.tips[index].state
        },
        write(state, index) {
            state.tips[index].state = !state.tips[index].state
        }
    },
    actions: {

    },
    modules: {}
})