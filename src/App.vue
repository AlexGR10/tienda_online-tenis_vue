<template>
  <div id="app">

    <div class="navbar">
      <modulo1></modulo1>
    </div>

    <div class="rutas">
      <router-view></router-view>
    </div>

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

#app {
  min-height: 100vh;
  width: 100%;
  background-color: #d6d0d0; /* Fondo gris */
  text-align: center; /* Centrar el texto */
  position: relative;
  scrollbar-width: none;
  display: flex;
  justify-content: center;
}

.navbar{
  height: 15%;
}

.rutas {
  margin-top: 5%;
  width: 85%;
  height: 80%;
  background-color: rgb(255, 255, 255);
}

</style>
