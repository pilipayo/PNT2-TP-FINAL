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
          <tr v-for="(registro, index) in registros" :key="index">
            <td>{{ new Date(registro.fecha).toDateString() }}</td>
            <td>{{ registro.patente }}</td>
            <td>{{ registro.monto }}</td>



          </tr>
        </tbody>
      </table>

      <hr>
      <br>
    </div>
  </section>

</template>

<script lang="js">

export default {
  name: 'src-componentes-lista',
  props: [],
  beforeMount() {
    this.$store.dispatch("obtenerListado");
  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {
    registros() {
      return this.$store.state.registros;
    }
  }
}


</script>

<style scoped lang="css">
.jumbotron {
  background-color: rgb(216, 239, 237);
  color: black;
}
</style>
