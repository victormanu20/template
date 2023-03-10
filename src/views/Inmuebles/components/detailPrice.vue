<template>
  <div class="property-price d-flex justify-content-center foo" v-if="detailPrice.selling_price">
    <div class="card-header-c d-flex">
      <div class="card-title-c align-self-center">
        <span class="title-c">Venta:</span>
      </div>
      <div class="card-box-ico">
        <span class="ion-money">$</span>
      </div>
      <div class="card-title-c align-self-center">
        <h5 class="title-c">15000</h5>
      </div>
    </div>
  </div>

  <div class="property-price d-flex justify-content-center foo" v-if="detailPrice.rental_price">
    <div class="card-header-c d-flex">
      <div class="card-title-c align-self-center">
        <span class="title-c">Alquiler:</span>
      </div>
      <div class="card-box-ico">
        <span class="ion-money">$</span>
      </div>
      <div class="card-title-c align-self-center">
        <h5 class="title-c">15000</h5>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  detailPrice: {
    type: Object,
  }
})

</script>

<style>
.card-box-ico {
  padding: 1rem 3rem 1rem 2.5rem;
  border: 5px solid #2eca6a;
}

.title-c {
  font-size: 2.5rem;
  font-weight: 600;
  margin-left: -40px;
}

.ion-money{
  font-size: 2.5rem;

}
</style>