import Vue from "vue";

Vue.filter("pasarAMayuscula", function (value) {
  return value.toUpperCase();
});

Vue.filter("pasarAFecha", function (value) {
  return `${new Date(
    value
  ).toLocaleDateString()} - ${new Date(value).toLocaleTimeString()}`;
});

Vue.filter("toFixed", function (value) {
  return value.toFixed(2);
});
