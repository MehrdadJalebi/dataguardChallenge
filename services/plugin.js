import axios from 'axios'
import { serverUrls } from '~/utils'

export function getAllData () {
  return axios.get(
    serverUrls.baseUrl
  ).then((response) => {
    return response.data
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

export function toggleAll (payload) {
  const data = {
    isAllDisabled: payload
  }
  return axios.patch(
    serverUrls.baseUrl,
    data
  ).then((response) => {
    return response.data.isAllDisabled
  })
}
