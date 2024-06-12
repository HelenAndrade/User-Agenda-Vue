<template>
  <div class="app-container">
    <h1>Welcome to Home Page</h1>
    <p>This is the home page of our website.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView'
})
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  width: 100vh;
  background-color: rgb(34, 97, 97);
}
</style>
