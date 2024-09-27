// eslint-disable-next-line vue/multi-word-component-names
<template>
  <h1>Hola mundo</h1>
  <p>{{ contador }}</p>

  <button @click="incrementar">Incrementar valor</button>
  <button @click="decrementar">Decrementar valor</button>
</template>

<script setup>
import { ref } from 'vue'
const contador = ref(0)

const incrementar = () => {
  contador.value++
}

const decrementar = () => {
  contador.value--
}
</script>

<style scoped>
p {
  color: green;
}
</style>
