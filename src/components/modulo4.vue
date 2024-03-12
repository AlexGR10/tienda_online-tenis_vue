<template>
  <div class="Modulo4">
    <h3>Filtrar Búsqueda</h3>
    <div class="categorias">
      <h4>Categoría</h4>
      <div v-for="(categoria, index) in categorias" :key="index" class="categoria">
        <input type="checkbox" :id="'categoria' + index" v-model="categoriasSeleccionadas" :value="categoria">
        <label :for="'categoria' + index">{{ categoria }}</label>
      </div>
    </div>
    <div class="colores">
      <h4>Color</h4>
      <div v-for="(color, index) in colores" :key="index" class="color">
        <input type="checkbox" :id="'color' + index" v-model="coloresSeleccionados" :value="color">
        <label :for="'color' + index">{{ color }}</label>
      </div>
    </div>
    <div class="tallas">
      <h4>Talla</h4>
      <div v-for="(talla, index) in tallas" :key="index" class="talla">
        <input type="checkbox" :id="'talla' + index" v-model="tallasSeleccionadas" :value="talla">
        <label :for="'talla' + index">{{ talla }}</label>
      </div>
    </div>
    <button @click="aplicarFiltros" class="btn btn-primary">Aplicar Filtros</button>
  </div>
</template>

<script>
export default {
  name: 'Modulo4',
  data() {
    return {
      categorias: ['Hombre', 'Mujer'],
      colores: ['Rojo', 'Azul', 'Verde', 'Negro', 'Blanco'],
      tallas: ['20', '21', '22', '23', '24', '25','26','27','28','29'],
      categoriasSeleccionadas: [],
      coloresSeleccionados: [],
      tallasSeleccionadas: []
    };
  },
  methods: {
    aplicarFiltros() {
      this.$emit('aplicar-filtros', {
        categorias: this.categoriasSeleccionadas,
        colores: this.coloresSeleccionados,
        tallas: this.tallasSeleccionadas
      });
    }
  }
}
</script>

<style scoped>
.Modulo4 {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
}

.categorias,
.colores,
.tallas {
  margin-bottom: 10px;
}

.categoria,
.color,
.talla {
  margin-bottom: 5px;
}
</style>
