import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//对外暴露
export default new Vuex.Store({
    state: {
        login : false
    },
    mutations: {
        login (state) {
            state.login= true
        }
    }
})