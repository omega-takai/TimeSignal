// Utils ==============================
const zeroPadding = (num, length = 2) => {
  const stringNumber = ('0000' + num).slice(-length)
  return stringNumber
}

// Vuex Modules ==============================
export const state = () => ({
  dateObj: {},
  innerWidth: 0,
  // ref: https://hashimotosan.hatenablog.jp/entry/2019/05/28/164834
  breakPoint: {
    large: 960,
    medium: 768,
    small: 560,
  },
  isDesktop: true,
  isTablet: false,
  isMobile: false,
})

export const getters = {
  isDesktopLarge: (state) => {
    return state.innerWidth > state.breakPoint.large
  },
  isDesktop: (state) => {
    const max = state.innerWidth <= state.breakPoint.large
    const min = state.innerWidth > state.breakPoint.medium
    return max && min
  },
  isTablet: (state) => {
    const max = state.innerWidth <= state.breakPoint.medium
    const min = state.innerWidth > state.breakPoint.small
    return max && min
  },
  isMobile: (state) => {
    return state.innerWidth <= state.breakPoint.small
  },
  YYYY: (state) => {
    const year = state.dateObj.getFullYear()
    return zeroPadding(year, 4)
  },
  MM: (state) => {
    // (January gives 0)
    const M = state.dateObj.getMonth() + 1
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
  setInnerWidth: (state, width) => {
    state.innerWidth = width
  },
  setFlagDesktop: (state) => {
    state.isDesktop = true
    state.isTablet = false
    state.isMobile = false
  },
  setFlagTablet: (state) => {
    state.isDesktop = false
    state.isTablet = true
    state.isMobile = false
  },
  setFlagMobile: (state) => {
    state.isDesktop = false
    state.isTablet = false
    state.isMobile = true
  },
}

export const actions = {
  getDate({ commit }) {
    const date = new Date()
    commit('setDateObject', date)
  },
  updateInnerWidth({ commit }, innerWidth) {
    commit('setInnerWidth', innerWidth)
  },
  setDeviceFlag({ commit, dispatch, state }, innerWidth) {
    dispatch('updateInnerWidth', innerWidth)
    console.log('setDeviceFlag', innerWidth)

    // Like a Getters
    const max = state.innerWidth <= state.breakPoint.medium
    const min = state.innerWidth > state.breakPoint.small
    const isTablet = max && min
    const isMobile = state.innerWidth <= state.breakPoint.small

    if (isMobile) {
      commit('setFlagMobile')
      console.log('setDeviceFlag: isMobile')
    } else if (isTablet) {
      commit('setFlagTablet')
      console.log('setDeviceFlag: isTablet')
    } else {
      commit('setFlagDesktop')
      console.log('setDeviceFlag: isDesktop')
    }
  },
}
