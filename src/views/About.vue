<template>
  <div class="app-container">
    <h1>About Us</h1>
    <p>This is the about page of our website.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutView'
})
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vh;
  background-color: rgb(34, 97, 97);
}
</style>
