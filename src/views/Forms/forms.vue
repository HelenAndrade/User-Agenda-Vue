<template>
  <div class="app-container">
    <h1>Form New Contact</h1>
    <p>This is the form page of our website where you can create new contacts.</p>
    <form action="#" method="post">
      <input type="text" v-model="contact.name">
      <input type="text" v-model="contact.email">
      <input type="text" v-model="contact.number">
      <button @click.prevent="saveContact(contact)">save contact</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { FormsService } from './forms.service'
import { Contacts } from '@/model/contact.model';

export default defineComponent({
  name: 'FormsView',
  data(){
    return {
      contact: new Contacts()
      
    }
  },
  computed:{
    service(){
      return new FormsService()
    }

  },
  methods:{
    saveContact(newContact: Contacts){
      this.service.contact.pipe().subscribe({next: (response) => response})
      this.service.postContact(newContact);
      this.contact = {name: '', email: '', number: ''}
    }
  }
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
