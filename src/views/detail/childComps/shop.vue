<template>
	<div class="shop-info">
		<div class="shop-top">
			<img :src="shop.logo">
			<span class="name">{{shop.name}}</span>
		</div>
		<div class="shop-middle-left">
			<div class="all-sells">
			  <div class="sells-count">
			    {{Math.floor(shop.sells/10000).toFixed(1)+'万'}}
			  </div>
			  <div class="sells-text">总销量</div>
			</div>
			<div class="all-goods">
				<div class="goods-count">
				  {{shop.goodsCount}}
				</div>
				<div class="goods-text">全部宝贝</div>
			</div>
		</div>
		<div class="shop-middle-right">
			<div class="desc" v-for="item in shop.score">{{item.name}}
				<span class="grade" :style="{color:(item.isBetter?'red':'green')}">
				{{item.score}}
				</span>
				<span class="evaluate" :style="{background:(item.isBetter?'red':'green')}">
				{{item.isBetter ? '高':'低'}}
				</span> 
			</div>
		</div>
		<div class="come-in">进店逛逛</div>
	</div>
</template>

<script>
	export default{
		name:'shop',
		props:{
			shop:{
				type:Object,
				 default(){
					return{}
				}
			}
		}
	}
</script>

<style scoped>
	.shop-info{
		z-index: 10;
	}
	.shop-top{
		margin: 25px 0 25px 10px;
		align-items: center;
		display: flex;
	}
	.shop-top .name{
		display: inline-block;
		margin-left:20px ;
		height: 53px;
		line-height: 50px;
	}
	.shop-top img{
		display: inline-block;
		width: 50px;
		border: 1px solid darkgray;
		border-radius: 25px;
	}
	
	.shop-middle-left{
		color: #000000;
		margin-top: 15px;
		float: left;
		
	}
	.all-sells{
		float: left;
		margin: 0 20px;
		text-align: center;
	}
	.all-goods{
		float: left;
		text-align: center;
		padding-right: 20px;
		border-right: #9DA0A4 1px solid;
	}
	.sells-count,.goods-count{
		font-size: 18px;
		padding-bottom:10px;
	}
	.shop-middle-right{
		font-size: 14px;
		line-height: 26px;
		margin-left: 15px;
		float: left;
		
	}
	.grade{
		display: inline-block;
		margin-left: 5px;
		width: 25px;
	}
	.evaluate{
		color: white;
		text-align: center;
		display: inline-block;
		margin-left: 5px;
		width: 20px;
		height: 23px;
	}
	.come-in{
		width: 100px;
		color: wheat;
		text-align: center;
		margin: 25px auto;
		border-radius: 10px;
		clear: both;
		background-color: #009926;
	}
</style>
