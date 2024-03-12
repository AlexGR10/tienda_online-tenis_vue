<template>
  <div class="Modulo2">
    <h2>{{ title }}</h2>
    <div class="carousel">
      <button @click="prevSlide" class="carousel-control-prev">&#10094;</button>
      <div class="carousel-inner">
        <div v-for="(product, index) in products" :key="index" class="carousel-item" :class="{ active: index === currentSlide }">
          <modulo3 :product="product"></modulo3>
        </div>
      </div>
      <button @click="nextSlide" class="carousel-control-next">&#10095;</button>
    </div>
  </div>
</template>

<script>
import Modulo3 from './modulo3.vue';

export default {
  name: 'Modulo2',
  components: {
    Modulo3
  },
  props: {
    title: String,
    products: Array
  },
  data() {
    return {
      currentSlide: 0
    };
  },
  methods: {
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.products.length) % this.products.length;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.products.length;
    }
  }
}
</script>

<style scoped>
.Modulo2 {
  margin-bottom: 20px;
}

.carousel {
  position: relative;
  overflow: hidden;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  cursor: pointer;
  z-index: 1;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-inner {
  display: flex;
}

.carousel-item {
  flex: 0 0 100%;
  display: none;
}

.carousel-item.active {
  display: block;
}
</style>