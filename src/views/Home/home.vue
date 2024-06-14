<template>
  <div class="app-container">
    <h1>Welcome to Home Page</h1>
    <p>This is the home page of our website.</p>
    <h1 v-for="contact in contacts" :key="contact" >{{ contact?.email}}</h1>

    <!-- <UserCard v-for="user in users" :key="user.id" :user="user" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { HomeService } from './home.service';
import { Contacts } from '@/model/contact.model'
import type HomeData from '@/interface/HomeData.vue';


export default defineComponent({
  name: 'HomeView',
  
  data(): HomeData{
    return {      
      // users: usersData,
      contacts: [] ,

    }
  },
  computed:{
    service(){
      return new HomeService()
    }
  },
  methods:{
    getContacts(){
      this.service.getAllContact().then((response:Array<Contacts>)=>this.contacts=response)
    }
  },
  mounted(){
   this.getContacts()
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
