<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <img :src="producto.imagen" :alt="producto.nombre" class="card-img-top" />
          <div class="card-body">
            <h2 class="card-title">{{ producto.nombre }}</h2>
            <p class="card-text">Precio: ${{ producto.precio }}</p>
            <span v-if="producto.oferta">
              <span class="badge bg-danger">(-{{ producto.oferta }}%)</span>
            </span>
            <p class="card-text">{{ producto.descripcion }}</p>
            <div class="mb-3">
              <p>Colores disponibles:</p>
              <ul class="list-unstyled">
                <li v-for="color in producto.colores" :key="color">
                  <button
                    :class="{ active: producto.color === color }"
                    @click="cambiarColor(color)"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    {{ color }}
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <p>Tallas disponibles:</p>
              <ul class="list-unstyled">
                <li v-for="talla in producto.tallas" :key="talla">
                  <button
                    :class="{ active: producto.talla === talla }"
                    @click="cambiarTalla(talla)"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    {{ talla }}
                  </button>
                </li>
              </ul>
            </div>
            <button class="btn btn-primary mt-3" @click="agregarAlCarrito">
              Agregar al carrito
            </button>
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
      producto: {}, // Aquí se almacenará la información del producto actual
      productos: productos // Aquí se cargan los productos desde productos.json
    };
  },
  mounted() {
    // Se carga la información del primer producto al cargar el componente
    this.cargarProducto();
  },
  methods: {
    cargarProducto() {
      try {
        // Se carga el primer producto del array productos
        this.producto = this.productos[1];
      } catch (error) {
        console.error('Error al cargar el producto', error);
      }
    },
    cambiarColor(color) {
      this.producto.color = color;
    },
    cambiarTalla(talla) {
      this.producto.talla = talla;
    },
    agregarAlCarrito() {
      // Aquí puedes implementar la lógica para agregar el producto al carrito
      console.log('Producto agregado al carrito:', this.producto);
    },
  },
};
</script>

<style>
.card {
  margin: 20px;
}
</style>
