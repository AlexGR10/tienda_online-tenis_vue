<template>
  <div>
    <h2>Historial de Pedidos</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Número de Pedido</th>
          <th scope="col">Productos</th>
          <th scope="col">Total de Pago</th>
          <th scope="col">Estatus de Envío</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pedido, index) in historialPedidos" :key="index">
          <td>{{ pedido.numeroPedido }}</td>
          <td>
            <ul>
              <li v-for="(producto, idx) in pedido.productos" :key="idx">
                {{ producto.nombre }} ({{ producto.cantidad }})
              </li>
            </ul>
          </td>
          <td>${{ pedido.totalPago.toFixed(2) }}</td>
          <td :style="getStatusStyle(pedido.estatusEnvio)" class="rounded-pill p-2">{{ pedido.estatusEnvio }}</td>
          <td>
            <button @click="cancelarPedido(index)" class="btn btn-danger btn-sm rounded-pill">Cancelar Pedido</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      historialPedidos: [], // Aquí debes cargar el historial de pedidos del usuario
    };
  },
  mounted() {
    this.cargarHistorialPedidos();
  },
  methods: {
    cargarHistorialPedidos() {
      // Obtener el historial de pedidos del localStorage
      const historialPedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
      // Asignarlos a la variable de datos
      this.historialPedidos = historialPedidos;
    },
    cancelarPedido(index) {
      // Lógica para cancelar el pedido (puedes implementar esta parte según tus necesidades)
      console.log(`Cancelando pedido número: ${this.historialPedidos[index].numeroPedido}`);
    },
    getStatusStyle(estado) {
      switch (estado) {
        case 'En camino':
          return { backgroundColor: '#ffc107', color: 'white' }; // Fondo amarillo y texto blanco
        case 'Cancelado':
          return { backgroundColor: '#dc3545', color: 'white' }; // Fondo rojo y texto blanco
        case 'En proceso':
          return { backgroundColor: '#fd7e14', color: 'white' }; // Fondo naranja y texto blanco
        case 'Entregado':
          return { backgroundColor: '#28a745', color: 'white' }; // Fondo verde y texto blanco
        default:
          return {}; // Si el estado no coincide con ninguno de los anteriores, no se aplica ningún estilo
      }
    }
  },
};
</script>
