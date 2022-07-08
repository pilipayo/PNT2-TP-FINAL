<template>

  <section class="src-componentes-nav-bar">
   <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <router-link to="/">
        <a class="navbar-brand" href="#">Inicio</a>
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

         
          <li class="nav-item">
            <router-link to="/ingreso">
              <a class="nav-link" href="#">Ingreso</a>
            </router-link>
          </li>
        
          <li class="nav-item">
            <router-link to="/egreso">
              <a class="nav-link" href="#">Egreso</a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/lista">
              <a class="nav-link" href="#">Lista</a>
            </router-link>
          </li>

          
          <li class="nav-item">
            <router-link to="/eliminarVechiculoi">
              <a class="nav-link" href="#">Eliminar Vehiculo</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-nav-bar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-nav-bar {

  }
</style>
