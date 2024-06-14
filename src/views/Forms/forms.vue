<template>
  <div class="app-container">
    <h1>Form New Contact</h1>
    <p>This is the form page of our website where you can create new contacts.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { FormsService } from './forms.service'

export default defineComponent({
  name: 'FormsView'
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
