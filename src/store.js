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
    vehiculo: null,
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

    limpiarMonto({ commit }) {
      commit("setMontoAPagar", 0);
    },
    async egresoVehiculo({ commit }, patente) {
      try {
        let statusFindPatente;
        try {
          const { data, status } = await axios.get(
            `${APIURL}/vehiculos/${patente}`
          );
          console.log(data);
          statusFindPatente = status;
          commit("setVehiculo", data);
        } catch (e) {
          console.error(e);
        }
        if (statusFindPatente === 200 && statusFindPatente !== undefined) {
          const response = await axios.put(`${APIURL}/vehiculos/${patente}`, {
            "content-type": "application/json",
          });
          console.log(response);

          return true;
        } else {
          return false;
        }
      } catch (e) {
        console.error(e.message);

        return false;
      }
    },
    async calcularMonto({ commit, dispatch }, patente) {
      try {
        const response = await dispatch("egresoVehiculo", patente);
        console.log(response);
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
    setVehiculo(state, v) {
      state.vehiculo = v;
    },
  },
});
