<template>
  <div>

    <div class="caja_slider">
    <div class="slider">
      <ul>
        <li><img src="/src/assets/img/slide1.webp" alt="..."></li>
        <li><img src="/src/assets/img/slide2.webp" alt="..."></li>
        <li><img src="/src/assets/img/slide3.webp" alt="..."></li>
      </ul>
    </div>
    <div class="slider">
      <ul>
        <li><img src="/src/assets/img/slide4.webp" alt="..."></li>
        <li><img src="/src/assets/img/slide5.webp" alt="..."></li>
        <li><img src="/src/assets/img/slide6.webp" alt="..."></li>
      </ul>
    </div>
    <div class="slider">
      <ul>
        <li><img src="/src/assets/img/slide7.webp" alt="..."></li>
        <li><img src="/src/assets/img/slide8.webp" alt="..."></li>
        <li><img src="/src/assets/img/slide9.webp" alt="..."></li>
      </ul>
    </div>
  </div>

    <div class="container">
      <h1>Productos Principales</h1>
      <div id="productosCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row row-cols-4 g-4">
              <div class="col" v-for="(producto, index) in primerosCincoProductos" :key="index">
                <modulo3 :producto="producto" />
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#productosCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#productosCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div class="container mt-5">
      <h1>En Oferta</h1>
      <div id="ofertaCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row row-cols-4 g-4">
              <div class="col" v-for="(producto, index) in primerosCuatroProductosEnOferta" :key="index">
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

    <div class="container mt-5">
      <h1>Los más vendidos</h1>
      <div id="masVendidosCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row row-cols-4 g-4">
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
  computed: {
    primerosCuatroProductosEnOferta() {
      return this.productosEnOferta.slice(0, 4);
    }
  },
  created() {
    // Cargar los productos del JSON
    this.productos = productos;

    // Asignar los primeros cinco productos
    this.primerosCincoProductos = this.productos.slice(0, 4);

    // Filtrar productos en oferta
    this.productosEnOferta = this.productos.filter(producto => producto.oferta === "si");

    // Ordenar los productos por el número de ventas (supongamos que hay un atributo llamado 'ventas')
    this.productos.sort((a, b) => b.ventas - a.ventas);

    // Seleccionar los primeros seis productos más vendidos
    this.primerosSeisMasVendidos = this.productos.slice(0, 4);
  }
};
</script>

<style scoped>

.caja_slider{
    margin: 5%;
    display: flex;
    justify-content: space-around;
}

/*slider*/
.slider{
    padding-top: 0px;
    width: 600px;
    margin: auto;
    overflow: hidden;
}
.slider ul{
    display:flex;
    padding: 0;
    width: 300%;
    animation: cambio 15s infinite;
    animation-direction: alternate;
    animation-timing-function:linear;
}
.slider li{
    list-style: none;
    width: 100%;
}
.slider img{
    width: 100%;
}

@keyframes cambio{
    0%{margin-left: 0;}
    30%{margin-left:0;}

    35%{margin-left: -100%;}
    65%{margin-left: -100%;}

    70%{margin-left: -200%;}
    100%{margin-left: -200%;}
}
</style>