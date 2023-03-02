import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import '@/assets/main.css'
import '@mdi/font/css/materialdesignicons.css'
import '../node_modules/vue-simple-calendar/dist/style.css'
import 'vue-toastification/dist/index.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import Toast from 'vue-toastification'

import { MonthPickerInput } from 'vue-month-picker'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light'
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

app.use(vuetify)
app.use(router)
app.use(store)

app.use(Toast)
app.use(MonthPickerInput)

app.mount('#app')
