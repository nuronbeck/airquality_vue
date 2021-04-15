import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';

Vue.use(Vuex);

export default (/* { ssrContext } */) => {
  const Store = new Vuex.Store({
    strict: true,

    state: () => ({}),
    mutations: {},
    getters: {},
    actions: {},
    modules,
  });

  return Store;
};
