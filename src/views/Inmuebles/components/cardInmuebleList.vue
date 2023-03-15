<template>
  <div class="card"  @click="handleShowDetail(props.inmueble)" v-if="props.inmueble">
    <img :src="props.inmueble.inmueble_imagenes[0].url" class="card-img-top" :alt="props.inmueble.titulo_inmueble">
    <div class="card-body">
      <h6 class="title__inmueble">{{ props.inmueble.titulo_inmueble }}</h6>
      <h6 class="card-title price__inmueble" v-if="props.inmueble.selling_price">Venta: {{ props.inmueble.selling_price }}</h6>
      <h6 class="card-title price__inmueble"  v-if="props.inmueble.rental_price">Alquiler: {{ props.inmueble.rental_price }}</h6>
      <div class="position">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="logo__position">
          <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
        </svg>
        <span>{{ valDataInmueble(props.inmueble.ciudad_id).name}}, {{valDataInmueble(props.inmueble.barrio_id).name}}.</span>
      </div>
      <div class="detail__grid">
        <div class="item__data border_item">
          <span style="display: block;">Hab.</span>
          <span >{{props.inmueble.habitaciones}} </span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="logo__item">
            <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/>
          </svg>
        </div>
        <div class="item__data border_item">
          <span style="display: block;">Baños</span>
          <span>{{props.inmueble.banos}} </span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="logo__item">
            <path d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.8-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z"/>
          </svg>
        </div>
        <div class="item__data border_item">
          <span style="display: block;">Area(m<sup>2</sup>)</span>
          <span>{{props.inmueble.area_lote}} </span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="logo__item">
            <path d="M.2 468.9C2.7 493.1 23.1 512 48 512l96 0 320 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-48c0-26.5-21.5-48-48-48L48 0C21.5 0 0 21.5 0 48L0 368l0 96c0 1.7 .1 3.3 .2 4.9z"/>
          </svg>
        </div>
        <div class="item__data">
          <span style="display: block;">Estrato</span>
          <span >2</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="logo__item">
            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
          </svg>
        </div>
      </div>
      <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
  </div>
</template>
<script  setup>
import {  defineProps,defineEmits } from 'vue';
const emit = defineEmits(['showDetail']);
const props = defineProps({
  inmueble:{
    type: Object
  }
});
const handleShowDetail = (data) =>{
  emit('showDetail',data)
}

const valDataInmueble = (data) =>{
  return (data!=null)?data:''
} 
</script>

<style scoped>

.card{
  width: 100%;
}
.card:hover{
  cursor: pointer;
}
.card-img-top{
  width: 100%;
  min-height: 340px;
}
.logo__item{
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
  fill: rgb(69, 103, 135);
}
.logo__position{
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  fill: rgb(69, 103, 135);

}
.price__inmueble{
  color:  rgb(69, 103, 135);
  font-weight: bold;
}
.title__inmueble{
  font-weight: bold;
  max-height: 60px;
  overflow-y: hidden;
}
.detail__grid{
  display: grid;
  grid-template-columns: repeat(4,minmax(1rem,1fr));
  justify-items: center;
  align-items: center;
}
.item__data{
  padding: 0.3em;
  font-size: 0.8em;
}



</style>