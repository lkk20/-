// import Vue from 'vue'
// import Router from 'vue-router'

// Vue.use(Router)
//1
// export default new Router({
 
// })

//配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
//懒加载
const home =()=> import('views/home/home.vue')
const cart =()=> import('views/cart/cart.vue')
const profile =()=> import('views/profile/profile.vue')
const category =()=> import('views/category/category.vue')
const detail =()=> import('views/detail/detail.vue')
//安装
Vue.use(VueRouter)
//创建VueRouter
//解决 Navigating to current location 
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

const routes=[
	{
		path:'/',
		redirect:'/home'
	},{
		path:'/cart',
		component:cart
	},{
		path:'/profile',
		component:profile
	},{
		path:'/home',
		component:home
	},{
		path:'/category',
		component:category
	},
	{
		path:'/detail/:iid',
		component:detail
	}
	
  ]
const router = new VueRouter({
	routes,
	mode:'history'
   })
//将router传入到vue实例中
export default router