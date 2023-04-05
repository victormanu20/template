<template>
  <div class=" card-box-a card-shadow" style="width: 100%;" @click="handleShowDetail(props.inmueble)" v-if="props.inmueble" >
    <div class="img-box-a">
      <img :src="props.inmueble.inmueble_imagenes[0].url" 
        class="img-a "
        :alt="props.inmueble.titulo_inmueble">
    </div>
    <div class="card-overlay">
      <div class="card-overlay-a-content">
        <div class="card-header-a">
          <h2 class="card-title-a">
            {{ props.inmueble.titulo_inmueble }}
          </h2>
        </div>

      </div>
    </div>
    <div class="card-footer-a ">
      <ul class="card-info d-flex justify-content-around">
        <li>
          <h4 class="card-info-title">Area</h4>
          <span class="card-info_detail">
            {{props.inmueble.area_lote}} m<sup>2</sup>
          </span>
        </li>
        <li class="card__iitem">
          <h4 class="card-info-title">Hab.</h4>
          <span class="card-info_detail">{{ props.inmueble.habitaciones }}</span>
        </li>
        <li class="card__iitem">
          <h4 class="card-info-title">Baños</h4>
          <span class="card-info_detail">{{ props.inmueble.banos }}</span>
        </li>
        <li class="card__iitem">
          <h4 class="card-info-title">Garaje</h4>
          <span  class="card-info_detail" v-if="props.inmueble.garaje !=null">
            SI
          </span>
          <span  class="card-info_detail" v-else>
            NO
          </span>

          <!-- <span class="card-info_detail">{{ ( props.inmueble.parqueadero)? props.inmueble.parqueadero:"--" }}</span> -->
        </li>
      </ul>
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
</script>

<style scoped>
.card-title-a{
  color: var(--color-primary);
  font-size: 1.3rem;
}

.img-box-a{
  width: 100%;
  height: 100%;
}
.card-footer-a {
  width: 100%;
  position: absolute;
  z-index: 2;
  bottom: 0;
  background-color: var(--color-primary);
  color: var(--color-text);
}

.card-info .card-info-title {
  font-size: 1rem;
  color:var(--color-text);
}
.card-info {
  list-style: none;
  margin-bottom: 0;
  padding: .5rem 0;
}

.card__iitem{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-box-a{
  position: relative;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 10px;
}
.card-box-a:hover{
  cursor: pointer;
  box-shadow: 0 0 20px var(--color-primary);
}
.card-shadow {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.card-shadow:before {
  content: ' ';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 27%, rgba(0, 0, 0, 0.65) 90%);
}

.img-a{
  height: 100%;
  object-fit: cover;
}
.card-box-a .img-a{
  transition: .8s all ease-in-out;
}
.grid .card-box-a{
    margin-bottom: 2.5rem;
  }

  .card-box-a:hover .img-a{
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .card-box-a .img-a{
  transition: .8s all ease-in-out;
}

  .card-box-a .price-a,
  .card-box-b .price-a {
    font-size: .9rem;
  }

  .card-box-a:hover .card-overlay-a-content {
    bottom: 60px;
  }
  .card-box-a:hover .card-body-a {
    padding-bottom: 1rem;
  }
  .card-overlay-a-content {
  transition: all .5s ease-in;
  position: absolute;
  width: 100%;
  bottom: 0px;
  padding: 0 4px;
  z-index: 2;
}
.card-info_detail{
  color: var(--color-text);
}
.card-box-a:hover .card-overlay-a-content {
    bottom: 60px;
  }

.card-overlay-a-content {
  bottom: -60px;
}

  @media (max-width: 768px) {
  .card-overlay-a-content {
    bottom: 60px;
  }
}

/* @media (min-width: 768px) and (min-width: 992px) {
  .card-box-a:hover .card-overlay-a-content {
    bottom: 64px;
    background-color: blue;
  }
} */

@media (min-width: 992px) {
  .card-box-a .price-a,
  .card-box-b .price-a {
    font-size: 1rem;
  }
}

</style>