<template>
  <div>
    <h3>FILTROS</h3>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Tipo de propiedad</label>
        <select class="form-select" aria-label="Default select example" v-model="select">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Tipo de negocio</label>
        <select class="form-select" aria-label="Default select example" v-model="select">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Paises</label>
        <select class="form-select" aria-label="Default select example" v-model="select">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Departamento</label>
        <select class="form-select" aria-label="Default select example" v-model="select">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Ciudad</label>
        <select class="form-select" aria-label="Default select example" v-model="select">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Zonas</label>
        <select class="form-select" aria-label="Default select example" v-model="select">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Barrios</label>
        <select class="form-select" aria-label="Default select example" v-model="select">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <button @click="filter()"> filtar</button>
  </div>
</template>

<script setup>
import { onMounted,ref } from 'vue';

let select = ref()
onMounted(() => {
  console.log(select.value)
})

function filter(){
  console.log(select.value)
}
</script>