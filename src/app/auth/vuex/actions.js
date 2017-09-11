import * as types from './mutations-types'
import {postLogin} from '../services'

export const attemptLogin = (context, payload) => {
  return postLogin(payload.email, payload.password).then(data => {
    if (data.email) {
      context.commit(types.setToken, data.password)
      context.commit(types.setUser, data)
    }
  })
}
