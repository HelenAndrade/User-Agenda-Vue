<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/forms">Add new Contact</RouterLink>
        </nav>
      </div>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>
