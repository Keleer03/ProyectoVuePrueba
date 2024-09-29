<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
  <div class="header">
    {{ mensajeRecibido }}
    <Weather></Weather>
  </div>
</template>

<script setup>
import Weather from './Weather.vue'
// eslint-disable-next-line no-unused-vars
import { defineProps, ref, watch } from 'vue'

const props = defineProps(['mensaje'])
const mensajeRecibido = props.mensaje

watch(
  () => props.mensaje,
  (newValue) => {
    mensajeRecibido.value = newValue
  }
)
</script>

<style scoped>
.header {
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 10px 20px;
  top: 0;
  right: 0;
  left: 0;
  background-color: blueviolet;
  color: white;
}

h3 {
  margin: 0;
}
</style>
