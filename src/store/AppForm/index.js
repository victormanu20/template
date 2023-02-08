import {axiosIns} from '@/libs/axios'

export default {
	namespaced: true,
	actions: {
		sendForm(ctx, {api, data}){
			return new Promise((resolve, reject) => {
				axiosIns.post(api, data)
				.then(() => {resolve()})
				.catch( err => {reject(err)});
			});
		},
	},
}