import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import index from '@/page/index'
import table from '@/page/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'homerrr',
      component: home
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/table',
      name: 'table',
      component: table
    }
  ]
})
