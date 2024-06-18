<template>
  <div class="app-container">
    <h1>Welcome to Home Page</h1>
    <p>This is the home page of our website.</p>
    
  <div v-for="contact in contactList" :key="contact.id" >
    <contact-card  :user="contact" />
  </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { HomeService } from './home.service';
import { Contacts } from '@/model/contact.model'
import UserCard from '@/components/UserCard.vue';

export default defineComponent({
  data(){
    return {      
      // users: usersData,
      contactList: [] as Array<Contacts>

    }
  },
  computed:{
    service(){
      return new HomeService()
    }
  },
  methods:{
    getContacts(){
      this.service.contact.pipe().subscribe({next: (response) => this.contactList = response})
      this.service.getAllContact()
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
  padding: 15px;
}
</style>
