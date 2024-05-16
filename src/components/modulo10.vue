<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Formulario de Pago</h2>

        <!-- Formulario de Datos de la Tarjeta -->
        <form>
          <div class="mb-3">
            <label for="numeroTarjeta" class="form-label">Número de Tarjeta</label>
            <input type="text" class="form-control" id="numeroTarjeta" placeholder="Ingrese el número de tarjeta" v-model="numeroTarjeta">
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="fechaVencimiento" class="form-label">Fecha de Vencimiento</label>
              <select class="form-select" aria-label="Mes" v-model="mesVencimiento">
                <option selected>Mes...</option>
                <option v-for="mes in meses" :key="mes">{{ mes }}</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="fechaVencimiento" class="form-label">&nbsp;</label>
              <select class="form-select" aria-label="Año" v-model="anoVencimiento">
                <option selected>Año...</option>
                <option v-for="ano in anos" :key="ano">{{ ano }}</option>
              </select>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cvv" placeholder="Ingrese el código de seguridad" v-model="cvv">
            </div>
          </div>

          <!-- Formulario de Dirección de Envío -->
          <h3 class="mt-4">Dirección de Envío</h3>
          <div class="mb-3">
            <label for="calle" class="form-label">Calle</label>
            <input type="text" class="form-control" id="calle" placeholder="Ingrese la calle" v-model="calle">
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="numero" class="form-label">Número</label>
              <input type="text" class="form-control" id="numero" placeholder="Ingrese el número" v-model="numero">
            </div>
            <div class="col-md-6">
              <label for="codigoPostal" class="form-label">Código Postal</label>
              <input type="text" class="form-control" id="codigoPostal" placeholder="Ingrese el código postal" v-model="codigoPostal">
            </div>
          </div>

          <!-- Botón de Pagar -->
          <button type="button" @click="procesarPago" class="btn btn-primary">Pagar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numeroTarjeta: '',
      mesVencimiento: '',
      anoVencimiento: '',
      cvv: '',
      calle: '',
      numero: '',
      codigoPostal: '',
      meses: Array.from({ length: 12 }, (_, i) => i + 1),
      anos: Array.from({ length: 13 }, (_, i) => new Date().getFullYear() + i),
    };
  },
  methods: {
    procesarPago() {
      // Validar los campos
      if (!this.validarCampos()) {
        return;
      }

      // Formatear el número de tarjeta sin guiones
      const numeroTarjetaFormateado = this.numeroTarjeta.replace(/-/g, '');

      // Crear un nuevo pedido con los elementos del carrito almacenados en localStorage
      const carrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];
      const pedido = {
        numeroPedido: `00${new Date().getTime()}`, // Genera un número de pedido único
        productos: carrito.map(producto => ({ nombre: producto.nombre, cantidad: 1 })), // Por defecto, cada producto tiene una cantidad de 1
        totalPago: carrito.reduce((total, producto) => total + producto.precio, 0), // Calcula el total de pago sumando los precios de los productos
        estatusEnvio: 'En proceso', // Por defecto, el estatus de envío es 'En proceso'
      };

      // Guardar el pedido en el localStorage
      const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
      pedidos.push(pedido);
      localStorage.setItem('pedidos', JSON.stringify(pedidos));

      // Vaciar el carrito
      localStorage.removeItem('productosEnCarrito');

      // Redirigir al módulo11
      this.$router.push('/modulo11');
    },
    validarCampos() {
      // Validar que todos los campos estén completos
      if (
        !this.numeroTarjeta ||
        !this.mesVencimiento ||
        !this.anoVencimiento ||
        !this.cvv ||
        !this.calle ||
        !this.numero ||
        !this.codigoPostal
      ) {
        alert('Por favor, complete todos los campos.');
        return false;
      }

      // Validar el formato del número de tarjeta
      const regexNumerico = /^[0-9]*$/;
      if (!regexNumerico.test(this.numeroTarjeta.replace(/-/g, ''))) {
        alert('El número de tarjeta solo puede contener caracteres numéricos.');
        return false;
      }

      // Validar la longitud del número de tarjeta
      if (this.numeroTarjeta.replace(/-/g, '').length !== 16) {
        alert('El número de tarjeta debe tener 16 caracteres.');
        return false;
      }

      // Validar el formato del mes de vencimiento
      if (!this.meses.includes(Number(this.mesVencimiento))) {
        alert('Seleccione un mes de vencimiento válido.');
        return false;
      }

      // Validar el formato del año de vencimiento
      const anoActual = new Date().getFullYear();
      if (!this.anos.includes(Number(this.anoVencimiento)) || Number(this.anoVencimiento) < anoActual || Number(this.anoVencimiento) > anoActual + 12) {
        alert('Seleccione un año de vencimiento válido.');
        return false;
      }

      // Validar el formato del CVV
      if (!regexNumerico.test(this.cvv)) {
        alert('El CVV solo puede contener caracteres numéricos.');
        return false;
      }

      if (this.cvv.length !== 3) {
        alert('El CVV debe tener 3 caracteres.');
        return false;
      }

      return true;
    }
  },
};
</script>
