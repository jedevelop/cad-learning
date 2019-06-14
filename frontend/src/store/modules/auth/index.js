import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'

const user = {
  state: {
    isAuth: false,
    lastEventLogMessage: {},
    status: null,
    error: null,
    isSubscribe: false,
    user: {}
  },
  mutations,
  actions,
  getters
}
export default user
