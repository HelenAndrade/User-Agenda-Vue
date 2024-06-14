<template>
    <div class="card" card>
      <h1>Informação do Contato</h1>
      <div class="card-info">
      <p>ID: {{ contact.id }}</p>
      <p>Name: {{ contact.name }}</p>
      <p>Email: {{ contact.email }}</p>
      <p>Number: {{ contact.number }}</p>
    </div>
    </div>
  
   
</template>
  
<script lang="ts">

export default{
  name: 'ContactView',
  data(){
    return{
      contact: {id: "1", name:"teste", email:"teste@gmail.com", number: '1020'}
    }
    
  },created(){
    console.log(this.contact)
  }
}

  
</script>
  
<style scoped>
  .card-info {
    width: 1000px;
    background-color: whitesmoke;
    padding: 20px;
    font-size: 20px;
  }
  .card {
    font-size: 30px;
  }
</style>
  