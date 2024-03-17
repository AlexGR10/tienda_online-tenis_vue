<template>
  <div class="card">
    <!-- Imagen del Producto -->
    <img :src="producto.imagen" :alt="producto.nombre" class="card-img-top" />
    <div class="card-body">
      <!-- Nombre del Producto -->
      <h2 class="card-title">{{ producto.nombre}}</h2>

      <!-- Precio del Producto -->
      <p class="card-text">Precio: ${{ producto.precio }}</p>

      <!-- Talla del Producto -->
      <p class="card-text">Talla:{{ producto.talla }}</p>

      <!-- Botón para agregar al carrito -->
      <button class="btn btn-primary">
        Agregar al carrito
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Propiedades del Producto
    producto: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
/* Estilos opcionales para el componente */
.card {
  margin: 20px;
}
</style>
