<template>
  <div class="container">
    <div class="row">
      <div class="col-md-11">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-6">
              <img :src="producto.imagen" :alt="producto.nombre" class="img-fluid rounded-start" />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title">{{ producto.nombre }}</h5>
                <p class="card-text">
                  <br>
                  Precio: ${{ producto.precio }}
                </p>
                <div class="mb-3">
                  <p>Tallas disponibles:</p>
                  <ul class="list-unstyled">
                    <li>
                      <button class="btn btn-sm btn-outline-secondary" disabled>
                        {{ producto.talla }}
                      </button>
                    </li>
                  </ul>
                </div>
                <!-- Cambiamos el botón por un enlace a modulo8 -->
                <button @click="agregarAlCarrito(producto)" class="btn btn-primary">Agregar al carrito</button>
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
      producto: {}
    };
  },
  created() {
    // Obtener el ID del producto de los parámetros de la URL
    const id = parseInt(this.$route.params.id);

    // Buscar el producto con el ID proporcionado en los parámetros de la URL
    this.producto = productos.find(producto => producto.id === id);
  },
  methods: {
    agregarAlCarrito(producto) {
      // Obtener los productos del carrito del almacenamiento local
      let productosEnCarrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];
      // Agregar el producto al carrito
      productosEnCarrito.push(producto);
      // Guardar los productos actualizados en el almacenamiento local
      localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 5%;
}

.card {
  margin: 20px;
}
</style>
