<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ nombre }}</h3>
    <h3>Email: {{ email }}</h3>
    <ul>
      <li><router-link to="/contador">Contador</router-link></li>
      <li><router-link to="/lista-de-tareas">Lista de Tareas</router-link></li>
      <li><router-link to="/registrar">Registrar</router-link></li>
    </ul>
  </div>
</template>

<script setup>
import { useRegistrarStore } from '@/modules/registro/stores/registrarStore'
import { computed } from 'vue'

const registrarStore = useRegistrarStore()
const nombre = computed(() => registrarStore.nombre)
const email = computed(() => registrarStore.email)
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: midnightblue;
  padding: 20px;
}
</style>
