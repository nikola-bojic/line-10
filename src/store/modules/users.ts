import axios from 'axios'
import { useToast } from 'vue-toastification'
import { mockUsers } from '@/store/modules/mock/users.mock'
import type { User, StateUser } from '@/store/modules/users.types'

const usersEndpoint = 'https://my.api.mockaroo.com/users?key=727fabe0'

const toast = useToast()

const state: StateUser = {
  users: [],
  selectedUsers: new Set(),
  noneSelected: true
}

const getters = {
  getUsers: (state: StateUser) => {
    return state.users
  },

  getSelectedUsers: (state: StateUser) => {
    return state.selectedUsers
  },

  getNoneSelected: (state: StateUser) => {
    return state.noneSelected
  }
}

const actions = {

  getUsers: async ({ commit, dispatch }: { commit: Function; dispatch: Function }) => {
    try {

      const { data } = await axios.get(usersEndpoint)
      commit('setUsers', data)

    } catch (error) {
      
      toast.error('There was an error fetching users')

      // this is a workaround as the mock API service is limited to 200 requests per day
      // so rather than creating another mock API, I have saved the response in the const above
      // and will just save that insted of API response
      commit('setUsers', mockUsers)
      return

    } finally {
      
      commit('setSelectedUsers')
      await dispatch('rotas/getRotas', null, { root: true })

    }
  },

  toggleUser: async (
    { commit, dispatch }: { commit: Function; dispatch: Function },
    userToToggle: User
  ) => {

    commit('setSelectedUsers', userToToggle)
    await dispatch('rotas/formatRotas', null, { root: true })

  }
}

const mutations = {
  setUsers(state: StateUser, data: User[]) {

    // As the API returns duplicated user ID values
    // I have decided to filter the list to show unique user IDs only

    const uniqueUsers: User[] = []
    data.filter((item) => {
      const i = uniqueUsers.findIndex((user) => user.id == item.id)
      if (i <= -1) uniqueUsers.push(item)
      return null
    })

    state.users = uniqueUsers
  },

  setSelectedUsers(state: StateUser, userToToggle?: User) {
    
    if (userToToggle) {
      if (state.noneSelected) {
        state.selectedUsers = new Set([userToToggle])
        state.noneSelected = false
      } else {
        if (state.selectedUsers.has(userToToggle)) state.selectedUsers.delete(userToToggle)
        else state.selectedUsers.add(userToToggle)
      }
    }

    if (!userToToggle || state.selectedUsers.size === 0) {
      state.noneSelected = true
      state.selectedUsers = new Set(state.users)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
