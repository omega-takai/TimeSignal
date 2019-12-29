// Utils ==============================
const zeroPadding = (num, length = 2) => {
  const stringNumber = ('0000' + num).slice(-length)
  return stringNumber
  // console.log('zeroPadding', stringNumber)
  // return parseInt(stringNumber, 10)
}

// Vuex Modules ==============================
export const state = () => ({
  dateObj: {},
})

export const getters = {
  YYYY: (state) => {
    const year = state.dateObj.getFullYear()
    return zeroPadding(year, 4)
  },
  MM: (state) => {
    // (January gives 0)
    const M = state.dateObj.getMonth() + 1
    // const MM = zeroPadding(M)
    // console.log('getters: MM', M, MM)
    return zeroPadding(M)
  },
  DD: (state) => {
    const D = state.dateObj.getDate()
    return zeroPadding(D)
  },
  hh: (state) => {
    const h = state.dateObj.getHours()
    return zeroPadding(h)
  },
  mm: (state) => {
    const m = state.dateObj.getMinutes()
    return zeroPadding(m)
  },
  ss: (state) => {
    const s = state.dateObj.getSeconds()
    return zeroPadding(s)
  },
}

export const mutations = {
  setDateObject: (state, dateObj) => {
    state.dateObj = dateObj
  },
}

export const actions = {
  getDate({ commit }) {
    const date = new Date()
    // console.log('actions getDate', date)
    commit('setDateObject', date)
  },
}
