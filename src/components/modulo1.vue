<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
          <!-- Botones de Categoría -->
          <li class="nav-item">
            <router-link to="/modulo1" class="btn btn-link nav-link">Hombres</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/modulo1" class="btn btn-link nav-link">Mujeres</router-link>
          </li>
        </ul>
        <!-- Barra de Búsqueda -->
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search"></i></button>
        </form>
        <!-- Carrito de Compras -->
        <router-link to="/modulo8" class="btn btn-primary mx-2">Carrito (0)</router-link> <!-- Aquí deberías manejar dinámicamente el número de productos en el carrito -->
        <!-- Sesión -->
        <router-link to="/modulo5" class="btn btn-primary">Iniciar Sesión</router-link>
        <!-- Perfil de Usuario -->
        <router-link to="/modulo12" class="btn btn-primary mx-2">Perfil</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Modulo1',
};
</script>

<style scoped>
.navbar {
  border: none;
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
</style>