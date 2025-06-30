import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
  namespaced: true,
  state() {
    return {
      username: 'miguel',
      password: '123456',
    }
  },
  mutations,
  getters,
  actions,
}
