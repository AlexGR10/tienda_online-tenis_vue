<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h2>Administrar Productos</h2>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <form @submit.prevent="agregarProducto">
                  <h3>Agregar Producto</h3>
                  <div class="form-group">
                    <label for="nombre">Nombre del producto:</label>
                    <input type="text" class="form-control" id="nombre" v-model="nuevoProducto.nombre" />
                  </div>
                  <div class="form-group">
                    <label for="descripcion">Descripción del producto:</label>
                    <textarea class="form-control" id="descripcion" v-model="nuevoProducto.descripcion"></textarea>
                  </div>
                  <div class="form-group">
                    <label for="precio">Precio del producto:</label>
                    <input type="number" class="form-control" id="precio" v-model="nuevoProducto.precio" />
                  </div>
                  <div class="form-group">
                    <label for="talla">Talla del producto:</label>
                    <select class="form-control" id="talla" v-model="nuevoProducto.talla">
                      <option value="">Selecciona una talla</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="imagen">Imagen del producto:</label>
                    <input type="file" class="form-control-file" id="imagen" />
                  </div>
                  <div class="form-group">
                    <label for="oferta">Oferta del producto:</label>
                    <select class="form-control" id="oferta" v-model="nuevoProducto.oferta">
                      <option value="no">No</option>
                      <option value="10">10%</option>
                      <option value="20">20%</option>
                      <option value="30">30%</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="color">Color del producto:</label>
                    <input type="text" class="form-control" id="color" v-model="nuevoProducto.color" />
                  </div>
                  <button type="submit" class="btn btn-primary">Agregar Producto</button>
                </form>
              </div>
              <div class="col-md-6">
                <h3>Lista de Productos</h3>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Talla</th>
                      <th>Oferta</th>
                      <th>Color</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="producto in productos" :key="producto.id">
                      <td>{{ producto.nombre }}</td>
                      <td>${{ producto.precio }}</td>
                      <td>{{ producto.talla }}</td>
                      <td>
                        <span v-if="producto.oferta > 0">{{ producto.oferta }}%</span>
                      </td>
                      <td>{{ producto.color }}</td>
                      <td>
                        <button @click="editarProducto(producto)" class="btn btn-sm btn-info">Editar</button>
                        <button @click="eliminarProducto(producto.id)" class="btn btn-sm btn-danger">Eliminar</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import productos from '/src/assets/productos.json';

export default {
  data() {
    return {
      productos: productos,
      nuevoProducto: {
        id: '',
        nombre: '',
        descripcion: '',
        precio: 0,
        talla: '',
        imagen: '',
        oferta: 'no',
        color: '',
        ventas: 0,
        estado: 'existencia'
      },
      productoEditado: null
    };
  },
  methods: {
    async agregarProducto() {
      try {
        // Aquí agregas la lógica para agregar el nuevo producto a la lista de productos
        // Puedes usar this.nuevoProducto para acceder a los datos del nuevo producto
        console.log('Producto agregado:', this.nuevoProducto);
      } catch (error) {
        console.error('Error al agregar el producto:', error);
      }
    },
    editarProducto(producto) {
      // Aquí puedes implementar la lógica para editar un producto existente
      // Puedes usar this.productoEditado para almacenar temporalmente el producto seleccionado para editar
      this.productoEditado = producto;
      console.log('Editar producto:', producto);
    },
    async eliminarProducto(id) {
      try {
        // Aquí agregas la lógica para eliminar un producto de la lista de productos
        console.log('Eliminar producto con ID:', id);
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Estilos CSS específicos para este componente */
</style>
