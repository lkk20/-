<template>
  <div id="app">
		<keep-alive exclude="detail">
			<router-view></router-view>
		</keep-alive>
    <mainTabBar></mainTabBar>
  </div>
</template>

<script>
import mainTabBar from 'components/content/mainTabBar/mainTabBar.vue'

export default {
  name: 'App',
  components:{
	mainTabBar
  }
}
</script>

<style>
	@import url("assets/css/base.css");
</style>
