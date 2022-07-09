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
    vehiculos: [],
    deleted: null,
    error: null,
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
    async deleteVehiculo({ commit }, pat) {
      console.log("deleteVehiculo", pat);

      try {
        let { data: vehi } = await axios.delete(`${APIURL}/vehiculos/${pat}`);
        console.log("AXIOS DELETE usuario", vehi);
        commit("setDeleted", vehi);
        commit("setError", false);
      } catch (error) {
        commit("setError", error.message);
        commit("setDeleted", false);
        console.error("Error en deletePatente()", error.message);
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
        // commit("setStatus", false);
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
    async getVehiculos({ commit }) {
      try {
        const { data } = await axios.get(`${APIURL}/vehiculos`);
        commit("setVehiculos", data);
      } catch (e) {
        console.error(e.message);
      }
    },
    setDeletedAndError({commit}){
      commit("setDeleted", false)
      commit("setError", false)
    }
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
    setDeleted(state, v) {
      state.deleted = v;
    },
    setVehiculos(state, all) {
      state.vehiculos = all;
    },
    setError(state, e) {
      state.error = e;
    },
  },
});
