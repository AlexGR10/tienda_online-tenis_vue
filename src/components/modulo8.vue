<template>
  <h2>Carrito de Compras</h2>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Talla</th>
            <th scope="col">Precio</th>
            <th scope="col">Imagen</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(producto, index) in productosEnCarrito" :key="index">
            <td>{{ producto.nombre }}</td>
            <td>{{ producto.talla }}</td>
            <td>${{ producto.precio.toFixed(2) }}</td>
            <td><img :src="producto.imagen" alt="Producto" style="width: 50px;"></td>
            <td>
              <button @click="eliminarProducto(index)" class="btn btn-danger">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
      <p>Total: ${{ total.toFixed(2) }}</p>
      <router-link to="/modulo10">
        <button class="btn btn-primary mt-3">Proceder a Pagar</button>
      </router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        total: 0,
        productosEnCarrito: [],
      };
    },
    mounted() {
      this.cargarProductos();
    },
    methods: {
      async cargarProductos() {
        try {
          const response = await axios.get('/src/assets/carrito.json');
          this.productosEnCarrito = response.data;
          this.actualizarTotal();
        } catch (error) {
          console.error('Error al cargar los productos', error);
        }
      },
      eliminarProducto(index) {
        this.productosEnCarrito.splice(index, 1);
        this.actualizarTotal();
      },
      actualizarTotal() {
        this.total = this.calcularTotal(this.productosEnCarrito);
      },
      calcularTotal(productos) {
        return productos.reduce((total, producto) => total + producto.precio, 0);
      },
    },
  };
  </script>
  