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
import axios from 'axios';

export default {
  components: {
    modulo1,
  },
  mounted() {
    this.cargarDatosAlLocalStorage();
  },
  methods: {
    async cargarDatosAlLocalStorage() {
      try {
        // Obtener los productos del archivo carrito.json
        const responseCarrito = await axios.get('/src/assets/carrito.json');
        const productosCarrito = responseCarrito.data;
        // Guardar los productos del carrito en el almacenamiento local
        localStorage.setItem('productosEnCarrito', JSON.stringify(productosCarrito));

        // Obtener los pedidos del archivo pedidos.json
        const responsePedidos = await axios.get('/src/assets/pedidos.json');
        const pedidos = responsePedidos.data;
        // Guardar los pedidos en el almacenamiento local
        localStorage.setItem('pedidos', JSON.stringify(pedidos));
      } catch (error) {
        console.error('Error al cargar los datos desde los archivos JSON:', error);
      }
    },
  },
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

.navbar {
  height: 15%;
}

.rutas {
  margin-top: 5%;
  width: 85%;
  height: 80%;
  background-color: rgb(255, 255, 255);
}
</style>
