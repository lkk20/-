<template>
	<div id="home">
		<navBar class='home-nav'><div slot="center">购物街</div></navBar>
		<tabControl :titles="['流行','新款','精选']"
		@tabClick='tabClick'
		ref='tabControltop'
		class='isTop'
		v-show='isTopFixed'
		></tabControl>
		<Scroll class="content" 
				ref='scroll' 
				:probeType='3' 
				@scroll='contentscroll' 
				:pullUpLoad='true' 
				@pullingUp='loadMore' >
			<homeSwiper :banners='banners' @homeSwiperImageLoad='homeSwiperImageLoad'></homeSwiper>
			<recommendView :recommends='recommends'></recommendView>
			<featureView></featureView>
			<tabControl :titles="['流行','新款','精选']"
			@tabClick='tabClick'
			ref='tabControl'
			></tabControl>
			<goodsList :goods="goods[currentType].list"></goodsList>
		</Scroll>
		<div @click="backTop" v-show="isShow"><backTop></backTop></div>
	</div>
</template>

<script>
	import navBar from 'components/common/navbar/navBar'
	import homeSwiper from './childComps/homeSwiper'
	import recommendView from './childComps/recommendView'
	import tabControl from 'components/content/tabControl/tabControl'
	import featureView from './childComps/feature'
	import {getHomeMultidata,getHomeGoods} from 'network/home'
	import goodsList from 'components/content/goods/goodsList'
	import Scroll from 'components/common/scroll/Scroll'
	import backTop from 'components/content/backTop/backTop'
	
	export default{
		name:'home',
		components:{
			navBar,
			homeSwiper,
			featureView,
			tabControl,
			goodsList,
			recommendView,
			Scroll,
			backTop
		},
		data(){
			return{
				banners:[],
				recommends:[],
				isShow:false,
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]}
				},
				currentType:'pop',
				tabOffsetTop:0,
				isTopFixed:false
			}
		},
		created() {
			//请求多个数据
			this.getHomeMultidata()
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
			
		},
		mounted(){
			
			
			const refresh = this.debounce(
			this.$refs.scroll.scroll.refresh,1000
			)
			this.$bus.$on('imageLoad',()=>{
			refresh()
			})
		},
		methods:{
			//防抖
			debounce(func,delay){
				let timer = null
				return function(...args){
					if(timer){ clearTimeout(timer)}
					timer = setTimeout(()=>{
						func.apply(this,args)
					},delay)
				}
			},
			//网络请求
			getHomeMultidata(){
				getHomeMultidata().then(res=>{
					this.banners = res.data.banner.list,
					this.recommends = res.data.recommend.list
					})
			},
			getHomeGoods(type){
				const page = this.goods[type].page+1
				getHomeGoods(type,page).then(res=>{
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page++
					this.$refs.scroll.finishPullUp()
					})
			},
			//事件监听
			tabClick(index){
				switch(index){
					case 0:
					this.currentType = 'pop'
					break
					case 1:
					this.currentType = 'new'
					break
					case 2:
					this.currentType = 'sell'
				}
				this.$refs.tabControl.currentIndex = index
				this.$refs.tabControltop.currentIndex = index
			},
			backTop(){
				this.$refs.scroll.scroll.scrollTo(0,0,500)
			},
			contentscroll(position){
				this.isShow = (-position.y)> 500
				this.isTopFixed = (-position.y)>this.tabOffsetTop
			},
			loadMore(){
				this.getHomeGoods(this.currentType)
				this.$refs.scroll.scroll.refresh()
			},
			homeSwiperImageLoad(){
				this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
				console.log(this.tabOffsetTop)
			}
		}
	}
</script>

<style scoped>
	#home{
		height: 100vh;
	}
	.home-nav{
		background-color: pink;
		color: white;
		z-index: 1;
		
	}
	.content{
		overflow: hidden;
		position: absolute;
		top:44px;
		bottom: 49px;
	}
	.isTop{
		position: relative;
		z-index: 1;
	}
</style>
