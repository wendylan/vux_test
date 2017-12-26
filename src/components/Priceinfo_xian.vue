<script>
	import contentM from '../../content.json';

	import {XHeader,Selector, Group,XInput,XButton,Checklist,XTable,Radio, XDialog,XSwitch} from 'vux';
	export default{
		created(){
			var contentTmp = contentM.body.data.childResult;
			this.contentMdata = contentTmp;
		},
		data(){
			return{
				demo01:'',
				list:[{key:'gz',value:'广州市'},{key:'sg',value:'韶关市'},{key:'sz',value:'深圳市'},{key:'sz',value:'珠海市'},{key:'sz',value:'汕头市'},{key:'sz',value:'佛山市'},{key:'sz',value:'江门市'},{key:'sz',value:'茂名市'},{key:'sz',value:'肇庆市'},{key:'sz',value:'梅州市'}],
				demo02:'',
				list02:[{key:'sz',value:'市辖区'},{key:'sz',value:'越秀区'},{key:'sz',value:'海珠区'}],

				contentMdata:[],
				
				 menus: {
			        menu1: 'Take Photo',
			        menu2: 'Choose from photos'
			      },
			      showMenus:false,

			      showScrollBox: false,
			}
		},
		components:{
			XHeader,
			Selector,
			Group,
			XInput,
			XButton,
			Checklist,
			XTable,
			Radio,
			XDialog,
			XSwitch
		},
		
	}
</script>
<template>
	<div>
		<!-- 头部导航栏 -->
		<div class="vux_demo">
			<x-header>报价详情
				<a slot="right" >
					<x-icon type="ios-contact"  size="30" style="margin-top:-5px;" fill="white"></x-icon>
				</a>
			</x-header>
			<!-- <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">报价详情</x-header> -->
		</div>
		<div class="contain">
			<group>
		      <selector placeholder="所属市区" v-model="demo01" :options="list" class="select"></selector>
		      <selector placeholder="区县" v-model="demo02" :options="list02" class="select"></selector>
		      <x-input placeholder="详细地址" class="where"></x-input>
		      <x-button mini type="primary"  class="search">查询</x-button>
		    </group>

		    <group style="padding-top: 300px">
		      <x-switch v-model="showScrollBox" title="long long content"></x-switch>
		    </group>

		    <div v-transfer-dom>
		      <x-dialog v-model="showScrollBox" class="dialog-demo">
		        <p class="dialog-title">Long content</p>
		        <div class="img-box" style="height:100px;padding:15px 0;overflow:scroll;-webkit-overflow-scrolling:touch;">
		          <p v-for="i in 20">{{i}}</p>
		        </div>
		        <div @click="showScrollBox=false">
		          <span class="vux-close"></span>
		        </div>
		      </x-dialog>
		    </div>
		    
		    <!-- <div>
		    	<input type="radio" name="price" id="line" selected><lable for="line">直送价</lable>
		    	<input type="radio" name="price" id="one"><lable for="one">自提价</lable>
		    	<input type="radio" name="price" id="cha"><lable for="cha">差价</lable>
		    </div> -->
		    
			
			<x-table :cell-bordered="false" style="background-color:#fff;">
		        <thead>
		          <tr>
		            <th>品名</th>
		            <th>规格</th>
		            <th>材质</th>
		            <th>品牌</th>
		            <th>网价</th>
		            <th>库存情况</th>
		            <th>货物品质</th>
		          </tr>
		        </thead>
		        <tbody v-for="mcon in contentMdata">
		          <tr>
		            <td>{{mcon.cate_spec}}</td>
		            <td>{{mcon.size}}</td>
		            <td>{{mcon.material}}</td>
		            <td>{{mcon.brand}}</td>
		            <td>{{mcon.price}}</td>
		            <td>{{mcon.inventory}}</td>
		            <td>{{mcon.product_status}}</td>
		          </tr>
		        </tbody>
		    </x-table>


		</div>
	</div>
</template>
<style lang="less" scoped>
@import '~vux/src/styles/close';
.dialog-demo {
  .weui-dialog{
    border-radius: 8px;
    padding-bottom: 8px;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
  .img-box {
    height: 350px;
    overflow: hidden;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}

	*{
		margin:0;
		padding: 0;
	}
	.contain{
		margin-top: 50px;
		padding-top: 0;
	}
	.select{
		display: inline-block;
		float: left;
		width: 50%;
	}
	.where{
		display: inline-block;
		float: left;
		/*width: 75%;*/
		width: 72%;
	}
	.search{
		display: inline-block;
		float: left;
		margin-top:10px;
		/*width:12%;*/
		width:17%;
	}
	th{
		font-weight: bold;
	}
	td{
		font-size: 14px;
	}

</style>


