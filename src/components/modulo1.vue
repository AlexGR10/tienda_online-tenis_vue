<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
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
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/modulo8" class="nav-link">Módulo 8</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/modulo10" class="nav-link">Módulo 10</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/modulo11" class="nav-link">Módulo 11</router-link>
          </li>
        </ul>
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
/* Puedes agregar estilos específicos de la barra de navegación aquí */
</style>
