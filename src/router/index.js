import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Temp from '@/components/Temp'
import Tables from '@/components/Tables'
import Cars from '@/components/Cars'
import Car from '@/components/Car'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/temp',
      name: 'Temp',
      component: Temp
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tables',
      name: 'Tables',
      component: Tables
    },
    {
      path: '/cars',
      name: 'Cars',
      component: Cars
    },
    {
      path: '/car/:id',
      name: 'Car',
      component: Car
    },
  ],
  mode: 'history'
})
