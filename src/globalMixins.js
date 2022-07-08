import Vue from "vue";

const mixinGlobal = {
  computed: {
    registros() {
      return this.$store.state.registros;
    },
    status() {
      return this.$store.state.status;
    },
    montoAPagar() {
      return this.$store.state.montoAPagar;
    },
    vehiculo() {
      return this.$store.state.vehiculo;
    },
    vehiculos() {
      return this.$store.state.vehiculos;
    },
    deleted() {
      return this.$store.state.deleted;
    },
    error() {
      return this.$store.state.error;
    },
  },
};

Vue.mixin(mixinGlobal);
