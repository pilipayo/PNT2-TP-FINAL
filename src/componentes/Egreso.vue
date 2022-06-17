<template>

  <section class="src-componentes-egreso">
    <div class="jumbotron">
      <h2><i>Egreso de Vehiculo</i></h2>
      <hr>
      <br>

      <vue-form :state="formstate" @submit.prevent="enviar()">
        
        
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" v-model="formData.nombre" required name="nombre" autocomplete="off" class="form-control" />
    
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
          </field-messages>
        </validate>
        <br>

        
        <validate tag="div">
          <label for="patente">Patente</label>
          <input type="text" id="patente" v-model="formData.patente" required name="patente" autocomplete="off" class="form-control" />
    
          <field-messages name="patente" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
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
        gastos : []
      }
    },
    methods: {
      getInitialData() {
        return {
          nombre : null,
          dni: null,
          deuda: null,
          pago: null
        }
      },
      enviar() {
        let gasto = {...this.formData}
        gasto.fecha = new Date().toLocaleString()

        console.log(gasto)
        this.gastos.push(gasto)

        this.formData = this.getInitialData()
        this.formstate._reset()
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
