import {axiosIns, hostname} from '@/libs/axios'

export default {
	namespaced: true,
	state: {
		data: {
			userdata: {},
			configuracion: {},
		},
	},
	mutations: {
		SET_DATA: (state, value) => {
			for(let prop in state.data)
				if(value[prop])
					state.data[prop] = value[prop];
		},
	},
	actions: {
		getData(ctx){
			return new Promise(resolve => {
				axiosIns.get(`api/inmueble/${hostname}`)
				.then( res => {
					let {data} = res.data;
					ctx.commit('SET_DATA', data);
					resolve(data);
				}).catch( err => {
					console.error(err);
				})
			});
		}
	},
}