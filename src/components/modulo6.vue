<template>
  <div class="container">
    <!-- Botón para ir al módulo 8 -->
    <div class="row mt-3">
      <div class="col-md-12">
        <router-link to="/modulo11" class="btn btn-primary me-2">Regresar al Perfil</router-link>
      </div>
    </div>

    <!-- Tabla de productos -->
    <div class="row mt-3">
      <div class="col-md-12">
        <h3>Lista de Productos</h3>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(producto, index) in productos" :key="index">
              <td>{{ producto.id }}</td>
              <td>{{ producto.nombre }}</td>
              <td>
                <button @click="editarProducto(index)" class="btn btn-sm btn-info">Editar</button>
                <button @click="eliminarProducto(index)" class="btn btn-sm btn-danger">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import productos from '/src/assets/productos.json'; // Importa el archivo JSON de productos

export default {
  data() {
    return {
      productos: productos // Asigna los productos al arreglo productos
    };
  },
  methods: {
    // Métodos para editar y eliminar productos
    editarProducto(index) {
      // Lógica para editar un producto
    },
    eliminarProducto(index) {
      // Lógica para eliminar un producto
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 5%;
}
</style>
