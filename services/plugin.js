import axios from 'axios'
import { serverUrls } from '~/utils'

export function getAllPlugins () {
  return axios.get(
    serverUrls.baseUrl
  ).then((response) => {
    return response.data.plugins
  })
}

export function getTab (tab) {
  return axios.get(serverUrls.baseUrl)
    .then((response) => {
      console.log(response.data)
      return response.data.tabdata[tab]
    })
}

export function patchTab (payload) {
  return axios.patch(
    serverUrls.baseUrl,
    payload
  ).then((response) => {
    return response.data
  })
}
