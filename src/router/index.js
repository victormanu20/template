import HomeApp from '@/views/HomeApp/HomeApp'
import ListInmuebles from '@/views/Inmuebles/ListInmuebles'
// import Blogs from '@/pages/Blogs/Blogs'
// import Blogs from '@/pages/Blogs/Blogs'
// import InmuebleDetail from '@/components/view/inmueble/InmuebleDetail'

const routes = [
    {
      path: '/',
      name: 'inicio',
      text: 'Inicio',
      component: HomeApp
    },
    {
      path: '/inmuebles',
      text: 'Inmuebles',
      name: 'inmuebles',
      component: ListInmuebles,
      // children:[
      //   // {
      //   //   path: 'catalogo/',
      //   //   name: 'catalogo-inmuebles',
      //   //   component: InmueblesStore
      //   // },
      //   // {
      //   //   path: 'detalle/:slug',
      //   //   name: 'inmuebles-detalle',
      //   //   component: InmuebleDetail
      //   // }
      // ]
    },
    // {
    //   path: '/blog/',
    //   name: 'blog',
    //   text: 'Blog',
    //   redirect: { name: 'blog-articulos' },
    //   component: Blogs,
    // },
  ]
export {routes}