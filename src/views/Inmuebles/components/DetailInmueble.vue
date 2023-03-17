<template>
  <div class="container__slider">
    <div class="container__header">
      <div class="title-single-box">
        <h2 class="title-single">{{ inmuebleSeleted.titulo_inmueble }}</h2>
        <div class="container-slider__direction">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="detail__direction-logo">
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
          </svg>
          <div class="detail__direction">
            <span class="color-text-a"  v-if="inmuebleSeleted.estado_id && inmuebleSeleted.ciudad_id && inmuebleSeleted.barrio_id">{{ inmuebleSeleted.estado_id.name }}, {{ inmuebleSeleted.ciudad_id.name }}, {{ inmuebleSeleted.barrio_id.name }}</span>
            <span class="color-text-a">{{ inmuebleSeleted.direccion }}</span>
          </div>
        </div>

      </div>
      <button class="btn btn-primary btn__icon">Ver mas</button>
    </div>
    <SliderImages :listIMages="inmuebleSeleted.inmueble_imagenes" class="sliderImages"/>
    <Characteristics :detail="inmuebleSeleted"/>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
import SliderImages from './SliderImages.vue'
import Characteristics from './characteristicsInmueble.vue'

defineProps({
  inmuebleSeleted:{
    type:Object
  }
 })
</script>

<style>
.container__slider{
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2rem;
}
.sliderImages{
  width: 100%;
}

.container__header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-single-box{
  border-left: 4px solid var(--color-primary);
  padding-left: 1rem;
}
.btn__icon{
  height: 40px;
  width: auto;
  padding: 8px 16px;
}

.container-slider__direction{
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.color-text-a{
  display:block;
}
.detail__direction-logo{
  width: 1.6rem;
  height: 1.6rem;
  fill: var(--color-primary);
}
@media (max-width: 780px) {
  .container__header{
    flex-direction: column;
    gap: 1rem;
  }
}

</style>