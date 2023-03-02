import axios from 'axios'
import { useToast } from 'vue-toastification'
import { mockRotas } from '@/store/modules/mock/rotas.mock'
import type { Rota, FormattedRota, StateRota } from '@/store/modules/rotas.types'
import type { User } from '@/store/modules/users.types'

const rotasEndpoint = 'https://my.api.mockaroo.com/rotas?key=727fabe0'

const toast = useToast()

const state: StateRota = {
  rotas: [],
  formattedRotas: null
}

const getters = {
  getRotas: (state: StateRota) => {
    return state.rotas
  },

  getFormattedRotas: (state: StateRota) => {
    return state.formattedRotas
  }
}

const actions = {
  getRotas: async ({ commit, dispatch }: { commit: Function; dispatch: Function }) => {
    try {
      
      const { data } = await axios.get(rotasEndpoint)
      commit('setRotas', data)

    } catch (error) {
      
      toast.error('There was an error fetching rotas')

      // this is a workaround as the mock API service is limited to 200 requests per day
      // so rather than creating another mock API, I have saved the response in the const above
      // and will just save that insted of API response

      commit('setRotas', mockRotas)
      return
    
    } finally {

      toast.success('Rotas have been loaded')
      await dispatch('formatRotas')
    
    }
  },

  formatRotas: async ({ commit, rootState }: { commit: Function; rootState: any }) => {
    try {
      const selectedUsers = await rootState.users.selectedUsers

      const formattedRotas: FormattedRota[] = []
      selectedUsers.forEach((user: User) => {
        state.rotas.forEach((rota: Rota) => {
          if (user.id === rota.userId) {
            formattedRotas.push({
              id: rota.id,
              startDate: rota.startDate,
              endDate: rota.endDate,
              title: `${user.first_name} ${user.last_name} - ${rota.type}`,
              tooltip: `${user.first_name} ${user.last_name}`,
              style: `background-color: ${rota.type === 'morning' ? '#ffc14d' : '#4dc4ff'}`
            })

            // record an error when the startDate is later than the endDate
            if (rota.startDate > rota.endDate) {
              console.debug('Start Date is later than the End Date', rota)
            }
          }
        })
      })

      commit('setFormattedRotas', formattedRotas)

    } catch (error) {

      console.debug('error', error)
      return
      
    }
  }
}

const mutations = {
  setRotas(state: StateRota, data: Rota[]) {
    state.rotas = data
  },

  setFormattedRotas(state: StateRota, data: FormattedRota[]) {
    state.formattedRotas = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
