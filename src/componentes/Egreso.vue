<template>

  <section class="src-componentes-egreso">
    <div class="jumbotron" :style="{ background: colorDeFondo, color: colorDeTexto }">
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
              La patente debe tener mínimo de {{ patenteMinLength }} caracteres
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
      <MontoAPagar :monto="montoAPagar" v-if="montoAPagar" />
    </div>
  </section>

</template>

<script>

import MontoAPagar from './MontoAPagar.vue';

export default {
  name: "src-componentes-ingreso",
  props: [],
  mounted() {
  },
  beforeDestroy() {
    this.$store.dispatch("limpiarMonto");
  },
  data() {
    return {
      formstate: {},
      formData: this.getInitialData(),
      patenteMinLength: 6,
      patenteMaxLength: 7,
      colorDeFondo: "#d5e5ec",
      colorDeTexto: "black",
    };
  },
  methods: {
    getInitialData() {
      return {
        patente: null,
      };
    },
    enviar() {
      if (this.status) {
        this.$store.dispatch("calcularMonto", this.formData.patente);
      }
      this.formData = this.getInitialData();
      this.formstate._reset();
    },
  },

  components: { MontoAPagar }
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
