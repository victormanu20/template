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
      <div class="container">
        <div class="row">
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
      </div>
      
      <div class="row mt-4">
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
      <Map v-if="detail" class="flex-grow-1" v-bind="map" />
    </div>


	</div>
</template>

<script setup>
import { defineProps } from 'vue';
import detailPrice from './detailPrice.vue';
import metaDataInmuble from './metaDataInmueble.vue'


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

		ul.attrList {
			margin: 0;
			padding: 0;
			display: flex;
			flex-wrap: wrap;
			list-style: none;
			margin:-8px;
		}

		ul.attrList li.itemAttrList {
			display: flex;
			align-items: center;
			padding: 8px 20px;
			line-height: 1.6;
			border: 1px solid var(--tm-color);
			font-weight: 500;
			border-radius: 0.25rem;
			margin: 8px;
		}

		.iconAttrList {
			width: 1.25em;
			margin-right: 10px;
			font-size: 20px;
			color: var(--tm-color);
			opacity: 0.6;
		}

    @media(max-width: 767px){
			ul.attrList li.itemAttrList {
				padding: 8px 16px;
				line-height: 1.4;
				font-size: 14px;
			}
		}

</style>