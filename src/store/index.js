import Vue from 'vue';
import Vuex from 'vuex';

import {INCREMENT, DECREMENT } from "./mutations-types";

// 1. 装载插件
Vue.use(Vuex)

// 2. 创建对象
const store = new Vuex.Store({
  state: {
    session_id: "",
    user_token: "",
    bundleId: "",
    goldnumer: 0,
    privilege_id: -1,
    privilege_key: "",
    diffValue: 0
  },
  getters: {
    getSessionId: state => {
      return state.session_id;
    },
    getUserToken: state => {
      return state.user_token;
    },
    getBundleId: state => {
      return state.bundleId;
    },
    getGoldNumber: state => {
      return state.goldnumer;
    },
    getPrivilegeId: state => {
      return state.privilege_id;
    },
    getPrivilegeKey: state => {
      return state.privilege_key;
    },
    getDiffValue: state => {
      return state.diffValue;
    }
  },
  mutations: {
    setSessionId(state, session_id){
      state.session_id = session_id;
    },
    setUserToken(state, user_token){
      state.user_token = user_token;
    },
    setBundleId(state, bundleId){
      state.bundleId = bundleId;
    },
    setGoldNumber(state, number){
      state.goldnumer = number;
    },
    setPrivilegeId(state, privilege_id){
      state.privilege_id = privilege_id;
    },
    setPrivilegeKey(state, privilege_key){
      state.privilege_key = privilege_key;
    },
    setDiffValue(state, diffValue){
      state.diffValue = diffValue;
    },
  },
  actions: {

  }
});

export default store;