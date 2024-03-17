<template>
  <div>
    <div class="container">
      <h1>Productos</h1>
      <div class="row">
        <div class="col">
          <div id="productoCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row row-cols-5 g-4">
                  <div class="col" v-for="(producto, index) in primerosCincoProductos" :key="index">
                    <modulo3 :producto="producto" />
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#productoCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#productoCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <h1>En Oferta</h1>
      <div class="row">
        <div class="col">
          <div id="ofertaCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row row-cols-5 g-4">
                  <div class="col" v-for="(producto, index) in productosEnOferta" :key="index">
                    <modulo3 :producto="producto" />
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#ofertaCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#ofertaCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <h1>Los más vendidos</h1>
      <div class="row">
        <div class="col">
          <div id="masVendidosCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row row-cols-5 g-4">
                  <div class="col" v-for="(producto, index) in primerosSeisMasVendidos" :key="index">
                    <modulo3 :producto="producto" />
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#masVendidosCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#masVendidosCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modulo3 from './modulo3.vue';
import productos from '/src/assets/productos.json';

export default {
  components: {
    Modulo3
  },
  data() {
    return {
      // Array de productos
      productos: [],
      // Primeros cinco productos del array
      primerosCincoProductos: [],
      // Productos en oferta
      productosEnOferta: [],
      // Los más vendidos
      primerosSeisMasVendidos: []
    };
  },
  created() {
    // Cargar los productos del JSON
    this.productos = productos;
    
    // Asignar los primeros cinco productos
    this.primerosCincoProductos = this.productos.slice(0, 5);
    
    // Filtrar productos en oferta
    this.productosEnOferta = this.productos.filter(producto => producto.oferta === "si");

    // Ordenar los productos por el número de ventas (supongamos que hay un atributo llamado 'ventas')
    this.productos.sort((a, b) => b.ventas - a.ventas);

    // Seleccionar los primeros seis productos más vendidos
    this.primerosSeisMasVendidos = this.productos.slice(0, 6);
  }
};
</script>
