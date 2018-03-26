import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import md5 from 'js-md5'
import {getToken, removeToken} from '../utils/auth'
Vue.use(Vuex)

const state = {
  insurance: [],
  user: {},
  token: getToken(),
  userInfo: {},
  insuranceDeal: [],
  idInformation: {}
}

const mutations = {
  getInsurance (state, data) {
    state.insurance = data
  },
  getInsuranceDeal (state, data) {
    state.insuranceDeal = data
  },
  getUserInfo (state, data) {
    state.userInfo = data
    state.idInformation = data.identityInformation
  },
  getidInfromation (state, data) {
  }
}
const actions = {
  async getInsurance (context) {
    return new Promise((resolve, reject) => {
      axios.get('/api/client/allInsurance').then((res) => {
        context.commit('getInsurance', res.data.data)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  async register ({commit, state}, registerInfo) {
    return new Promise((resolve, reject) => {
      let {account, pwd} = registerInfo
      axios.post('/api/client/register', {account: account, pwd: md5(pwd)}).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  async login ({commit, state}, loginInfo) {
    return new Promise((resolve, reject) => {
      let {account, pwd} = loginInfo
      axios.post('/api/client/login', {account: account, pwd: md5(pwd)}).then((res) => {
        state.token = getToken()
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  async getUserInfo ({commit, state}) {
    return new Promise((resolve, reject) => {
      axios.get('/api/client/userinfo', {token: state.token}).then((res) => {
        commit('getUserInfo', res.data.data)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  async logout ({commit, state}) {
    removeToken()
    commit('getUserInfo', {})
  },
  async getInsuranceDeal ({commit, state}) {
    return new Promise((resolve, reject) => {
      axios.get('/api/client/insurancedeal', {token: state.token}).then((res) => {
        commit('getInsuranceDeal', res.data.data)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  async addInsuranceDeal ({commit, state}, dealInfo) {
    return new Promise((resolve, reject) => {
      axios.post('/api/client/addinsurancedeal', {token: state.token, _id: state.user._id, dealInfo}).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  async cancelInsuranceDeal ({commit, state}, dealid) {
    return new Promise((resolve, reject) => {
      // 看一下token用不用传。。。
      axios.post('/api/client/cancelinsurancedeal', {token: state.token, dealid: dealid}).then((res) => {
        // 可以get一下保单
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  async updateId ({commit, state}, idInfo) {
    return new Promise((resolve, reject) => {
      axios.post('/api/client/updateid', {token: state.token, _id: state.user._id, idInfo}).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
const getters = {
  insurance: state => state.insurance,
  userInfo: state => state.userInfo,
  insuranceDeal: state => state.insuranceDeal,
  idInformation: state => state.idInformation
}

export default new Vuex.Store({
  state, mutations, actions, getters
})
