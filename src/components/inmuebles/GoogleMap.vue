<template >
	<GoogleMap :api-key="api_maps" style="width: 100%; height: 100%" :center="center"
		:zoom="18">
		<Marker :options="{ position: center }" />
		<InfoWindow :options="{ position: center }"> 
			<h5 class="titleMap">{{map.nombre}}</h5>
			<ul class="infoMap">
				<li class="address"><b>{{map.direccion}}</b></li>
				<li> <span>{{ map.estado }}</span>, <span>{{ map.ciudad }}</span></li>
			</ul>
		
		</InfoWindow>


	</GoogleMap>
</template>
<script setup>
import {  defineProps,ref,onMounted } from 'vue'
import { GoogleMap, Marker,InfoWindow   } from 'vue3-google-map'

const props = defineProps({
	map: {
		type: Object
	}
})
let center = ref(null)
let api_maps = ref('AIzaSyB-e9MP04V0fVjgSBRr3HMxhK7exGOc1qM')
onMounted(() => {
	center.value = { lat:Number(props.map.lat), lng: Number(props.map.lng) }
})
</script>

<style scoped>
.titleMap{
	color: var(--color-primary);
}
</style>