import { getAllPlugins, getTab } from '~/services'
export const state = () => ({
  plugins: [],
  tab: {}
})

export const getters = {
  plugins (state) {
    return state.plugins
  }
}

export const mutations = {
  GET_ALL_PLUGINS (state, payload) {
    state.plugins = payload
  },
  SET_TAB (state, payload) {
    state.tab = payload
  }
}

export const actions = {
  async getAllPlugins ({ commit }) {
    const plugins = await getAllPlugins()
    commit('GET_ALL_PLUGINS', plugins)
  },
  async getTab ({ commit }, tab) {
    const res = await getTab(tab)
    console.log('tab', res)
    commit('SET_TAB', res.data.tabdata[tab])
  }
}
