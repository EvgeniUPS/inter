import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Temp from '@/components/Temp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/temp',
      name: 'Temp',
      component: Temp
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ],
  mode: 'history'
})
