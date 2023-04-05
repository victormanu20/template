import {axiosIns, hostname} from '@/libs/axios'

export default {
	namespaced: true,
	state: {
		detail: {},
		list: [],
		grid: {
			overlay: false,
			data: [],
			total: 1,
			per_page: 1,
		},
		filtros: {
			data: null,
			filtro: {
				tipo_inmueble:{
					id:'tipo_inmueble',
					label: 'Tipo de Propiedad',
					value: null,
					props: {
						options: [],
						label: 'tipo',
						reduce: (i) => {return i.id}
					},
				},
				tipo_negocio:{
					id:'tipo_negocio',
					label: 'Tipo de Negocio',
					value: null,
					props: {
						options: [],
						label: 'tipo',
						reduce: (i) => {return i.id}
					},
				},

				pais_id:{
					id:'pais_id',
					label: 'Pais',
					value: null,
					api: 'states',
					props: {
						options: [],
						label: 'name',
						reduce: (i) => {return i.id}
					},
				},
				estado_id:{
					id:'estado_id',
					label: 'Departamentos',
					value: null,
					api: 'cities',
					props: {
						options: [],
						label: 'name',
						reduce: (i) => {return i.id}
					},
				},
				ciudad_id:{
					id:'ciudad_id',
					label: 'Ciudades',
					value: null,
					api: 'zonas',
					component: 'vSelect',
					props: {
						options: [],
						label: 'name',
						reduce: (i) => {return i.id}
					},
				},
				zona_id:{
					id:'zona_id',
					label: 'Zonas',
					value: null,
					api: 'barrio',
					component: 'vSelect',
					props: {
						options: [],
						label: 'name',
						reduce: (i) => {return i.id}
					},
				},
				barrio_id:{
					id:'barrio_id',
					label: 'Barrios',
					value: null,
					props: {
						options: [],
						label: 'name',
						reduce: (i) => {return i.id}
					},
				},
			},

		}
	},
	mutations: {
		/* Start Inmuebles */
		CLEAN_FILTER_POSITION: (state, value) => {
			state.filtros.filtro[value].props.options  = [];
		},
		SET_DETAIL: (state, value) => {
			state.detail = value;
		},
		SET_INMUEBLES: (state, value) => {
			Object.assign(state.grid, value);
		},
		SET_LIST: (state, value) => {
			state.list = value;
		},
		SET_OVERLAY: (state, value) => {
			state.grid.overlay = value;
		},
		/* Start Inmuebles */

		/* Start Filtros */
		SET_FILTER: (state, {props, data}) => {
			for(let prop in props){
				state.filtros.filtro[prop].props.options = data[props[prop]];
			}
		},
		DATA_FILTER: (state, value) => {
			state.filtros.data = value;
		},
		/* End Filtros */

		/* Start Location*/
		SET_LOCATION: (state, {prop, data}) => {
			state.filtros.filtro[prop].props.options = data;
		},
		/* End Location*/
	},
	actions: {
		getUbicacion(ctx, {id, location, prop}){
			return new Promise(resolve => {
				axiosIns.get(`api/location/${location}/${id}`)
				.then( res => {
					let {data} = res.data,
							key = Object.keys(data);
					ctx.commit('SET_LOCATION', {
						data: data[key[0]],
						prop
					});

					resolve(true);
				}).catch( err => {
					resolve(false);
					console.error(err);
				})
			});
		},
		getFilters(ctx){
			return new Promise(resolve => {
				axiosIns.get(`api/pagina_web/helpers-page-web`)
				.then( res => {
					let {data} = res.data;
					ctx.commit('SET_FILTER', {
						data,
						props: {
							tipo_inmueble: 'property_type',
							tipo_negocio: 'business_type',
							pais_id: 'countries',
						}
					});
					resolve(data);
				}).catch( err => {
					console.error(err);
				})
			});
		},
		getListInmuebles(ctx){
			return new Promise(resolve => {
				axiosIns({
					url: `api/pagina_web/filter/${hostname}`,
					method: 'post',
				}).then( res => {
					let {data} = res.data.data;
					ctx.commit('SET_LIST', data.slice(4, 8));
					resolve(true);
				}).catch( err => {
					resolve(false);
					console.error(err);
				})
			});
		},
		getInmuebles(ctx, params = {}){
			let {data} = ctx.state.filtros;
			return new Promise(resolve => {
				axiosIns({
					url: `api/pagina_web/filter/${hostname}`,
					method: 'post', params, data
				}).then( res => {
					let inmuebles = res.data.data;
					ctx.commit('SET_INMUEBLES', inmuebles);
					resolve(true);
				}).catch( err => {
					resolve(false);
					console.error(err);
				})
			});
		},
		getDetailInmuebles(ctx, slug){
			return new Promise(resolve => {
				axiosIns({
					url: `api/pagina_web/property_detail/${slug}`,
					method: 'get'
				}).then( res => {
					ctx.commit('SET_DETAIL', res.data.data.inmueble);
					resolve(true);
				}).catch( err => {
					resolve(false);
					console.error(err);
				})
			});
		},
	},
}