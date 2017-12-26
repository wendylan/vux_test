<script>
	import {XHeader, Actionsheet,Group, XSwitch} from 'vux';
	export default{
		data(){
			return{
				menus: {
			        menu1: 'Share to friends',
			        menu2: 'Share to timeline'
			      },
			    show1: false,
			}
		},
		components:{
			XHeader,
			Actionsheet,
			Group,
			XSwitch,
		},
		methods:{
			console (msg) {
		      console.log(msg)
		    },
		}
	}
</script>
<template>
	<div>
		<div class="vux_demo">
			<x-header>个人中心</x-header>
			<br>
			<x-header>
			  <span>个人中心</span>
			  <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
			</x-header>
			<br>
			<x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">with more menu</x-header>
			<br>
			<x-header>个人中心
				<a slot="right">
					<x-icon type="ios-contact"  size="30" style="margin-top:-5px;" fill="white"></x-icon>
				</a>
			</x-header>
			<br>

			<group>
		    	<x-switch title="Basic Usage" v-model="show1"></x-switch>
		    </group>
			<actionsheet v-model="show1" :menus="menus" :close-on-clicking-mask="false" show-cancel cancel-text="cancel" @on-click-mask="console('on click mask')"></actionsheet>
		</div>
	</div>
</template>
<style scoped>
	
</style>