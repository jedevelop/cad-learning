import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_REQUEST_FAIL,
  REGISTER_REQUEST_SUCCESS,
  SOCKET_AUTH,
  SOCKET_MESSAGE,
  SOCKET_SUBSCRIBE,
  LOGOUT
} from "./consts";

export default {
  [LOGIN_REQUEST]: state => {
    state.status = 'loading'
  },
  [LOGIN_REQUEST_SUCCESS]: (state, token) => {
    state.token = token
    state.status = 'success'
  },
  [LOGIN_REQUEST_FAIL]: (state, error) => {
    state.status = 'error'
    state.error = error
  },
  [REGISTER_REQUEST]: state => {
    state.status = 'loading'
  },
  [REGISTER_REQUEST_SUCCESS]: state => {
    state.status = 'success'
  },
  [REGISTER_REQUEST_FAIL]: (state, error) => {
    state.error = error
    state.status = 'error'
  },
  [REGISTER_REQUEST_FAIL]: (state, error) => {
    state.error = error
    state.status = 'error'
  },
  [SOCKET_AUTH]: (state, isAuth) => {
    state.isAuth = isAuth
  },
  [SOCKET_MESSAGE]: (state, message) => {
    state.lastEventLogMessage = message
  },
  [SOCKET_SUBSCRIBE]: (state, isSubscribe) => {
    state.isSubscribe = isSubscribe
  },
  [LOGOUT]: (state, data = null) => {
    state.token = data
  },
}
