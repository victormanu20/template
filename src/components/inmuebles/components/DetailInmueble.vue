<template>
  {{ inmuebleSeleted.titulo_inmueble }}
 <SliderImages :listIMages="inmuebleSeleted.inmueble_imagenes"/>
</template>
<script setup>
import { defineProps } from 'vue';
 import SliderImages from './SliderImages.vue'

defineProps({
  inmuebleSeleted:{
    type:Object
  }
 })
</script>