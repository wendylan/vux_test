<script>
	import {XHeader} from 'vux';
	export default{
		data(){
			return{
				msg:''
			}
		},
		components:{
			XHeader,
		}
	}
</script>
<template>
	<div>
		<!-- 头部导航栏 -->
		<div class="vux_demo">
			<x-header>后台数据</x-header>
		</div>
		<div class="contain">
			
		</div>
	</div>
</template>
<style scroped>
	.vux_demo {
	  text-align: center;
	  color: #fff;
	  position: fixed;
      top: 0;
      width: 100%;
      z-index: 2;
	}
</style>