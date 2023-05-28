import axios from 'axios'
import { serverUrls } from '~/utils'

export function getAllPlugins () {
  return axios.get(
    serverUrls.baseUrl
  ).then((response) => {
    return response.data.plugins
  })
}

export function getAllTabdata () {
  return axios.get(
    serverUrls.baseUrl
  ).then((response) => {
    return response.data.tabdata
  })
}

export function getTab (tab) {
  return axios.get(serverUrls.baseUrl)
    .then((response) => {
      return response.data.tabdata[tab]
    })
}

export function updateTab (payload) {
  const data = {
    tabdata: payload
  }
  return axios.patch(
    serverUrls.baseUrl,
    data
  ).then((response) => {
    return response.data.tabdata
  })
}
