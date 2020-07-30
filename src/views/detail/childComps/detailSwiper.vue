<template>
		<Swiper class="detail-swiper">
			<SwiperItem v-for='item in topImages'>
				<img :src="item" alt="无法显示图片">
			</SwiperItem>
		</Swiper>
</template>

<script>
	import {Swiper,SwiperItem} from 'components/common/swiper'
	export default{
		name:'detailSwiper',
		components:{
			Swiper,SwiperItem
		},
		props:{
			topImages:{
				type:Array,
				default(){
					return []
				}
			}
		},
	}
</script>

<style scoped>
	.detail-swiper{
		height: 300px;
	}
</style>
