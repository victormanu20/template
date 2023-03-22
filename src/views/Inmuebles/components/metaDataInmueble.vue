<template>
  <div class=" container__dataInmueble">
      <div class="metaInmueble">
			<div class="meta tipo"  v-if="detail.tipo_inmueble">
				<span class="label">Tipo de inmueble:</span> 
				<span class="value">{{detail.tipo_inmueble.tipo}}</span>
			</div>
			<div class="meta tipo" v-if="detail.tipo_negocio">
				<span class="label">Tipo de negocio:</span> 
				<span class="value"><b>{{detail.tipo_negocio.tipo}}</b></span>
			</div>
			<div class="meta direccion" v-if="detail.direccion">
				<span class="label">Direccion:</span>
				<span class="value" >{{detail.direccion}}</span>
			</div>
			<div class="meta ciudad" v-if="detail.ciudad_id && detail.estado_id">
				<span class="value" >{{detail.ciudad_id.name}}, {{detail.estado_id.name}}</span>
			</div>
      <div class=" meta"  v-if="detail.barrio_id">
        <span class="label">Barrio:</span>
        <span class="value" >{{detail.barrio_id.name}}</span>
      </div>
      <div class="anoConstrucion" v-if="detail.ano_construcion">
				Año de construccion: 
				{{detail.ano_construcion}}
			</div>

      <h2 class="tituloDetalleInmueble">Descripción Inmueble</h2>
      <div class="row detalleInmueble">
						<div class="col">
							<div class="wrapperDetalleInmueble descripcionGeneral">
								<div>
									<div class="row">
										<div class="col-lg-12">
											<div class="tableDetalleInmueble">
												<div class="tableRow"  v-if="detail.habitaciones">
													<span class="tableLablel" >Habitaciones:</span>
													<span class="tableValue">{{detail.habitaciones}}</span>
												</div>
												<div class="tableRow"  v-if="detail.banos">
													<span class="tableLablel" >Baños:</span>
													<span class="tableValue">{{detail.banos}}</span>
												</div>
												<div class="tableRow" v-if="detail.cantidad_parqueadero">
													<span class="tableLablel">Parqueaderos:</span>
													<span class="tableValue">{{detail.cantidad_parqueadero}}</span>
												</div>
												<div class="tableRow" v-if="detail.pisos">
													<span class="tableLablel" >Pisos:</span>
													<span class="tableValue">{{detail.pisos}}</span>
												</div>
											</div>
										</div>
									</div>
								</div>						
							</div>
							<div class="wrapperDetalleInmueble areaGeneral mt-5">
								<h2 class="tituloDetalleInmueble">Area del inmueble</h2>
								<div class="row">
									<div class="col-lg-12 col-md-6">
										<div class="tableDetalleInmueble">
											<div class="tableRow" v-if="detail.area_lote">
												<span class="tableLabel"  >Area Lote:</span>
												<span class="tableValue">{{detail.area_lote}} <span class="und">m<sup>2</sup></span></span>
											</div>
											<div class="tableRow" v-if="detail.area_contruida">
												<span class="tableLabel" >Area Construida:</span>
												<span class="tableValue">{{detail.area_contruida}} <span class="und">m<sup>2</sup></span></span>
											</div>
											<div class="tableRow" v-if="detail.area_total">
												<span class="tableLabel" >Area Total:</span>
												<span class="tableValue">{{detail.area_total}} <span class="und">m<sup>2</sup></span></span>
											</div>
										</div>
									</div>
									<div class="col-lg-12 col-md-6">
										<div class="tableDetalleInmueble">
											<div class="tableRow" v-if="detail.fondo">
												<span class="tableLabel">Fondo:</span>
												<span class="tableValue">{{detail.fondo}} <span class="und">m<sup>2</sup></span></span>
											</div>
											<div class="tableRow" v-if="detail.frente">
												<span class="tableLabel">Frente:</span>
												<span class="tableValue">{{detail.frente}} <span class="und">m<sup>2</sup></span></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
		</div>
    </div>

</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  detail: {
    type: Object,
  }
})

</script>

<style scoped>


