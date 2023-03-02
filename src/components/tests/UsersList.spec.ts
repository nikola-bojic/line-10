import { mount } from '@vue/test-utils'
import UsersList from '@/components/UsersList.vue'
import { describe, it, expect } from 'vitest'
import store from '@/store'

import Vuetify from "vuetify";
// const vuetify = new Vuetify();

describe('UsersList.vue', () => {

  // show a loader element when the list of users is not populated
  it('should show a loader element', () => {
    const wrapper = mount(UsersList, {
      global: {
        plugins: [store]
      },
      Vuetify
    })

    // does the page show loader element
    expect(wrapper.find(`[data-test-id="progress-circular"]`).exists()).toBeTruthy()

  })

  // show list of users when the list of users is not empty
  it('should show a list of users', () => {
    
    // mock store's initial values
    store.state.users.users = [
      { id: 1, first_name: 'Diego', last_name: 'Paradin', email: 'dparadin0@amazonaws.com' },
      { id: 2, first_name: 'Cece', last_name: 'Bosden', email: 'cbosden1@fc2.com' },
      { id: 3, first_name: 'Neysa', last_name: 'Kelle', email: 'nkelle2@umich.edu' }
    ]

    const wrapper = mount(UsersList, {
      global: {
        plugins: [store]
      },
      Vuetify
    })

    // does the list of users exist on the page
    expect(wrapper.find(`[data-test-id="user-list"]`).exists()).toBeTruthy()

    // does the number of table rows match number of users in the mocked state
    expect(
      wrapper.find(`[data-test-id="user-list"]`).find("tbody").findAll('tr').length ===
        store.state.users.users.length
    ).toBeTruthy()
  })

})
