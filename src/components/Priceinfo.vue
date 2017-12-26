<script>
	import list  from '../../list.json';
	import {Selector, Group ,XButton, Box, XTable,XHeader,Flexbox, FlexboxItem, Masker} from 'vux'

	export default {
		created(){
			var Mdata = list.body.data;
			this.Marketdata = Mdata;
		},
		data(){
			return{
				demo01:'',
				list:[{key:'zj',value:'珠江新城项目'},{key:'lg',value:'萝岗项目'},{key:'hp',value:'黄埔项目'}],
				steelMark:[],
				Marketdata:[],
			}
		},
		components:{
			Group,
			Selector,
			XButton, 
			Box,
			XTable,
			XHeader,
			Flexbox,
			FlexboxItem,
			Masker
			
		},
		// mounted:function(){
		// 	this.$http.get('http://www.gangerp-local.com/api/getSteelMarketList').then(function (response){
		// 		this.steelMark=response.body;
		// 		console.log(this.steelMark);
		// 	},function (response){
		// 		  console.log('请求地址出错了，请再次请求');
		// 	});
		// },
		
	}
</script>

<template>
<div>
	<!-- 头部导航栏 -->
	<div class="vux_demo">
		<x-header>每日价格
			<a slot="right" >
					<x-icon type="ios-contact"  size="30" style="margin-top:-5px;" fill="white"></x-icon>
			</a>
			
		</x-header>
	</div>
	<div class="search">
	   <!-- 搜索选择框 -->
		<group>
	      <selector placeholder="请选择项目名称" v-model="demo01" :options="list"></selector>
	    </group>

		<div  class="content" v-for="mdata in Marketdata" >
	    <router-link to="/Priceinfox">
	    	<masker style="border-radius: 2px;" color="F9C90C" :opacity="0.8" >
		        <div slot="content" class="m-title">
		           广州钢材现货市场{{mdata.price_queue == 1 ? '第二次' : '首次'}}报价<x-icon type="ios-arrow-forward" size="30" class="icon_test" fill="#d9d9d9"></x-icon>

		          <br/>
		          <span class="m-time">{{mdata.updated_at}}</span>
		        </div>
	      </masker>
	    </router-link>
     </div>

	</div>
</div>
	
</template>

<style scoped>
	.vux_demo {
	  text-align: center;
	  background: #333;
	  color: #fff;
	  position: fixed;
      top: 0;
      width: 100%;
      z-index: 2;
	}
	.search{
		margin-top: 50px;
		padding-bottom: 50px;
        background-color: #e9e9e9;
        vertical-align: 
	}
	.content{
		text-align: center;
		height:50px;
		border-bottom: 1px solid #D9D9D9;
		border-top: 1px solid #D9D9D9;
		width: 99%;
		background-color: #fff;
		padding: 10px 0;
		margin: 10px auto;
	}
	.icon_test{
		float:right;
		margin-top:10px;
	}
	.m-title{
		font-size: 16px;
		color: #333;
		font-weight: bold;
	}
	.m-time{
		color:#cdcdcd;
	}
</style>