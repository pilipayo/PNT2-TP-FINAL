<template>

  <section class="src-componentes-totalVehiculos">
    <div class="jumbotron">
      <h2><i> Autos ingresados histórico</i></h2>

      <table v-if="vehiculos.length" class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Patente</th>
            <th scope="col">Actualmente estacionado</th>
            <th scope="col">Tipo de Vehiculo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(vehiculo, index) in vehiculos" :key="index">
            <td>{{ vehiculo.horaDeIngreso | pasarAFecha }}</td>
            <td>{{ vehiculo.patente | pasarAMayuscula }}</td>
            <td>{{ vehiculo.isParked === true ? 'Si' : 'No' }}</td>
            <td>{{ vehiculo.tipoDeVehiculo }}</td>
            <!-- <td>{{ registro.monto | toFixed }}</td> -->
            <!-- <td><button class="btn btn-danger mt-3" @click="deleteRegistro(registro.patente)">Borrar</button></td> -->
          </tr>

        </tbody>
      </table>
      <div v-else class="jumbotron empty"> Actualmente no se han ingresado vehiculos a la lista</div>
      <hr>
      <br>
    </div>
  </section>

</template>

<script lang="js">

export default {
  name: 'src-componentes-totalVehiculos',
  props: [],
  beforeMount() {
    this.$store.dispatch("getVehiculos");
  },
  mounted() {
    console.log(this.vehiculos);
  },
  data() {
    return {

    }
  },
  methods: {

  }
}


</script>

<style scoped lang="css">
.jumbotron {
  background-color: rgb(216, 239, 237);
  color: black;
}

.empty {
  background-color: rgb(223, 184, 230);
  display: flex;
  justify-content: center;
  align-items: center;
  color: blueviolet;
}
</style>
