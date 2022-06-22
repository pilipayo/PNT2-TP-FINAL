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
  },
};

Vue.mixin(mixinGlobal);