<template>
  <div>
    <h2>Formulario de Registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="nombre">Nombre </label>
        <Field type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" />
        <ErrorMessage name="nombre"></ErrorMessage>
      </div>
      <div class="form">
        <label for="correo">Correo </label>
        <Field type="email" name="email" id="correo" placeholder="Ingrese su email" />
        <ErrorMessage name="email"></ErrorMessage>
      </div>
      <div class="form">
        <button type="submit">Registrar</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { schema } from '../schemas/validationSchema'
import { useRegistrarStore } from '@/modules/registro/stores/registrarStore'

const registrarStore = useRegistrarStore()

const onSubmit = (values) => {
  registrarStore.guardarRegistro(values.nombre, values.email)
  console.log('Se ha enviado el formulario')
}
</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
</style>
