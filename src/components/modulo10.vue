<template>
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Formulario de Pago</h2>
  
          <!-- Formulario de Datos de la Tarjeta -->
          <form>
            <div class="mb-3">
              <label for="numeroTarjeta" class="form-label">Número de Tarjeta</label>
              <input type="text" class="form-control" id="numeroTarjeta" placeholder="Ingrese el número de tarjeta">
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="fechaVencimiento" class="form-label">Fecha de Vencimiento</label>
                <input type="text" class="form-control" id="fechaVencimiento" placeholder="MM/AA">
              </div>
              <div class="col-md-6">
                <label for="cvv" class="form-label">CVV</label>
                <input type="text" class="form-control" id="cvv" placeholder="Ingrese el código de seguridad">
              </div>
            </div>
  
            <!-- Formulario de Dirección de Envío -->
            <h3 class="mt-4">Dirección de Envío</h3>
            <div class="mb-3">
              <label for="calle" class="form-label">Calle</label>
              <input type="text" class="form-control" id="calle" placeholder="Ingrese la calle">
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="numero" class="form-label">Número</label>
                <input type="text" class="form-control" id="numero" placeholder="Ingrese el número">
              </div>
              <div class="col-md-6">
                <label for="codigoPostal" class="form-label">Código Postal</label>
                <input type="text" class="form-control" id="codigoPostal" placeholder="Ingrese el código postal">
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
    methods: {
      procesarPago() {
        // Implementar lógica para procesar el pago (enviar la información al procesador de pagos, etc.)
        console.log('Procesando el pago...');
      },
    },
  };
  </script>
  