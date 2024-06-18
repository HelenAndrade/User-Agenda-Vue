<template>
<div class="prime">
    <h1> Criação de contato</h1>
</div>
<form class="form">
        <label for="fname">Name:</label><br>
        <input v-model="contact.name" value=""><br>
        <label for="lname">Email:</label><br>
        <input v-model="contact.email" value=""><br>
        <label for="lname">Number:</label><br>
        <input v-model="contact.number" value=""><br><br>
        <input type="submit" value="Concluir">
</form> 

</template>

<script lang="ts">
export default{
    data(){
    return{
      contact: {id: "1", name:"teste1", email:"teste@gmail.com", number: '1020'}
    }
    
  },created(){
    console.log(this.contact)
  }}
</script>

<style>
.prime {    
    width: 1000px;
    background-color: whitesmoke;
    padding: 20px;
    font-size: 20px;
  }
</style>