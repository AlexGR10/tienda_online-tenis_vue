<template>
  <div id="app">
    <modulo1></modulo1> <!-- Mueve el componente Modulo1 aquí -->
    <router-view></router-view>
  </div>
</template>

<script>
import modulo1 from './components/modulo1.vue';

export default {
  components: {
    modulo1,
  }
};
</script>

<style scoped>

  div{
    background-color:gray;
    padding-top:5%;
  }

</style>

