<template>
  <RouterLink :to="'/contactprofile/' + user?.id">    
    <Card class="card">
      <template #title>{{ user?.name }}{{ user?.email }}</template>
      <template #content>
        <contact-buttons></contact-buttons>
      </template>
    </Card>
 </RouterLink>
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
   display: flex;
   flex-direction: column;
   
 }
 .card:hover {
  background-color: rgb(39, 47, 49);
 }
 </style>

