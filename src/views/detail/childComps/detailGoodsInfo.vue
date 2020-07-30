<template>
	<div class="base-info" v-if="goods.services">
		<div class="info-title">{{goods.title}}</div>
		<div class="price">
			<span class="n-price">{{goods.newPrice}}</span>
			<span class="o-price">{{goods.oldPrice}}</span>
			<span class="discount" v-if="goods.discount">{{goods.discount}}</span>
		</div>
		<div class="collect" v-if="goods.columns">
			<span>{{goods.columns[0]}}</span>
			<span>{{goods.columns[1]}}</span>
			<span>{{goods.services[goods.services.length-1].name}}</span>
		</div>
		<div class="services">
			<div v-for="index in goods.services.length-1" :key="index">
				<img :src="goods.services[index-1].icon">
				<span>{{goods.services[index-1].name}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'detailGoodsInfo',
		props:{
			goods:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	
	.info-title{
		color: #222;
	}
	.base-info{
		margin-top: 15px;
		padding: 0 8px;
		color: #999;
		border-bottom: 5px solid #f2f5f8;
	}
	.price {
	  margin-top: 10px;
	}
	
	.price .n-price {
	  font-size: 24px;
	  color: var(--color-high-text);
	}
	
	.price .o-price {
	  font-size: 13px;
	  margin-left: 5px;
	  text-decoration: line-through;
	}
	
	.price .discount {
	  font-size: 12px;
	  padding: 2px 5px;
	  color: #fff;
	  background-color: var(--color-high-text);
	  border-radius: 8px;
	  margin-left: 5px;
	
	  /*让元素上浮一些: 使用相对定位即可*/
	  position: relative;
	  top: -8px;
	}
	.collect {
	  margin-top: 15px;
	  line-height: 30px;
	  display: flex;
	  font-size: 13px;
	  border-bottom: 1px solid rgba(100,100,100,.1);
	  justify-content: space-between;
	}
	
	.services {
	  display: flex;
	  justify-content: space-between;
	  line-height: 60px;
	  font-size: 10px;
	}
	
	.services>div>img{
	  width: 14px;
	  position: relative;
	  top: 3px;
	}
</style>
