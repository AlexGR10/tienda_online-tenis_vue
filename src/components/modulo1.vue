<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
    <div class="container justify-content-center">
      <router-link to="/modulo2" class="navbar-brand">Kike</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/modulo1" class="btn btn-link nav-link">Hombres</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/modulo2" class="btn btn-link nav-link">2</router-link>
            <router-link to="/modulo4" class="btn btn-link nav-link">4</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/modulo1" class="btn btn-link nav-link">Mujeres</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar">
        </form>
        <router-link to="/modulo8" class="btn btn-primary mx-2 bg-dark">Carrito ({{ carrito.length }})</router-link>
        <router-link to="/modulo5" class="btn btn-primary bg-dark">Iniciar Sesión</router-link>
        <router-link to="/modulo12" class="btn btn-primary mx-2 bg-dark">Perfil</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import carritoData from '/src/assets/carrito.json';

export default {
  name: 'Modulo1',
  data() {
    return {
      carrito: []
    };
  },
  created() {
    this.carrito = carritoData;
  }
};
</script>

<style scoped>
.navbar {
  border: none;
  margin-bottom: 1000px;
}

.navbar-brand {
  margin-right: auto;
  margin-left: auto;
}

.navbar-toggler {
  margin-left: auto;
  margin-right: auto;
}

.navbar-nav {
  margin-left: auto;
  margin-right: auto;
}

.form-inline {
  margin-left: auto;
  margin-right: auto;
}

.form-control {
  width: auto;
}

.btn {
  border-radius: 0;
}

.btn-primary {
  background-color: black;
  color: white;
  border: none; 
}
</style>