.metaInmueble{
  width: 100%;
}
.agenteInmueble{
  width: 50%;
}
.metaDataInmueble .valor {
  font-size: 28px;
  line-height: 1;
}

	.metaDataInmueble .preciosInmueble .label {
		font-size: 16px;
		display: block;
		margin-bottom: 6px;
	}

	.metaDataInmueble .valor+.valor {
		margin-top: 15px;
	}
	.metaDataInmueble .valor b {
		color: var(--tm-color);
	}

	.metaDataInmueble .metaInmueble {
		font-size: 14px;
		margin-top: 20px;
    
	}

	.metaDataInmueble .metaInmueble .meta {
		display: flex;
	}
	.metaDataInmueble .metaInmueble .meta.tipo+.meta.tipo {
		margin-top: 4px;
	}
	.metaDataInmueble .metaInmueble .meta .value {
		margin-left: auto;
		padding-left: 8px;
	}

	.metaDataInmueble .metaInmueble .meta.direccion {
		border-top: 1px solid #ebe9f1;
		padding-top: 5px;
		margin-top: 5px;
	}

	.metaDataInmueble .anoConstrucion {
		margin: 20px 0;
		padding: 10px 35px;
		background: #e4e4e4;
		text-align: center;
		font-size: 16px;
		font-weight: 600;
	}
	.sideBarInmueble .metaDataInmueble .anoConstrucion{
		margin: 20px -35px;
	}
	.metaDataInmueble+* {
		border-top: 1px solid #e4e4e4;
		margin-top: 1rem;
		padding-top: 1rem;
	}

  @media (max-width:620px) {
  .container__dataInmueble{
    display: flex;
    flex-direction: column;
  }
  .metaInmueble{
    width: 100%;
  }
  }



  /* METADATA */

  .detalleInmueble {
			line-height: 1.8;
		}
		.tituloDetalleInmueble {
			font-size: 20px;
			text-transform: uppercase;
			font-weight: 700;
			margin-bottom: 15px;
			border-bottom: 1px solid #ebe9f1;
			padding-bottom: 6px;
		}
		.tableDetalleInmueble {
			width: 100%;
		}
		.tableDetalleInmueble.column-count{
			column-count: 2;
			column-gap: 30px;
		}

		.tableDetalleInmueble .tableRow {
			display: flex;
			justify-content: space-between;
			padding: 0 8px;
			background-color: #ffffff;
			border-bottom: 3px solid  #ebe9f1;
		}

		.tableDetalleInmueble .tableRow .tableValue:last-child {
			text-align: right;
			font-weight: 600;
		}

		.tableDetalleInmueble .tableRow span {
			padding: 8px 13px;
		}

		.textoDetalleInmueble > :first-child {
			padding-top: 0;
			margin-top: 0;
		}

		.textoDetalleInmueble > :last-child {
			margin-bottom: 0;
			padding-bottom: 0;
		}

		.sideBarInmueble {
			border: 1px solid #ebe9f1;
			padding: 20px 35px;
			border-radius: 6px;
		}
		
		.title-form {
			font-size: 18px;
			text-align: center;
			margin-bottom: 20px;
		}
		@media(max-width: 991px){
			.tableDetalleInmueble.column-count{
				column-count: 1;
			}
		}

		.titleMap {font-size: 14px;font-weight: 600;text-transform: uppercase;margin-bottom: 10px;}

		.infoMap {padding: 0;list-style: none;margin: 0;font-size: 12px;}

		.infoMap b {font-weight: 500;}

		.agenteInmueble .icon {margin-right: 6px;}

		.agenteInmueble a.celular {display: flex;justify-content: center;align-items: center;font-size: 0.75em;margin-top: 8px;color: inherit;}

		.agenteInmueble a.btn-wa {display: flex;justify-content: center;align-items: center;text-transform: none;font-size: 16px;background: #56d062;color: #fff;line-height: 1;padding: 0.4em 0.8em;border-radius: 0.3em;margin-top: 20px;}

		.agenteInmueble a.btn-wa .icon {font-size: 1.5em;}

		.rol {font-size: 20px;text-transform: uppercase; font-weight: 700; color: var(--tm-cop);}
		.swal2-styled{line-height: 1;}
		.swal2-styled.swal2-confirm{background: var(--tm-color)!important;}
</style>
