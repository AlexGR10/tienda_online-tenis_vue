<template>
  <div>
    <h2>Carrito de Compras</h2>
    <table class="table table-bordered table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Categoría</th>
          <th scope="col">Talla</th>
          <th scope="col">Precio</th>
          <th scope="col">Imagen</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(producto, index) in productosEnCarrito" :key="index">
          <td>{{ producto.nombre }}</td>
          <td>{{ producto.categoria }}</td>
          <td>{{ producto.talla }}</td>
          <td>${{ producto.precio }}</td>
          <td><img :src="producto.imagen" alt="Producto" style="width: 50px;"></td>
          <td>
            <button @click="eliminarProducto(index)" class="btn btn-danger">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      productosEnCarrito: [], // Aquí se almacenarán los productos del carrito de compras
    };
  },
  mounted() {
    this.cargarProductosEnCarrito();
  },
  methods: {
    async cargarProductosEnCarrito() {
      try {
        const response = await axios.get('/src/assets/carrito.json');
        this.productosEnCarrito = response.data;
      } catch (error) {
        console.error('Error al cargar los productos del carrito de compras', error);
      }
    },
    eliminarProducto(index) {
      this.productosEnCarrito.splice(index, 1);
    },
  },
};
</script>
