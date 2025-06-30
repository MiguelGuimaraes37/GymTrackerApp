import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { createVuetify } from 'vuetify'
import router from './router.js'
import 'vuetify/styles' // Global CSS has to be imported
import { aliases, mdi } from 'vuetify/iconsets/mdi' // Optional icons
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
})
const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(store)

app.mount('#app')
