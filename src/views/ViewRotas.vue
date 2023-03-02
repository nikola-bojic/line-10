<script setup lang="ts">
import { useStore } from 'vuex'
import UsersList from '@/components/UsersList.vue'
import RotaCalendar from '@/components/RotaCalendar.vue'

const store = useStore()

const refreshData = () => {
  store.dispatch('users/getUsers')
}
</script>

<template>
  <div class="d-flex flex-column h-100">
    <div class="d-flex flex-row flex-grow-1">
      <div class="d-flex h-100 w-25">
        <UsersList />
      </div>
      <div class="d-flex flex-grow-1">
        <RotaCalendar />
      </div>
    </div>

    <div class="d-flex flex-row py-3 pe-3 controls">
      <div class="d-flex flex-row me-5">
        <span class="pe-3 morning">Morning</span>
        <span class="pe-3 afternoon">Afternoon</span>
      </div>

      <div class="d-flex">
        <v-btn 
          variant="flat"
          size="small"
          rounded="pill"
          @click="refreshData">
          Refresh
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.controls {
  justify-content: center;
  align-items: center;
  background-color: #e2e2e2;
  font-size: 90%;

  span {
    &:before {
      display: inline-block;
      vertical-align: middle;
      content: ' ';
      width: 1em;
      height: 1em;
      border-radius: 100%;
      margin-right: 1em;
    }

    &.morning:before {
      background-color: #ffc14d;
    }

    &.afternoon:before {
      background-color: #4dc4ff;
    }
  }
}
</style>
