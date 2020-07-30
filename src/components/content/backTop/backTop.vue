<template>
	<div class="back-top">
		<img src="~assets/img/common/top.png">
	</div>
</template>

<script>
	import Scroll from 'components/common/scroll/Scroll'
	export default{
		name:'backTop'
	}
</script>

<style scoped>
	.back-top{
		position: fixed;
		right: 8px;
		bottom: 50px;
	}
	img{
		width: 43px;
		height: 43px;
	}
</style>
