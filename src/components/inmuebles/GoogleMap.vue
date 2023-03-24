<template>
	<GmapMap
	:center="pos"
	:zoom="16.75"
	map-type-id="terrain"
	style="width: 100%; height: 350px"
	>
	<GmapMarker ref="myMarker"
	:position="google && new google.maps.LatLng(pos.lat, pos.lng)" :clickable="true" @click="map.open = !map.open" />
	<gmap-info-window :options="infoPopUp" :position="pos" :opened="map.open"  />
</GmapMap>
</template>

<script>
	import {gmapApi} from 'vue2-google-maps'
	export default {

		name: 'GoogleMap',
		props:['nombre', 'direccion', 'ciudad', 'estado', 'lat', 'lng'],
		data () {
			return {
				map:{
					open: true,
				},
			}
		},
		computed: {
			google: gmapApi,
			pos(){
				return {
					lat: this.lat ? Number(this.lat) : 0,
					lng: this.lng ? Number(this.lng) : 0,
				}
			},
			infoPopUp(){
				return {
					content: `
						<h5 class="titleMap">${this.nombre}</h5>
						<ul class="infoMap">
							<li class="address"><b>${this.direccion}</b></li>
							${this.estado ? '<li class="city">' + this.ciudad + ', ' + this.estado + '</li>' : ''}
						</ul>
					`,
					pixelOffset: {
						width: 0,
						height: -35
					}
				}
			}
		},
	}
</script>

<style lang="css">
	.titleMap {font-size: 14px;font-weight: 600;text-transform: uppercase;margin-bottom: 10px;}

	.infoMap {padding: 0;list-style: none;margin: 0;font-size: 12px;}

	.infoMap b {font-weight: 500;}
</style>