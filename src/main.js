import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store/index.js'
import bootstrap from 'bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import "@fancyapps/ui/dist/fancybox.css";
import { routes } from '@/router/'
import {createRouter,createWebHashHistory} from 'vue-router'


const app = createApp(App);

// // Rutas
// app.use(VueRouter)
// const router = new VueRouter({
//   mode: 'history',
//   scrollBehavior(to) {
//     if(to.hash){
//       return{
//         selector: to.hash
//       }
//     }else{
//       return{
//         y:0
//       }
//     }
//   },
//   routes
// })

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

app.use(store)
app.use(router)
app.use(bootstrap)
app.mount('#app')
