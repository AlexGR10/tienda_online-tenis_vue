<template>
  <div class="producto">
    <img :src="product.imagen" :alt="product.nombre" class="imagen-producto">
    <div class="detalles">
      <h3>{{ product.nombre }}</h3>
      <p class="precio">{{ product.precio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modulo3',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.producto {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

.imagen-producto {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
}

.detalles {
  flex: 1;
}

.precio {
  font-weight: bold;
}
</style>
  