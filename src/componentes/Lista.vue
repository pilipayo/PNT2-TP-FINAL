<template>

  <section class="src-componentes-lista">
     <div class="jumbotron">
      <h2><i> Autos ingresados</i></h2>

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Fecha</th>
      <th scope="col">Patente</th>
      <th scope="col">Pago</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>16/06/2022</td>
      <td>AA123BB</td>
      <td>$350</td>
  

    
    </tr>
  </tbody>
</table>

      <hr>
      <br>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-lista',
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
  .jumbotron{
    background-color: rgb(219, 221, 207);
    color:black;
  }


</style>
