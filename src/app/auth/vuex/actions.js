import axios from '@/http'
import * as types from './mutations-types'

export const attemptLogin = (context, payload) => {
  return axios.get('https://uinames.com/api/?ext')
    .then(response => response.data)
    .then(data => {
      if (data.email) {
        context.commit(types.setToken, data.password)
        context.commit(types.setUser, data)
      }
    })
}
