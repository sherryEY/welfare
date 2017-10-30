// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Group, Cell, CellBox, Tab, TabItem, Swiper, SwiperItem, XDialog, XButton} from 'vux'
// import Child1 from '@/components/Child1'
// import Child2 from '@/components/Child2'
Vue.use(Group)
Vue.use(Cell)
Vue.use(Tab)
Vue.use(TabItem)
Vue.use(Swiper)
Vue.use(SwiperItem)
Vue.use(XDialog)
Vue.use(XButton)
Vue.use(CellBox)
// Vue.use(Child1)
// Vue.use(Child2)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
