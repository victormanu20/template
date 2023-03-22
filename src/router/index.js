import HomeApp from '@/views/HomeApp/HomeApp.vue';
import ListInmuebles from '@/views/Inmuebles/ListInmuebles.vue';
import InmueblesSelected from '@/views/InmueblesSelectedView.vue';
// import Blogs from '@/pages/Blogs/Blogs'
// import Blogs from '@/pages/Blogs/Blogs'
// import InmuebleDetail from '@/components/view/inmueble/InmuebleDetail'

const routes = [
    {
      path: '/',
      name: 'inicio',
      component: HomeApp
    },
    {
      path: '/inmuebles',
      name: 'inmuebles',
      component: ListInmuebles,

    },
    {
      path: '/detalle/:slug',
      name: 'inmuebles-detalle',
      component: InmueblesSelected
    }
    // {
    //   path: '/blog/',
    //   name: 'blog',
    //   text: 'Blog',
    //   redirect: { name: 'blog-articulos' },
    //   component: Blogs,
    // },
  ]
export {routes}