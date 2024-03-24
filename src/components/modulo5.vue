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
                <router-link class="btn btn-primary mt-3" to="/modulo8">
                  Ir al carrito
                </router-link>
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
    // Buscar el producto con ID 1
    this.producto = productos.find(producto => producto.id === 1);
  }
};
</script>

<style scoped>

.container{
  margin-top: 5%;
}

.card {
  margin: 20px;
}
</style>
