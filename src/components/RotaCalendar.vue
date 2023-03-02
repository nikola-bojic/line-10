<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import CircularLoader from '@/components/CircularLoader.vue'
import { CalendarView } from 'vue-simple-calendar'
import { MonthPickerInput } from 'vue-month-picker'

const store = useStore()
const formattedRota = computed(() => store.getters['rotas/getFormattedRotas'])

const thisMonth = (d = 0, h = 0, m = 0) => {
  const t = new Date()
  return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0)
}

let showDate = ref(thisMonth(1))

const selectDate = (date: any) => {
  showDate.value = date.from
}
</script>

<template>
  <CircularLoader v-if="formattedRota === null" />

  <div v-else class="d-flex flex-column flex-grow-1 w-100">
    <div class="py-2 calendar-header">
      <month-picker-input
        :default-month="showDate.getMonth() + 1"
        @change="selectDate" />
    </div>

    <calendar-view
      :show-date="showDate"
      :items="formattedRota"
      :disable-past="false"
      :disable-future="false"
      :display-period-count="1"
      :show-times="false"
      :starting-day-of-week="1"
      :enable-date-selection="true"/>

  </div>
</template>

<style scoped lang="scss">
.calendar-header {
  position: relative;
  text-align: center;
  z-index: 99;
  background-color: #e2e2e2;

  :deep(.month-picker-input-container) {
    margin: 0 auto;

    .month-picker-input {
      background: #fff;
      cursor: pointer;
      padding: 0.5em;
      text-align: center;
    }
  }
}

:deep(.cv-wrapper) {
  min-height: 0;
}
</style>
