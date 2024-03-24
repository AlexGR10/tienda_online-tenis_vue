<template>
  <div class="container">
    <div class="filtro-container">
      <div class="filtro-item">
        <h3>Categoría</h3>
        <div v-for="categoria in categorias" :key="categoria">
          <input type="checkbox" v-model="categoriasSeleccionadas" :value="categoria">
          {{ categoria }}
        </div>
      </div>

      <div class="filtro-item">
        <h3>Color</h3>
        <div v-for="color in colores" :key="color">
          <input type="checkbox" v-model="coloresSeleccionados" :value="color">
          {{ color }}
        </div>
      </div>

      <div class="filtro-item">
        <h3>Talla</h3>
        <div v-for="talla in tallas" :key="talla">
          <input type="checkbox" v-model="tallasSeleccionadas" :value="talla">
          {{ talla }}
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-md-12">
        <button class="btn btn-primary me-2" @click="aplicarFiltros">Aplicar Filtros</button>
        <button class="btn btn-secondary" @click="limpiarFiltros">Limpiar Filtros</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categorias: ['hombre', 'mujer'],
      colores: ['Rojo', 'Azul', 'Verde', 'Amarillo'],
      tallas: ['20', '21', '22', '23'],
      categoriasSeleccionadas: [],
      coloresSeleccionados: [],
      tallasSeleccionadas: []
    };
  },
  methods: {
    aplicarFiltros() {
      // Aquí implementa la lógica para aplicar los filtros
      // Puedes usar las selecciones almacenadas en categoriasSeleccionadas, coloresSeleccionados y tallasSeleccionadas
      console.log('Categorías seleccionadas:', this.categoriasSeleccionadas);
      console.log('Colores seleccionados:', this.coloresSeleccionadas);
      console.log('Tallas seleccionadas:', this.tallasSeleccionadas);
    },
    limpiarFiltros() {
      // Método para limpiar los filtros
      this.categoriasSeleccionadas = [];
      this.coloresSeleccionados = [];
      this.tallasSeleccionadas = [];
    }
  }
};
</script>

<style>
.filtro-container {
  display: flex;
  flex-direction: column; /* Cambiamos la dirección a vertical */
  border: 1px solid #ccc; /* Borde gris */
  border-radius: 10px; /* Bordes circulares */
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1); /* Sombreado */
}

.filtro-item {
  padding: 10px;
  border-bottom: 1px solid #ddd; /* Agregamos un borde inferior a cada item */
}
</style>