import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import List from './components/List.vue'
import Detail from './components/Detail.vue'
import Hello from './components/Hello.vue'
import Material from './components/Material.vue'
import Zoom from './components/Zoom.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
	history: false,
	initialTransition: 'show',
	transition: ['left','right'],
	saveScrollPosition: true
})

router.map({
  '/list': {
    component: List
  },
  '/detail': {
    component: Detail
  },  
  '/hello': {
    component: Hello
  },
  '/material': {
    component: Material
  },
  '/zoom': {
    component: Zoom
  }  
})

router.redirect({
  '*': '/list'
})

router.start(App, '#app')