<template>
  <div class="app-container">
    <h1>Welcome to Home Page</h1>
    <p>This is the home page of our website.</p>

    <UserCard v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserCard from '@/components/UserCard.vue'
import usersData from '../../public/users.json'

export default defineComponent({
  name: 'HomeView',
  components: {
    UserCard
  },
  data() {
    return {
      users: usersData
    }
  }
})
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(34, 97, 97);
  color: white;
  height: fit-content;
  width: 100vh;
}
</style>
