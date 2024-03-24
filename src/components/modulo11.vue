<template>
  <div class="container">
    <!-- Sección de Información Personal -->
    <div class="row">
      <div class="col-md-6">
        <h2>Información Personal</h2>
        <form @submit.prevent="guardarCambios">
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre:</label>
            <input type="text" v-model="nombre" id="nombre" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="correo" class="form-label">Correo Electrónico:</label>
            <input type="email" v-model="correo" id="correo" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="contrasena" class="form-label">Contraseña:</label>
            <input type="password" v-model="contrasena" id="contrasena" class="form-control" required>
          </div>
          <router-link to="/modulo6" class="btn btn-secondary">Administrador</router-link>
          <button type="submit" class="btn btn-primary">Guardar Cambios</button>
        </form>
      </div>
    </div>

    <!-- Sección de Pedidos -->
    <div class="row mt-5">
      <div class="col-md-12">
        <modulo12 :historialPedidos="historialPedidos" />
      </div>
    </div>
  </div>
</template>

<script>
import Modulo12 from './modulo12.vue'; // Importa el componente Modulo12
import axios from 'axios';

export default {
  components: {
    Modulo12
  },
  data() {
    return {
      nombre: '', // Nombre del usuario
      correo: '', // Correo electrónico del usuario
      contrasena: '', // Contraseña del usuario
      historialPedidos: [] // Historial de pedidos del usuario
    };
  },
  mounted() {
    this.cargarInformacionPersonal();
    this.cargarHistorialPedidos();
  },
  methods: {
    async cargarInformacionPersonal() {
  try {
    // Simulación de carga de información personal desde el servidor
    const response = await axios.get('/src/assets/usuario.json');
    const data = response.data;
    const primerCliente = data.find(usuario => usuario.tipo === 'cliente');
    if (primerCliente) {
      this.nombre = primerCliente.nombre;
      this.correo = primerCliente.correo;
      this.contrasena = primerCliente.contraseña;
    }
  } catch (error) {
    console.error('Error al cargar la información personal', error);
  }
},

    async cargarHistorialPedidos() {
      try {
        // Simulación de carga del historial de pedidos desde el servidor
        const response = await axios.get('/api/pedidos');
        this.historialPedidos = response.data;
      } catch (error) {
        console.error('Error al cargar el historial de pedidos', error);
      }
    },
    async guardarCambios() {
  try {
    // Obtener el ID del usuario que está siendo editado (simplemente tomaremos el primer cliente)
    const response = await axios.get('/src/assets/usuarios.json');
    const usuarios = response.data;
    const primerCliente = usuarios.find(usuario => usuario.tipo === 'cliente');
    const idUsuario = primerCliente.id; // Aquí asumimos que el primer cliente tiene el ID que necesitamos

    // Construir el objeto con los datos del usuario
    const usuarioActualizado = {
      id: idUsuario,
      nombre: this.nombre,
      correo: this.correo,
      contraseña: this.contrasena, // No se recomienda enviar la contraseña de esta manera, es solo un ejemplo
      tipo: 'cliente' // Mantenemos el mismo tipo de usuario
    };

    // Actualizar los datos del usuario en el JSON
    await axios.put(`/src/assets/usuarios.json'/${idUsuario}`, usuarioActualizado);

    console.log('Cambios guardados exitosamente.');
  } catch (error) {
    console.error('Error al guardar los cambios:', error);
  }
}
  }
};
</script>

<style scoped>
  .container{
    margin-top: 5%;
  }
  .row{
    display: flex;
    justify-content: center;
  }
</style>
