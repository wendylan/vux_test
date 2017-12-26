<script>
	import {Tabbar,TabbarItem} from 'vux';
	export default{
		data(){
			return {
				name:'',
			}
		},
		components:{
			Tabbar, 
			TabbarItem
		}
	}
	
</script>
<template>
	<div>
		<!-- 导航栏底部 -->
		<div class="foot">
			<tabbar>
		      <tabbar-item link="/Home">
		        <x-icon slot="icon" type="home" fill="#35495e"></x-icon>
		        <span slot="label">主页</span>
		      </tabbar-item>
		      <tabbar-item show-dot link="/Priceinfo">
		         <x-icon slot="icon" type="heart" fill="#35495e"></x-icon>
		        <span slot="label">钢材价格</span>
		      </tabbar-item>
		      <tabbar-item selected link="/data">
		        <x-icon slot="icon" type="search" fill="#35495e"></x-icon>
		        <span slot="label" >运费查询</span>
		      </tabbar-item>
		      <tabbar-item badge="2" link="/test">
		        <x-icon slot="icon" type="earth" fill="#35495e"></x-icon>
		        <span slot="label" >历史数据</span>
		      </tabbar-item>
		      <tabbar-item show-dot link="/my">
		        <x-icon slot="icon" type="information" fill="#35495e"></x-icon>
		        <span slot="label" >数据管理</span>
		      </tabbar-item>
		    </tabbar>

		</div>
	</div>
</template>
<style scoped>
	.foot{
		margin:0 auto;
		position: fixed;
		bottom: 0;
		width: 100%;
	}
/*	.weui-tabbar__label{
		color: #35495e;
	}*/
</style>