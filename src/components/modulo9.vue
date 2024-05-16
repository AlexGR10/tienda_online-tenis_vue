<template>
  <div>
    <table class="table table-bordered table-hover">
      <!-- Encabezados de la tabla -->
      <thead>
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
        <!-- Filas de la tabla para productos de localStorage -->
        <tr v-for="(producto, index) in productosEnCarritoLocal" :key="'local-' + index">
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
export default {
  data() {
    return {
      productosEnCarritoLocal: [], // Almacena productos del almacenamiento local
    };
  },
  mounted() {
    // Cargar los productos del carrito del almacenamiento local cada vez que se monte el componente
    this.cargarProductosEnCarritoLocal();
  },
  methods: {
    cargarProductosEnCarritoLocal() {
      // Recuperar los productos del carrito del almacenamiento local
      const productosEnCarritoLocal = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];
      // Asignarlos a la variable de datos
      this.productosEnCarritoLocal = productosEnCarritoLocal;
    },
    eliminarProducto(index) {
      // Eliminar producto del arreglo productosEnCarritoLocal
      this.productosEnCarritoLocal.splice(index, 1);
      // Actualizar el almacenamiento local
      localStorage.setItem('productosEnCarrito', JSON.stringify(this.productosEnCarritoLocal));
    },
  },
};
</script>
