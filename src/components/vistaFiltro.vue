<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <modulo4 />
            </div>

            <div class="col-md-9">
                <div class="row">
                    <div class="col-md-4" v-for="(producto, index) in productosFiltrados" :key="index">
                        <div class="producto-container">
                            <modulo3 :producto="producto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Modulo3 from './modulo3.vue';
import Modulo4 from './modulo4.vue'; 
import productos from '/src/assets/productos.json';

export default {
    components: {
        Modulo3,
        Modulo4
    },
    data() {
        return {
            categorias: ['Hombre', 'Mujer'],
            categoriaSeleccionada: null,
            productos: []
        };
    },
    computed: {
        productosFiltrados() {
            if (this.categoriaSeleccionada === 'Hombre') {
                return this.productos.filter(producto => producto.categoria.toLowerCase() === 'hombre');
            } else if (this.categoriaSeleccionada === 'Mujer') {
                return this.productos.filter(producto => producto.categoria.toLowerCase() === 'mujer');
            } else {
                return this.productos;
            }
        }
    },
    created() {
        this.productos = productos;
    }
};
</script>

<style scoped>
.container {
    margin-top: 5%;
}

.col-md-3 {
  width: 25%;   
}

.col-md-9 {
  width: 70%;
  max-width: 100%;
}

</style>