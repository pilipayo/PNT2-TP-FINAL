<template>
  <div class="container-fluid mt-3">
   <div class="jumbotron">
     <!-- <h1> Estacionamiento QR </h1>-->
     <img class = "foto" src='./assets/Estacionamiento.png' :align="right" :width="300" :height="100" >
     
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
  color: rgb(6, 6, 19);
}
.foto{
  margin-top: 0%;
  margin-bottom: 5%;
}
</style>
