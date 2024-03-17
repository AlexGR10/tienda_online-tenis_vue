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
                <form @submit.prevent="agregarEditarProducto">
                  <h3>Agregar/Editar Producto</h3>
                  <div class="form-group">
                    <label for="nombre">Nombre del producto:</label>
                    <input type="text" class="form-control" id="nombre" v-model="nuevoProducto.nombre" />
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
                    <select class="form-control" id="color" v-model="nuevoProducto.color">
                      <option value="">Selecciona un color</option>
                      <option value="Azul">Azul</option>
                      <option value="Rojo">Rojo</option>
                      <option value="Verde">Verde</option>
                      <option value="Negro">Negro</option>
                      <option value="Blanco">Blanco</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="categoria">Categoría del producto:</label>
                    <select class="form-control" id="categoria" v-model="nuevoProducto.categoria">
                      <option value="">Selecciona una categoria</option>
                      <option value="Mujer">Mujer</option>
                      <option value="Hombre">Hombre</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="ventas">Ventas del producto:</label>
                    <input type="number" class="form-control" id="ventas" v-model="nuevoProducto.ventas" />
                  </div>
                  <div class="form-group">
                    <label for="estado">Estado del producto:</label>
                    <select class="form-control" id="estado" v-model="nuevoProducto.estado">
                      <option value="">Selecciona un estado</option>
                      <option value="Activo">Activo</option>
                      <option value="Agotado">Agotado</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="descripcion">Descripción del producto:</label>
                    <textarea class="form-control" id="descripcion" v-model="nuevoProducto.descripcion"></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">{{ editIndex === '' ? 'Agregar Producto' : 'Editar Producto' }}</button>
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
                    <tr v-for="(producto, index) in productos" :key="index">
                      <td>{{ producto.nombre }}</td>
                      <td>{{ producto.precio }}</td>
                      <td>{{ producto.talla }}</td>
                      <td>{{ producto.oferta }}</td>
                      <td>{{ producto.color }}</td>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
        estado: 'existencia',
        categoria: ''
      },
      editIndex: ''
    };
  },
  methods: {
    agregarEditarProducto() {
      if (this.editIndex === '') {
        // Agregar nuevo producto
        this.productos.push({...this.nuevoProducto});
      } else {
        // Editar producto existente
        this.productos[this.editIndex] = {...this.nuevoProducto};
        this.editIndex = ''; // Limpiar editIndex después de editar
      }
      // Limpiar formulario
      this.limpiarFormulario();
    },
    editarProducto(index) {
      // Rellenar formulario con datos del producto seleccionado
      this.nuevoProducto = {...this.productos[index]};
      this.editIndex = index;
    },
    eliminarProducto(index) {
      // Eliminar producto de la lista
      this.productos.splice(index, 1);
      // Limpiar formulario si estaba editando ese producto
      if (index == this.editIndex) {
        this.limpiarFormulario();
      }
    },
    limpiarFormulario() {
      // Limpiar formulario
      this.nuevoProducto = {
        id: '',
        nombre: '',
        descripcion: '',
        precio: 0,
        talla: '',
        imagen: '',
        oferta: 'no',
        color: '',
        ventas: 0,
        estado: 'existencia',
        categoria: ''
      };
    }
  }
};
</script>

<style scoped>
.productos-lista {
  display: flex;
  flex-direction: column;
}

.productos-scroll {
  overflow-y: auto;
  max-height: 100%;
}

@media (max-width: 991.98px) {
  .productos-scroll {
    max-height: none;
  }
}
</style>