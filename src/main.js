import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { createRouter, createWebHistory } from 'vue-router'; // Importa createRouter y createWebHistory

import Modulo1 from './components/modulo1.vue';
import Modulo2 from './components/modulo2.vue';
import Modulo3 from './components/modulo3.vue';
import Modulo4 from './components/modulo4.vue';
import Modulo5 from './components/modulo5.vue';
import Modulo6 from './components/modulo6.vue';
import Modulo7 from './components/modulo7.vue';
import Modulo8 from './components/modulo8.vue';
import Modulo9 from './components/modulo9.vue';
import Modulo10 from './components/modulo10.vue';
import Modulo11 from './components/modulo11.vue';
import Modulo12 from './components/modulo12.vue';
import vistaFiltro from './components/vistaFiltro.vue';

const app = createApp(App);

// Utiliza createRouter y createWebHistory
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/modulo2' },
    { path: '/modulo1', component: Modulo1 },
    { path: '/modulo2', component: Modulo2 },
    { path: '/modulo3', component: Modulo3 },
    { path: '/modulo4', component: Modulo4 },
    { path: '/modulo5', component: Modulo5 },
    { path: '/modulo6', component: Modulo6 },
    { path: '/modulo7', component: Modulo7 },
    { path: '/modulo8', component: Modulo8 },
    { path: '/modulo9', component: Modulo9 },
    { path: '/modulo10', component: Modulo10 },
    { path: '/modulo11', component: Modulo11 },
    { path: '/modulo12', component: Modulo12 },
    { path: '/vistaFiltro/:categoria', component: vistaFiltro, props: true }, // Añade la definición de la ruta con un parámetro de ruta
  ],
});


app.use(router);

app.mount('#app');
