<template>
  <div>
    <!-- Navegación entre pestañas -->
    <div>
      <button @click="currentTab = 'login'">Iniciar Sesión</button>
      <button @click="currentTab = 'signup'">Crear Cuenta</button>
    </div>
    
    <!-- Formulario de inicio de sesión -->
    <div v-if="currentTab === 'login'">
      <h2>Iniciar Sesión</h2>
      <form class="login-form" @submit.prevent="login">
        <div>
          <label for="username">Usuario o Correo Electrónico:</label>
          <input type="text" id="username" v-model="loginData.username" required>
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="loginData.password" required>
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>

    <!-- Formulario de creación de cuenta -->
    <div v-if="currentTab === 'signup'">
      <h2>Crear Cuenta</h2>
      <form class="signup-form" @submit.prevent="signup">
        <div>
          <label for="newUsername">Nombre de Usuario:</label>
          <input type="text" id="newUsername" v-model="signupData.username" required>
        </div>
        <div>
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" v-model="signupData.email" required>
        </div>
        <div>
          <label for="newPassword">Contraseña:</label>
          <input type="password" id="newPassword" v-model="signupData.password" required>
        </div>
        <div>
          <label for="confirmPassword">Confirmar Contraseña:</label>
          <input type="password" id="confirmPassword" v-model="signupData.confirmPassword" required>
        </div>
        <button type="submit">Crear Cuenta</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 'login',
      loginData: {
        username: '',
        password: ''
      },
      signupData: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    };
  },
  methods: {
    login() {
      // Aquí puedes implementar la lógica para iniciar sesión
      // Utilizando this.loginData.username y this.loginData.password
    },
    signup() {
      // Aquí puedes implementar la lógica para crear una nueva cuenta
      // Utilizando this.signupData.username, this.signupData.email, this.signupData.password y this.signupData.confirmPassword
    }
  }
};
</script>

<style>
form {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="email"], input[type="password"], input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
}

input[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
</style>
