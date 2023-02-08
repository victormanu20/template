import {axiosIns, hostname} from '@/libs/axios'

export default {
	namespaced: true,
	state: {
		banners: [],
	},
	mutations: {
		SET_BANNER: (state, value) => {
			state.banners = value
		}
	},
	actions: {
		getBanners(ctx){
			return new Promise(resolve => {
				axiosIns.get(`api/banners/listado?code=${hostname}`)
				.then( res => {
					const {banners} = res.data.data;
					ctx.commit('SET_BANNER', banners);
					resolve(banners);
				}).catch( err => {console.error(err);});
			});
		}
	},
}