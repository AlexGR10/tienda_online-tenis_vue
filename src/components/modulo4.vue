<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h3>Categoría</h3>
        <div v-for="categoria in categorias" :key="categoria">
          <input type="checkbox" v-model="categoriasSeleccionadas" :value="categoria"> {{ categoria }}
        </div>
      </div>
      <div class="col-md-4">
        <h3>Color</h3>
        <div v-for="color in colores" :key="color">
          <input type="checkbox" v-model="coloresSeleccionados" :value="color"> {{ color }}
        </div>
      </div>
      <div class="col-md-4">
        <h3>Talla</h3>
        <div v-for="talla in tallas" :key="talla">
          <input type="checkbox" v-model="tallasSeleccionadas" :value="talla"> {{ talla }}
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-12">
        <button class="btn btn-primary" @click="aplicarFiltros">Aplicar Filtros</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categorias: ['Hombre', 'Mujer'],
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
      console.log('Colores seleccionados:', this.coloresSeleccionados);
      console.log('Tallas seleccionadas:', this.tallasSeleccionadas);
    }
  }
};
</script>

<style scoped>
</style>
