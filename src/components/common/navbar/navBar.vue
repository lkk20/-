<template>
	<div class="nav-bar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default{
		name:'navBar'
	}
</script>

<style scoped>
	.nav-bar{
		display: flex;
		height: 44px;
		line-height: 44px;
		box-shadow:0 15px 10px rgba(170, 255, 255, 0.2);
		text-align: center;
	}
	.left{
		width: 60px;
	}
	.center{
		flex: 1;
	}
	.right{
		width: 60px;
	}
</style>
