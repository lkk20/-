<template>
	<div id="detail">
		<detailNavBar class='detailNavBar' @titleClick='titleClick'></detailNavBar>
		<Scroll class='content' ref='scroll'>
			<detailSwiper :topImages='topImages'></detailSwiper>
			<detailGoodsInfo :goods='goods'></detailGoodsInfo>
			<shop :shop='shop'></shop>
			<commentInfo :commentInfo='commentInfo' ref='comment'></commentInfo>
			<detailInfo :detailInfos='detailInfos' ref='detail'></detailInfo>
			<paramsInfo :paramsInfo='paramsInfo' ref='params'></paramsInfo>
			<goodsList :goods='recommendList' ref='goods'></goodsList>
			<div @click="backTop" v-show="isShow"><backTop></backTop></div>
			<detailBottomBar @addToCart='addToCart'></detailBottomBar>
		</Scroll>
	</div>
</template>

<script>
	import detailNavBar from './childComps/detailNavBar'
	import detailSwiper from './childComps/detailSwiper'
	import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
	import detailGoodsInfo from './childComps/detailGoodsInfo'
	import shop from './childComps/shop'
	import Scroll from 'components/common/scroll/Scroll'
	import detailInfo from './childComps/detailInfo'
	import paramsInfo from './childComps/detailParamsInfo'
	import commentInfo from './childComps/commentInfo'
	import goodsList from 'components/content/goods/goodsList'
	import detailBottomBar from './childComps/detailCartBar'
	import backTop from 'components/content/backTop/backTop'
	
	export default{
		name:'detail',
		components:{
			detailNavBar,
			detailSwiper,
			detailGoodsInfo,
			shop,
			Scroll,
			detailInfo,
			paramsInfo,
			commentInfo,
			goodsList,
			detailBottomBar,
			backTop
		},
		methods:{
			titleClick(index){
				this.$refs.scroll.scroll.scrollTo(0,-this.themeTopYs[index],300)
			},
			addToCart(){
				const product ={}
				product.image = this.topImages[0];
				product.title = this.goods.title;
				product.desc = this.goods.desc;
				product.newPrice = this.goods.newPrice;
				product.iid = this.iid;
				this.$store.commit('addCart',product)
			},
			backTop(){
				this.$refs.scroll.scroll.scrollTo(0,0,500)
			},
			contentscroll(position){
				this.isShow = (-position.y)> 500
			}
		},
		data(){
			return {
				iid:null,
				topImages:[],
				goods:{},
				shop:{},
				detailInfos:{},
				paramsInfo:{},
				commentInfo:{},
				recommendList:[],
				themeTopYs:[],
				isShow:false,
				tabOffsetTop:0,
				isTopFixed:false
			}
		},
		created(){
			this.iid = this.$route.params.iid
			
			getDetail(this.iid).then(res=>{
				const data = res.result;
				//图片
				this.topImages = data.itemInfo.topImages
				//商品信息
				this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
				console.log(this.goods)
				//店铺信息
				this.shop = new Shop(data.shopInfo)
				console.log(this.shop)
				this.detailInfos = data.detailInfo
				console.log(this.detailInfos)
				this.paramsInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
				console.log(this.paramsInfo)
				if (data.rate.list) {
				  this.commentInfo = data.rate.list[0];
				  console.log(this.commentInfo)
				}
				this.$nextTick(()=>{
					this.themeTopYs=[]
					this.themeTopYs.push(0)
					this.themeTopYs.push(this.$refs.detail.$el.offsetTop)
					this.themeTopYs.push(this.$refs.params.$el.offsetTop)
					this.themeTopYs.push(this.$refs.goods.$el.offsetTop)
				})
			})
			getRecommend().then(res => {
			  this.recommendList = res.data.list
			  console.log(this.recommendList)
			})
		}
	}
</script>

<style scoped>
	#detail{
		position:relative;
		z-index: 2;
		background-color: white;
		height: 100vh;
	}
	.content{
		position: absolute;
		top: 44px;
		bottom: 49px;
		height: calc(100%-93px);
	}
	.detailNavBar{
		position: fixed;
		width: 100%;
		z-index: 4;
		background-color: white;
	}
</style>
