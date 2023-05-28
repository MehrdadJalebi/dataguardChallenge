import { getAllData, getTab, updateTab, toggleAll } from '~/services'
export const state = () => ({
  plugins: [],
  tab: {},
  tabdata: {},
  isAllDisabled: false
})

export const getters = {
  plugins (state) {
    return state.plugins
  },
  isAllDisabled (state) {
    return state.isAllDisabled
  }
}

export const mutations = {
  SET_ALL_PLUGINS (state, payload) {
    state.plugins = payload
  },
  SET_ALL_TABDATA (state, payload) {
    state.tabdata = payload
  },
  SET_IS_ALL_DISABLED (state, payload) {
    state.isAllDisabled = payload
  },
  SET_TAB (state, payload) {
    state.tab = payload
  }
}

export const actions = {
  async getAllData ({ commit }) {
    const alldata = await getAllData()
    commit('SET_ALL_TABDATA', alldata.tabdata)
    commit('SET_ALL_PLUGINS', alldata.plugins)
    commit('SET_IS_ALL_DISABLED', alldata.isAllDisabled ? alldata.isAllDisabled : false)
  },
  async getTab ({ commit }, tab) {
    const res = await getTab(tab)
    commit('SET_TAB', res.data.tabdata[tab])
  },
  async updateTab ({ state, commit }, payload) {
    const tab = { ...state.tabdata }
    tab[payload.tabName] = payload.tab
    const res = await updateTab(tab)
    commit('SET_TAB', res)
  },
  async toggleAll ({ commit }, status) {
    const res = await toggleAll(status)
    commit('SET_IS_ALL_DISABLED', res)
  }
}
