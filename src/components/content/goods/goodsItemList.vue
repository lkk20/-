<template>
	<div class="goods-item-list" @click="itemClick">
		<div>
			<img :src="showImage" @load="imageLoad">
			<div>
				<p>{{goodsItem.title}}</p>
				<span class="price">{{goodsItem.price}}</span>
				<span class="collect">{{goodsItem.cfav}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'goodsItemList',
		props:{
			goodsItem:{
				type:Object,
				default (){
					return{}
				}
			}
		},
		computed:{
			showImage(){
				return this.goodsItem.image || this.goodsItem.show.img
			}
		},
		methods:{
			imageLoad(){
				this.$bus.$emit('imageLoad')
			},
			itemClick(){
				if(this.goodsItem.iid){
					this.$router.push('/detail/'+this.goodsItem.iid)
				}else{
					this.$router.push('/detail/'+this.goodsItem.shop_id)
				}
				
			}
		}
	}
</script>

<style scoped>
	.goods-item-list{
		width: 100%;
		border: 2px white solid;
		font-size: 14px;
		box-sizing: border-box;
		break-inside: avoid;
		text-align: center;
	}
	.goods-item-list p{
		line-height: 15px;
		height: 30px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: pre-wrap;
		margin-bottom: 3px;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.goods-item-list .price{
		color: var(--color-high-text);
		margin-right: 20px;
	}
	.goods-item-list .collect {
	  position: relative;
	}
	.goods-item-list .collect::before {
	  content: '';
	  position: absolute;
	  left: -15px;
	  top: 0;
	  width: 14px;
	  height: 14px;
	  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
	}
	.goods-item-list img{
		width: 100%;
		border-radius: 5px;
	}
	
</style>
