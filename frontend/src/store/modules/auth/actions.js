import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS,
  LOGOUT,
  REGISTER_REQUEST,
  REGISTER_REQUEST_FAIL,
  REGISTER_REQUEST_SUCCESS,
  SOCKET_AUTH,
  SOCKET_MESSAGE,
  SOCKET_SUBSCRIBE
} from "./consts";
import AuthApi from '../../../api/auth/Auth.js'

export default {
  [SOCKET_AUTH]: ({commit}, data) => {
    commit(SOCKET_AUTH, data)
  },
  [SOCKET_AUTH]: ({commit}, isAuth) => {
    commit(SOCKET_AUTH, isAuth)
  },
  [SOCKET_MESSAGE]: ({commit}, message) => {
    commit(SOCKET_MESSAGE, message)
  },
  [SOCKET_SUBSCRIBE]: ({commit}, isSubscribe) => {
    commit(SOCKET_SUBSCRIBE, isSubscribe)
  },
  [LOGIN_REQUEST]: ({commit}, data) => {
    return new Promise((resolve, reject) => {
      commit(LOGIN_REQUEST)
      AuthApi.login(data).then(res => {

        console.log('actions')
        const {access_token} = res.data.data
        commit(LOGIN_REQUEST_SUCCESS, access_token)
        resolve(res)
      })
        .catch(err => {
          commit(LOGIN_REQUEST_FAIL, err)
          reject(err)
        })
    })
  },
  [REGISTER_REQUEST]: ({commit}, user) => {
    return new Promise((resolve, reject) => {
      commit(REGISTER_REQUEST)
      AuthApi.register(user).then(() => {
        commit(REGISTER_REQUEST_SUCCESS)
      })
        .catch(err => {
          commit(REGISTER_REQUEST_FAIL, err)
          reject(err)
        })
    })
  },
  [LOGOUT]: ({commit}) => {
    commit(LOGOUT)
  },
}
