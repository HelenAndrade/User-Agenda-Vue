import UserCard from '@/components/UserCard.vue'
import ButtonsContact from '@/components/ButtonsContact.vue'
import type { App } from 'vue'

export function setComponent(app: App) {
  app.component('contact-card', UserCard)
  app.component('contact-buttons', ButtonsContact)
}
