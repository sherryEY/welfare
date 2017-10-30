import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello1 from '@/components/Hello1'
import Hello2 from '@/components/Hello2'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      component: HelloWorld,
      name: 'Hello'
    },
    {
      path: '/hello2',
      name: 'Hello2',
      component: Hello2
    },
    {
      path: '/hello1',
      name: 'Hello1',
      component: Hello1
    },
    {
      path: '/',
      name: 'page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    }
  ]
})
