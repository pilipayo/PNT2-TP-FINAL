<template>
  <div class="container-fluid mt-3">
   <div class="jumbotron">
     <h1> Estacionamiento QR </h1>
     <hr>
     <NavBar/>
     <router-view></router-view>
   </div>
 </div>
</template>

<script>
import NavBar from './componentes/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
 
  }
}
</script>

<style>
.jumbotron{
  background: rgb(143, 132, 132);
  color: blue;
}
</style>
