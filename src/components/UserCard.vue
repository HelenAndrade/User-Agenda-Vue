<template>
 <a :href="'/user/' + user.id">    
  <div class="card">
      <div class="card-content">
        <h2>{{ user.name }}</h2>
      <p>Email: {{ user.email }}</p>
    </div>
  </div>
</a>
</template>

<script lang="ts">
export default {
  props: {
    user: {
      type: Object
    }
  }
}
</script>

<style scoped>
.card {
  width: 80vh;
  background-color: whitesmoke;
  padding: 20px;
  margin: 10px 5px 10px 5px;
}

.card-content {
  color: #333;
}
</style>
