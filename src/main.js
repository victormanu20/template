import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store/index.js'
import bootstrap from 'bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import "@fancyapps/ui/dist/fancybox.css";


const app = createApp(App);

app.use(store)
app.use(bootstrap)
app.mount('#app')
