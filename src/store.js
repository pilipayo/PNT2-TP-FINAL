import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const APIURL = "http://localhost:3000/api";

export default new Vuex.Store({
  state: {
    status: true,
    montoAPagar: 0,
    registros: [],
  },
  actions: {
    async postVehiculo({ commit }, vehiculo) {
      try {
        await axios.post(`${APIURL}/vehiculos`, vehiculo, {
          "content-type": "application/json",
        });
        commit("setStatus", true);
        return true;
      } catch (e) {
        console.error(e.message);
        commit("setStatus", false);

        return false;
      }
    },
    async egresoVehiculo({ commit }, patente) {
      try {
        await axios.put(`${APIURL}/vehiculos/${patente}`, {
          "content-type": "application/json",
        });
        commit("setStatus", true);
        return true;
      } catch (e) {
        console.error(e.message);
        commit("setStatus", false);

        return false;
      }
    },
    async calcularMonto({ commit }, patente) {
      try {
        const { data } = await axios.get(`${APIURL}/calcular-monto/${patente}`);
        commit("setMontoAPagar", data.monto);
      } catch (e) {
        console.error(e.message);
      }
    },
    async obtenerListado({ commit }) {
      try {
        const { data } = await axios.get(`${APIURL}/registros`);
        commit("setRegistros", data);
      } catch (e) {
        console.error(e.message);
      }
    },
  },
  mutations: {
    setStatus(state, status) {
      state.status = status;
    },
    setMontoAPagar(state, monto) {
      state.montoAPagar = monto;
    },
    setRegistros(state, registros) {
      state.registros = registros;
    },
  },
});
