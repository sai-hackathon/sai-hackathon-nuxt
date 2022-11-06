/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import plugins from './plugins';

Vue.use(Vuex);

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    token: '',
    walletAddress: ''
  },
  getters: {},
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setWalletAddress(state, walletAddress) {
      state.walletAddress = walletAddress;
    }
  },
  actions: {},
  modules: {}
});
