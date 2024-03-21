<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="$route.params.imagen" :alt="$route.params.nombre" class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ $route.params.nombre }}</h5>
                <p class="card-text">
                  Precio: ${{ $route.params.precio }}
                </p>
                <div class="mb-3">
                  <p>Tallas disponibles:</p>
                  <ul class="list-unstyled">
                    <li>
                      <button class="btn btn-sm btn-outline-secondary" disabled>
                        {{ $route.params.talla }}
                      </button>
                    </li>
                  </ul>
                </div>
                <button class="btn btn-primary mt-3">
                  Agregar al carrito
                </button>
                <hr />
                <h3>Descripción del Producto</h3>
                <p class="card-text">{{ $route.params.descripcion }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>
.card {
  margin: 20px;
}
</style>
