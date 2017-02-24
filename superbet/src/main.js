
import Vue from 'vue'    
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import configRouter from './config-router'
import vueDirective from './vue-directive'
import recodeDirective from './recode-directive'

//挂载

Vue.use(VueRouter)
Vue.use(VueResource)


var router = new VueRouter({
	routes:configRouter
})

//创建一个Vue的根实例
new Vue({
	el: '#app',
	router:router,
	template: '<App/>',
	components: { App }
})

