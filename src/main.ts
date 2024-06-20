import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'
import Card from 'primevue/card'
import ButtonGroup from 'primevue/buttongroup'
import Button from 'primevue/button'
import { setComponent } from './modules/components.module'

const app = createApp(App)
setComponent(app)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.component('Card', Card)
app.component('ButtonGroup', ButtonGroup)
app.component('Button', Button)
app.use(router)
app.mount('#app')
