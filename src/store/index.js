import {createStore,createLogger} from 'vuex'


import AppData from '@/store/AppData'
import AppInmuebles from '@/store/AppInmuebles'
import AppBanner from '@/store/AppBanner'
import AppBlog from '@/store/AppBlog'
import AppForm from '@/store/AppForm'



const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    AppData,
    AppInmuebles,
    AppBanner,
    AppBlog,
    AppForm,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})