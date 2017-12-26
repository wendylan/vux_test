// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Home from './components/HelloFromVux'
import Test from './components/Test'
import Priceinfo from './components/Priceinfo'
import Priceinfox from './components/Priceinfo_xian'
import image from './components/image'
import alert from './components/alert'
import my from './components/my'
import data from './components/data'

import header from './components/header'
import scroller from './components/Scroller'
import refresh from './components/refresh'
import flexbox from './components/flexbox'
import scroller1 from './components/Scroller_kind1'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
	{
	  path: '/',
	  component: App,
	  children:[
	  			{
					path:'/Home',
					component:Home
				},
				{
					path:'/test',
					component:Test
				},
				{
					path:'/Priceinfo',
					component:Priceinfo,
				},
				{
					path:'/Priceinfox',
					component:Priceinfox
				},
				{
					path:'/image',
					component:image
				},
				{
					path:'/alert',
					component:alert
				},
				{
					path:'/my',
					component:my
				},
				{
					path:'/header',
					component:header
				},
				{
					path:'/data',
					component:data
				},
				{
					path:'/scroller',
					component:scroller
				},
				// {
				// 	path:'/refresh',
				// 	component:refresh
				// },
				{
					path:'/flexbox',
					component:flexbox
				},
				{
					path:'/scroller1',
					component:scroller1
				}
	  ]
	},
	
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
