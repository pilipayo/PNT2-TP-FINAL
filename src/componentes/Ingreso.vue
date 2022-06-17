<template>

  <section class="src-componentes-ingreso">
    <div class="jumbotron">
      <h2><i>Ingreso de Vehiculo</i></h2>
      <hr>
      <br>

      <vue-form :state="formstate" @submit.prevent="enviar()">
        
        <div class="form-group">
          <label for="tipoDeVehiculo">Tipo de vehículo</label>
          <select class="form-control" id="exampleFormControlSelect1" v-model="formData.tipoDeVehiculo">
          
            <option v-for="(v,index) in vehiculos" :key="index">{{v}}</option>
          </select>
        
        </div>
        <br>
        
        <validate tag="div">
          <label for="patente">Patente</label>
          <input 
            type="text"
            id="patente"
            name="patente" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.patente" 
            required 
            :minlength="patenteMinLength"
            :maxlength="patenteMaxLength"
          />          
          <field-messages name="patente" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
            <div slot="min" class="alert alert-danger mt-1">
              La patente debe ser mínimo de {{patenteMinLength}} caracteres
            </div>
            <div slot="max" class="alert alert-danger mt-1">
               La patente debe ser mínimo de {{patenteMaxLength}} caracteres
            </div>
          </field-messages>
        </validate>
        <br>
        

        <button class="btn btn-success my-3" :disabled="formstate.$invalid" type="submit">Enviar</button>
      </vue-form>
      <br>
      <hr>


    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-ingreso',
    props: [],
    mounted () {

    },
    data () {
      return {
        formstate : {},
        formData : this.getInitialData(),
        gastos : [],
        vehiculos: ["Moto", "Auto","Camioneta"],
        patenteMinLength : 6,
        patenteMaxLength : 7,
      }
    },
    methods: {
      getInitialData() {
        return {
          patente: null,
          tipoDeVehiculo: null
        }
      },
      enviar() {
        let gasto = {...this.formData}
        gasto.fecha = new Date().toLocaleString()

        console.log(gasto)
        this.gastos.push(gasto)

        this.formData = this.getInitialData()
        this.formstate._reset()
        console.log(this.formData)
      },
      analizarSaldo() {
       return 200
      }
    },
    computed: {
    }
}


</script>

<style scoped lang="css">
  .src-componentes-ingreso {

  }

  .jumbotron {
    background-color: #b9dde0;
    color:rgb(32, 31, 107);
    border: 2px inset rgb(0,0,0,0.5);
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
