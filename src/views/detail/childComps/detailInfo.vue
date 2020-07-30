<template>
	<div class="detailInfo" v-if='detailInfos.detailImage'>
		<div v-for="item in detailInfos.detailImage[0].list">
			<img :src="item" alt="">
		</div>
	</div>
</template>

<script>
	export default{
		name:'detailInfo',
		props:{
			detailInfos:{
				type:Object,
				default(){
					return{}
				}
			}
		}
	}
</script>

<style scoped>
	.detailInfo > div img{
		width: 100%
	}
</style>
