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
          <td>{{ pedido.estatusEnvio }}</td>
          <td>
            <button @click="cancelarPedido(index)" class="btn btn-danger">Cancelar Pedido</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

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
    async cargarHistorialPedidos() {
      try {
        const response = await axios.get('/src/assets/carrito.json');
        this.historialPedidos = response.data;
      } catch (error) {
        console.error('Error al cargar el historial de pedidos', error);
      }
    },
    cancelarPedido(index) {
      // Lógica para cancelar el pedido (puedes implementar esta parte según tus necesidades)
      console.log(`Cancelando pedido número: ${this.historialPedidos[index].numeroPedido}`);
    },
  },
};
</script>
