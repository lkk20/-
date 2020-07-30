<template>
	<Swiper>
		<SwiperItem v-for='item in banners'>
			<a :href="item.link">
				<img :src="item.image" alt="无法显示图片" @load="imageLoad">
			</a>
		</SwiperItem>
	</Swiper>
</template>

<script>
	import {Swiper,SwiperItem} from 'components/common/swiper'
	export default{
		name:'homeSwiper',
		props:{
			banners:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			Swiper,
			SwiperItem
			},
		data(){
			return{
				isLoad:false
			}
		},
		methods:{
			imageLoad(){
				if(!this.isLoad){
					this.$emit('homeSwiperImageLoad')
				}
				this.isLoad = true
			}
		}
		}
</script>

<style scoped>
</style>
