export default {
  getSocketAuth(state) {
    return state.isAuth
  },
  getLastEventLogMessageFromSocket(state) {
    return state.lastEventLogMessage
  },
  getSocketSubscribe(state) {
    return state.isSubscribe
  },
  getUser(state) {
    return state.user
  },
  getToken(state) {
    return state.token
  }
}
