import UserCard from '@/components/UserCard.vue'
import type { App } from 'vue'

export function setComponent(app: App) {
  app.component('contact-card', UserCard)
}
