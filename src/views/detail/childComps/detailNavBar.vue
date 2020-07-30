<template>
	<div>
		<navBar>
			<div slot='left' @click="backClick">
				<img src="~assets/img/common/back.svg">
			</div>
			<div slot='center' class="title">
				<div v-for="(item,index) in titles" 
				class="title-item"
				:class='{active:currentIndex === index}'
				@click="titleClick(index)">{{item}}</div>
			</div>
		</navBar>
	</div>
</template>

<script>
	import navBar from 'components/common/navbar/navBar'
	export default{
		name:'detailNavBar',
		components:{
			navBar
		},
		data(){
			return{
				titles:['商品','参数','评论','推荐'],
				currentIndex:0
			}
		},
		methods:{
			titleClick(index){
				this.currentIndex = index
				this.$emit('titleClick',index)
			},
			backClick(){
				this.$router.back()
			}
		}
		
	}
</script>

<style scoped>
	.tltle{
		position: flex;
	}
	.title-item{
		width: 25%;
		float: left;
		font-size: 14px;
	}
	.active{
		color: var(--color-high-text);
	}
	img{
		margin-top: 10px;
	}
</style>
