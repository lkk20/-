<template>
<div id="tab-bar">
	<slot></slot>
</div>
</template>

<script>
	export default{
		name:'tabBar'
	}
</script>

<style>
#tab-bar{
	display: flex;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	box-shadow:0 -15px 10px rgba(170, 255, 255, 0.2) ;
}
</style>
