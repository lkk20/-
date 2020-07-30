<template>
	<div class="goods-list">
		<goodsItemList v-for='item in goods' :goodsItem='item'>
		</goodsItemList>
	</div>
</template>

<script>
	import goodsItemList from './goodsItemList'
	export default{
		name:'goodsList',
		components:{
			goodsItemList
		},
		props:{
			goods:{
				type:Array,
				default(){
					return[]
				}	
			}
		}
	}
</script>

<style scoped>
	.goods-list{
		column-count: 2;
		column-gap:0;
		break-inside: avoid;
	}
</style>
