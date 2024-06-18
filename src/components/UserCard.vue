<template>
  <RouterLink :to="'/contactprofile/' + user?.id">    
    <Card>
    <template #title>{{ user?.name }}</template>
    <template #content>
        <p class="m-0">
        {{ user?.email }}
        </p>
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
   background-color: whitesmoke;
   padding: 20px;
   margin: 10px 5px 10px 5px;
 }
 
 .card-content {
   color: #333;
 }
 </style>

