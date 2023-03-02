import { createStore } from 'vuex'
import users from '@/store/modules/users'
import rotas from '@/store/modules/rotas'

export default createStore({
  modules: {
    users,
    rotas
  }
})
