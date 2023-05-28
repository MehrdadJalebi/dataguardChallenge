import {
  getAllPlugins,
  getTab,
  updateTab,
  getAllTabdata
} from '~/services'
export const state = () => ({
  plugins: [],
  tab: {},
  tabdata: {}
})

export const getters = {
  plugins (state) {
    return state.plugins
  }
}

export const mutations = {
  SET_ALL_PLUGINS (state, payload) {
    state.plugins = payload
  },
  SET_ALL_TABDATA (state, payload) {
    state.tabdata = payload
  },
  SET_TAB (state, payload) {
    state.tab = payload
  }
}

export const actions = {
  async getAllPlugins ({ commit }) {
    const plugins = await getAllPlugins()
    commit('SET_ALL_PLUGINS', plugins)
  },
  async getAllTabdata ({ commit }) {
    const tabdata = await getAllTabdata()
    commit('SET_ALL_TABDATA', tabdata)
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
  }
}
