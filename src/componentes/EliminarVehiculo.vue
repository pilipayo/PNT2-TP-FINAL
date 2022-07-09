<template>

  <section class="src-componentes-ingreso">
    <div class="jumbotron" :style="{ background: colorDeFondo, color: colorDeTexto }">
      <h2><i>Ingreso la patente del vehiculo a eliminar</i></h2>
      <hr>
      <br>

      <vue-form :state="formstate" @submit.prevent="enviar()">

        <br>

        <validate tag="div">
          <label for="patente">Patente</label>
          <input type="text" id="patente" name="patente" class="form-control" autocomplete="off"
            v-model.trim="formData.patente" required :minlength="patenteMinLength" :maxlength="patenteMaxLength" v-uppercase/>
          <field-messages name="patente" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              La patente debe ser mínimo de {{ patenteMinLength }} caracteres
            </div>
          </field-messages>
        </validate>
        <br>


        <button class="btn btn-success my-3" :disabled="formstate.$invalid" type="submit">Enviar</button>
      </vue-form>
      <br>
      <hr>


    </div>
    <div v-show="deleted" class="alert alert-danger mt-2">Vehículo eliminado correctamente</div>
    <div v-show="error" class="alert alert-danger mt-2">No se ha encontrado el vehiculo en el listado</div>

  </section>

</template>

<script>

export default {
  name: 'src-componentes-ingreso',
  props: [],
  beforeMount(){
      this.$store.dispatch("setDeletedAndError")
  },
  data() {
    return {
      formstate: {},
      formData: this.getInitialData(),
      patenteMinLength: 6,
      patenteMaxLength: 7,
      colorDeFondo: "rgb(215, 233, 228)",
      colorDeTexto: "black",
    }
  },
  methods: {
    getInitialData() {
      return {
        patente: null,
      }
    },
    enviar() {
      const dataToSend = this.formData.patente;
      console.log(dataToSend);
      this.$store.dispatch("deleteVehiculo", dataToSend);
      this.formData = this.getInitialData();
      this.formstate._reset();
    },
  },
  computed: {
  }
}


</script>

<style scoped lang="css">
.src-componentes-ingreso {}

.jumbotron {

  border: 2px inset rgb(0, 0, 0, 0.5);
}

h3 {
  background-color: rgb(157, 183, 161);
}

label {
  font-weight: bold;
}

pre {
  color: white;
}
</style>
