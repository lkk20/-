<template>
	<tabBar>
		<tabBarItem path='/home'>
			<img slot='item-icon' src="~assets/img/tabbar/home.png">
			<img slot='item-icon-active' src="~assets/img/tabbar/home_active.png">
			<div slot='item-text'>首页</div>
		</tabBarItem>
		<tabBarItem path='/category'>
			<img slot='item-icon' src="~assets/img/tabbar/category.png">
			<img slot='item-icon-active' src="~assets/img/tabbar/category_active.png">
			<div slot='item-text'>分类</div>
		</tabBarItem>
		<tabBarItem path='/cart'>
			<img slot='item-icon' src="~assets/img/tabbar/cart.png">
			<img slot='item-icon-active' src="~assets/img/tabbar/cart_active.png">
			<div slot='item-text'>购物车</div>
		</tabBarItem>
		<tabBarItem path='/profile'>
			<img slot='item-icon' src="~assets/img/tabbar/profile.png">
			<img slot='item-icon-active' src="~assets/img/tabbar/profile_active.png">
			<div slot='item-text'>我的</div>
		</tabBarItem>
	</tabBar>
</template>

<script>
	import tabBar from 'components/common/tab-bar/tabBar'
	import tabBarItem from 'components/common/tab-bar/tabBarItem'
	export default {
	  name: 'mainTabBar',
	  components:{
		  tabBar,
		  tabBarItem
	  }
	}
</script>

<style>
</style>
