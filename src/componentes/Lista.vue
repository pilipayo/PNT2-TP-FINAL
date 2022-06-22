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
            <td>{{ registro.fecha | pasarAFecha }}</td>
            <td>{{ registro.patente | pasarAMayuscula }}</td>
            <td>{{ registro.monto | toFixed }}</td>
          </tr>
          <tr>
            <td>Total </td>
            <td></td>
            <td> {{ calcularTotalIngresos() | toFixed }}</td>
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
    calcularTotalIngresos() {
      let total = 0;
      this.registros.map((registro) => {
        total += registro.monto;
      })
      return total;
    }
  },

}


</script>

<style scoped lang="css">
.jumbotron {
  background-color: rgb(216, 239, 237);
  color: black;
}
</style>
