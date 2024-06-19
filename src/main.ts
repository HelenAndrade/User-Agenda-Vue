import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Card from 'primevue/card';
import { setComponent } from './modules/components.module'

const app = createApp(App)
setComponent(app)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})

app.component('Card', Card);
app.use(router)
app.mount('#app')
