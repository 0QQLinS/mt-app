import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    position: '北京',
    surrounding: '',
    userName: ''
  },

  mutations: {
    setPosition(state, val) {
      // console.log(val)
      if (val.length > 1) {
        state.surrounding = val[1].cityInfoList.splice(0, 3);
        state.position = val[0];
      } else {
        state.position = val;
      }
    },
    setUserName(state, val) {
      state.userName = val;
    }
  },

  actions: {
    setPosition({ commit }, val) {
      commit('setPosition', val);
    }
  },


  modules: {

  }
})
