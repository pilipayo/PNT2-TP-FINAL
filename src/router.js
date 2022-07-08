import Vue from 'vue'
import VueRouter from 'vue-router'

import Ingreso from './componentes/Ingreso.vue'
import Egreso from './componentes/Egreso.vue'
import Lista from './componentes/Lista.vue'
import EliminarVehiculo from './componentes/EliminarVehiculo.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/ingreso' },
        { path: '/ingreso', component: Ingreso },
        { path: '/egreso', component: Egreso },
        { path: '/lista', component: Lista },
        { path: '/eliminarVehiculo', component: EliminarVehiculo },
    ]
})
