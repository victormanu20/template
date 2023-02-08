import {axiosIns, hostname} from '@/libs/axios'

export default {
	namespaced: true,
	state: {
		grid: {
			data: [],
			overlay: false,
			total: 1,
			per_page: 1,
		},
		list: [],
	},
	mutations: {
		SET_GRID: (state, value) => {
			Object.assign(state.grid, value);
		},
		SET_LIST: (state, value) => {
			state.list = value.slice(0, 3);
		},
		SET_OVERLAY: (state, value) => {
			state.inmuebles.overlay = value;
		}
	},
	actions: {
		getBlogs(ctx){
			return new Promise(resolve => {
				if(ctx.state.grid.data.length === 0){
					axiosIns.get(`api/blogs/listado?code=${hostname}`)
					.then( res => {
						let {blogs} = res.data.data;
						ctx.commit('SET_GRID', blogs);
						ctx.commit('SET_LIST', blogs.data);
						resolve(blogs);
					}).catch( err => {
						resolve(err);
						console.error(err)
					});
				}
			});
		}
	},
}