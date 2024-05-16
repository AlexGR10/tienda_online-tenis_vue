<template>
  <div class="container">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 0,
      productosEnCarrito: [],
    };
  },
  mounted() {
    this.cargarProductosDesdeLocalStorage();
  },
  methods: {
    cargarProductosDesdeLocalStorage() {
      // Recuperar los productos del carrito del almacenamiento local
      const productosEnCarrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];
      // Asignarlos a la variable de datos
      this.productosEnCarrito = productosEnCarrito;
      // Actualizar el total
      this.actualizarTotal();
    },
    eliminarProducto(index) {
      // Eliminar producto del arreglo productosEnCarrito
      this.productosEnCarrito.splice(index, 1);
      // Actualizar el almacenamiento local
      localStorage.setItem('productosEnCarrito', JSON.stringify(this.productosEnCarrito));
      // Actualizar el total
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

<style scoped>
.container {
  margin-top: 5%;
}
</style>
