<template>
  <div>
    <h2>{{ titulo }}</h2>
    <div class="carrusel">
      <div v-for="producto in productos" :key="producto.id">
        <Modulo3 :producto="producto" />
      </div>
    </div>
    <button @click="anterior" class="btn-navegacion">Anterior</button>
    <button @click="siguiente" class="btn-navegacion">Siguiente</button>
  </div>
</template>

<script>
import Modulo3 from './modulo3.vue'; // Importa el componente del módulo 3

export default {
  components: {
    Modulo3,
  },
  props: {
    titulo: String, // Título del carrusel (puede ser "Ofertas" o "Más vendidos")
    productos: Array, // Array de productos a mostrar en el carrusel
  },
  data() {
    return {
      indiceActual: 0, // Índice del producto actual que se muestra
    };
  },
  methods: {
    anterior() {
      if (this.indiceActual === 0) {
        this.indiceActual = this.productos.length - 1;
      } else {
        this.indiceActual--;
      }
    },
    siguiente() {
      if (this.indiceActual === this.productos.length - 1) {
        this.indiceActual = 0;
      } else {
        this.indiceActual++;
      }
    },
  },
};
</script>

<style scoped>
.carrusel {
  /* Estilos del carrusel */
  display: flex;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
}

.carrusel > div {
  /* Estilos de cada producto en el carrusel */
  margin: 10px;
  flex: 0 0 auto;
}

.btn-navegacion {
  /* Estilos de los botones de navegación */
  margin: 10px;
}
</style>
