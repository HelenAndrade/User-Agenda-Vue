import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setComponent } from './modules/components.module'

const app = createApp(App)
setComponent(app)
app.use(router)
app.mount('#app')
