<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'
import CircularLoader from '@/components/CircularLoader.vue'
import type { User } from '@/store/modules/users.types'

const store = useStore()
store.dispatch('users/getUsers')

const users = computed(() => store.getters['users/getUsers'])
const selectedUsers = computed(() => store.getters['users/getSelectedUsers'])
const noneSelected = computed(() => store.getters['users/getNoneSelected'])

const toggleUsers = async (user?: User) => {
  await store.dispatch('users/toggleUser', user)
  await store.dispatch('rotas/formatRotas')
}
</script>

<template>
  <CircularLoader v-if="users.length === 0" />

  <v-table v-else class="w-100 overflow-auto" data-test-id="user-list">
    <thead>
      <tr>
        <th class="text-left">User</th>
        <th class="text-right">
          <v-btn
            size="x-small"
            variant="tonal"
            :color="selectedUsers.size === users.length ? 'green' : 'light-grey'"
            @click="toggleUsers()"
            >Show{{ selectedUsers.size === users.length ? 'ing' : '' }} all</v-btn
          >
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id" @click="toggleUsers(user)">
        <td>{{ user.first_name }} {{ user.last_name }}</td>
        <td class="text-right">
          <v-btn
            size="x-small"
            variant="flat"
            :color="selectedUsers.has(user) && !noneSelected ? 'green' : 'light-grey'"
            icon="mdi-check"
          ></v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped lang="scss">
table {
  tr {
    td {
      cursor: pointer;
    }
  }

  tbody {
    tr:hover {
      background-color: #efefef;
    }
  }
}
</style>
