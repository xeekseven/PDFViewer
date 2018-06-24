import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import content from '@/components/Viewer/pageContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      name: 'index',
      component: index,
      children:[
        {
          path: '/index',
          name: 'index',
          component: content,
        }
      ]
    }
  ]
})
