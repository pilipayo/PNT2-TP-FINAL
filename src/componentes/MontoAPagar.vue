<template>

  <section class="src-componentes-monto-a-pagar">
    <div>
      <h2>El monto a pagar es: $ {{ monto | toFixed }}</h2>

    </div>
  </section>

</template>

<script lang="js">

export default {
  name: 'src-componentes-monto-a-pagar',
  props: ['monto'],
  mounted() {

  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}


</script>

<style scoped lang="css">
</style>
