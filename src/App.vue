<template>
  <div id="app">
    <modulo1></modulo1>
    <div class="container-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import modulo1 from './components/modulo1.vue';

export default {
  components: {
    modulo1,
  }
};
</script>

<style scoped>

  div{
    background-color:rgb(255, 255, 255);
    width: 100%;
  }

</style>

