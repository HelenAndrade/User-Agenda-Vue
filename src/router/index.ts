import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/home.vue'
import ContactProfile from '../views/ContactProfile/contactprofile.vue'
import Forms from '../views/Forms/forms.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contactprofile/:id',
      name: 'contactprofile',
      component: ContactProfile
    },
    {
      path: '/forms',
      name: 'forms',
      component: Forms
    }
  ]
})

export default router
