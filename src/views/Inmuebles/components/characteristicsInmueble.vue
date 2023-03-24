<template>
	<div class="metaDataInmueble">
    <detailPrice  :detailPrice="detail"/>
    <!-- DESCRIPCION GENERAL -->
    <h2 class="tituloDetalleInmueble">Descripción general</h2>
    <div class=" textoDetalleInmueble mb-4">
      <p>{{detail.descripcion}}</p>
    </div>
    <metaDataInmuble :detail="detail"/>
    <div class="wrapperDetalleInmueble attrGeneral mt-5 cols-lg-12">
      <div class="row"  v-if="detail.caracteristicas_internas.length >0">
          <div class="col">
            <h2 class="tituloDetalleInmueble">Caracteristicas internas</h2>
            <ul class="attrList">
              <li class="itemAttrList" v-for="item in detail.caracteristicas_internas" :key="item.id">
                <span class="textAttrList">
                  {{item.value}}
                </span>
              </li>
            </ul>
          </div>
      </div>
      
      <div class="row mt-4"  v-if="detail.caracteristicas_externas.length>0">
        <div class="col">
          <h2 class="tituloDetalleInmueble">Caracteristicas Externas</h2>
          <ul class="attrList">
            <li class="itemAttrList" v-for="item in detail.caracteristicas_externas" :key="item.id">
              <span class="textAttrList">
                {{item.value}}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="wrapperDetalleInmueble googleMaps mt-5">
      <h2 class="tituloDetalleInmueble">Ubicación</h2>
      <GoogleMap v-if="detail" class="flex-grow-1" v-bind="map" />
    </div>


	</div>
</template>

<script setup>
import { defineProps,computed } from 'vue';
import detailPrice from './detailPrice.vue';
import metaDataInmuble from './metaDataInmueble.vue';
import GoogleMap from '@/components/inmuebles/GoogleMap.vue';

let map = computed(
  ()=>{
    const { titulo_inmueble, direccion, ciudad_id, estado_id, latitud, longitud, } = this.detail;
    return {
        nombre: titulo_inmueble,
        direccion,
        ciudad: ciudad_id.name,
        estado: estado_id.name,
        lat: latitud,
        lng: longitud,
    }

  }
)

defineProps({
  detail:{
    type:Object,
  }
})

</script>

<style lang="css" scoped>

.metaDataInmueble{
  width: 100%;
}

.container__dataInmueble{
  display: flex;
  flex-wrap: wrap;
}
.meta{
  padding: 0 1rem;
}

.tituloDetalleInmueble {
			font-size: 20px;
			text-transform: uppercase;
			font-weight: 700;
			margin-bottom: 15px;
			border-bottom: 1px solid #ebe9f1;
			padding-bottom: 6px;
		}

		.attrList {
			margin: 0;
			padding: 0;
			display: flex;
			flex-wrap: wrap;
			list-style: none;
      gap: 8px;
		}

		.itemAttrList {
			display: flex;
			align-items: center;
			padding: 8px 20px;
			line-height: 1.6;
			border: 1px solid var(--color-primary);
			font-weight: 500;
			border-radius: 0.25rem;
		}

		.iconAttrList {
			width: 1.25em;
			margin-right: 10px;
			font-size: 20px;
			color: var(--tm-color);
			opacity: 0.6;
		}


</style>