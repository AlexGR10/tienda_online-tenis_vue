<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="producto.imagen" :alt="producto.nombre" class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ producto.nombre }}</h5>
                <p class="card-text">
                  Precio: ${{ producto.precio }}
                  <span v-if="producto.oferta">
                    <span class="badge bg-danger">(-{{ producto.oferta }}%)</span>
                  </span>
                </p>
                <div class="mb-3">
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
                <hr />
                <h3>Descripción del Producto</h3>
                <p class="card-text">{{ producto.descripcion }}</p>
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
      producto: {}, // Aquí se almacenará la información del producto actual
      productos: productos // Aquí se cargan los productos desde productos.json
    };
  },
  mounted() {
    // Se carga la información del producto al cargar el componente
    this.cargarProducto();
  },
  methods: {
    cargarProducto() {
      try {
        // Se carga el producto correspondiente al ID proporcionado
        const id = this.$route.params.id;
        this.producto = this.productos.find(producto => producto.id === parseInt(id));
      } catch (error) {
        console.error('Error al cargar el producto', error);
      }
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
