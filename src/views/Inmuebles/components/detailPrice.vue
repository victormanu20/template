<template>
  <div class="property-price d-flex justify-content-center foo" v-if="detailPrice.selling_price">
    <div class="meta__detail_price">
      <div >
        <span class="title-c">Venta:</span>
      </div>
      <div class="card-box-ico">
        <span class="ion-money">$</span>
      </div>
      <div>
        <h5 class="title-c">{{ currencyFormat(detailPrice.selling_price) }}</h5>
      </div>
    </div>
  </div>

  <div class="property-price d-flex justify-content-center foo" v-if="detailPrice.rental_price">
    <div class="meta__detail_price">
      <div >
        <span class="title-c">Alquiler:</span>
      </div>
      <div class="card-box-ico">
        <span class="ion-money">$</span>
      </div>
      <div >
        <h5 class="title-c">{{ currencyFormat(detailPrice.rental_price) }}</h5>
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

function currencyFormat(value) {
	return new Intl.NumberFormat("de-DE", {
		style: "currency",
		currency: "COP",
		minimumFractionDigits: 0,
	}).format(value);
}

</script>

<style scoped lang="scss">

.meta__detail_price{
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.card-box-ico {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 5px solid var(--color-primary);
}

.title-c {
  margin: 0;
  z-index: 10;
  font-size: 2.5rem;
  font-weight: 600;
}

.ion-money{
  font-size: 2.5rem;

}

@media (max-width: 550px) {
.meta__detail_price{
  flex-direction: column;
  justify-content: center;
}
.title-c {
  font-size: 2.0rem;
  color: var(--color-primary);
}
.card-box-ico {
  display: none;
}
}
</style>