<template>

  <section class="src-componentes-egreso">
    <div class="jumbotron">
      <h2><i>Egreso de Vehiculo</i></h2>
      <hr>
      <br>

      <vue-form :state="formstate" @submit.prevent="enviar()">


        <validate tag="div">
          <label for="patente">Patente</label>
          <input type="text" id="patente" name="patente" class="form-control" autocomplete="off"
            v-model.trim="formData.patente" required :minlength="patenteMinLength" :maxlength="patenteMaxLength" />
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

      <div class="alert alert-danger" v-if="!status">
        El vehículo no está ingresado en el garage
      </div>
      <div class="alert alert-danger" v-if="montoAPagar">
        El monto a pagar es {{ montoAPagar }}
      </div>
    </div>
  </section>

</template>

<script>

export default {
  name: 'src-componentes-ingreso',
  props: [],
  mounted() {

  },
  data() {
    return {
      formstate: {},
      formData: this.getInitialData(),
      patenteMinLength: 6,
      patenteMaxLength: 7,
    }
  },
  methods: {
    getInitialData() {
      return {
        patente: null,
      }
    },
    enviar() {
      this.$store.dispatch("egresoVehiculo", this.formData.patente);
      if (this.status) {
        this.$store.dispatch("calcularMonto", this.formData.patente);
      }
      this.formData = this.getInitialData()
      this.formstate._reset()
      console.log(this.formData)
    },

  },
  computed: {
    status() {
      return this.$store.state.status;
    },
    montoAPagar() {
      return this.$store.state.montoAPagar;
    }
  }
}


</script>

<style scoped lang="css">
.src-componentes-ingreso {}

.jumbotron {
  background-color: #d5e5ec;
  color: black;
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
