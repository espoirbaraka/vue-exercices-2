import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    day: 7,
    month: 2,
    year: 2023
  },
  getters: {
    // getDate(state){
    //   return `$(state.day)/$(state.month)/$(state.year)`
    // }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
