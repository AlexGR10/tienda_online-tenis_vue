<template>
  <router-link class="card" to="/modulo5">
    <div class="card-img-container">
      <img :src="producto.imagen" :alt="producto.nombre" class="card-img" />
    </div>
    <div class="card-body">
      <h2 class="card-title">{{ truncate(producto.nombre, 20) }}</h2>
      <p class="card-text">${{ producto.precio.toFixed(2) }}</p>
      <p class="card-text">Talla: {{ producto.talla }}</p>
      <button class="btn btn-primary">
        Ver más
      </button>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    producto: {
      type: Object,
      required: true
    }
  },
  methods: {
    truncate(text, length) {
      if (text.length > length) {
        return text.substring(0, length) + '...';
      }
      return text;
    }
  }
};
</script>

<style>
.card {
  width: 100%;
  height: 90%;
  text-decoration: none; /* Quitar subrayado de enlace */
  color: inherit; /* Mantener color de texto predeterminado */
}

/* Estilos para la imagen del producto */
.card-img-container {
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
}

.card-img {
  /* Asegura que la imagen siempre llene el contenedor */
  width: 100%;
  height: auto;
  /* Centra la imagen verticalmente */
  position: absolute;
  top: 0;
  left: 0;
}

/* Otros estilos para el cuerpo de la tarjeta */
.card-body {
  /* Puedes ajustar estos estilos según tus necesidades */
}

.card-title,
.card-text {
  /* Ajusta el tamaño de fuente para que sea responsive */
  font-size: 1rem;
}
</style>
