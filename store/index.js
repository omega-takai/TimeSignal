export const state = {
  dateObj: {},
  YYYY: '',
  M: '',
  MM: '',
  D: '',
  DD: '',
  h: '',
  hh: '',
  m: '',
  mm: '',
  s: '',
  ss: '',
}

export const getters = {}

export const mutations = {
  setDateObject: (state, dateObj) => {
    state.dateObj = dateObj
  },
  setYear: (state, year) => {
    state.YYYY = year
  },
  setMonth: (state, month) => {
    state.M = month
  },
  setDate: (state, date) => {
    state.D = date
  },
  setHour: (state, hour) => {
    state.h = hour
  },
  setMinute: (state, minute) => {
    state.m = minute
  },
  setSecond: (state, second) => {
    state.s = second
  },
}

export const actions = {
  getDate({ commit }) {
    const date = new Date()
    // console.log('actions getDate', date)
    commit('setDateObject', date)
  },
  setTimeSet({ commit, dispatch, state }) {
    // Set Date Object
    dispatch('getDate')

    const year = state.dateObj.getFullYear()
    commit('setYear', year)

    // (January gives 0)
    const month = state.dateObj.getMonth() + 1
    commit('setMonth', month)

    const date = state.dateObj.getDate()
    commit('setDate', date)

    const hour = state.dateObj.getHours()
    commit('setHour', hour)

    const minute = state.dateObj.getMinutes()
    commit('setMinute', minute)

    const second = state.dateObj.getSeconds()
    commit('setSecond', second)
  },
}
