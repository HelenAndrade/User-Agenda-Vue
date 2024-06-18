import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/home.vue'
import ContactProfile from '../views/ContactProfile/contactprofile.vue'
import EditContact from '../views/EditContact/edit.contact.vue'
import Forms from '../views/Forms/forms.vue'
import CreateContact from '@/views/CreateContact/createContact.vue'




const router = createRouter({
  history: createWebHistory(),
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
    },
   {
    path:'/editcontact/:id',
    name:'editContact',
    component: EditContact
   },
   {
    path:'/createContact/:id',
    name:'createContact',
    component: CreateContact
   }
  ]
})

export default router
