<script>
	import {XHeader,Group,Cell, CellBox} from 'vux';
	export default{
		data(){
			return{
				showContent: false,
				showUser:false,
				showPro:false,
				showData:false,
				showMore:false,
				showSet:false,
			}
		},
		components:{
			XHeader,
			Group,
			Cell,
			CellBox,
		},
	}
</script>
<template>
	<div>
		<!-- 头部导航栏 -->
		<div class="vux_demo">
			<x-header>个人中心</x-header>
		</div>
		<div class="contain">
			<!-- 招标方 -->
			<div class="content">
				<group>
					<x-icon type="ios-star" style="float:left;margin-top:5px;" size="30" class="icon_test" fill="green"></x-icon>
					 <cell
				      title="招标方"
				      is-link
				      :border-intent="false"
				      :arrow-direction="showContent ? 'up' : 'down'"
				      @click.native="showContent = !showContent">
				      </cell>

				      <template v-if="showContent">
				        <cell-box :border-intent="false" class="sub-item" is-link>我的招标</cell-box>
				        <cell-box class="sub-item" is-link>我的项目</cell-box>
				        <!-- <cell-box class="sub-item" is-link>新建招标</cell-box> -->
				      </template>
				</group>
				<!-- 用户管理 -->
				<group>
					<x-icon type="android-contact" style="float:left;margin-top:5px;" size="30" class="icon_test" fill="red"></x-icon>
					 <cell
				      title="用户管理"
				      is-link
				      :border-intent="false"
				      :arrow-direction="showUser ? 'up' : 'down'"
				      @click.native="showUser = !showUser">
				      </cell>

				      <template v-if="showUser">
				        <cell-box :border-intent="false" class="sub-item" is-link>用户</cell-box>
				        <cell-box class="sub-item" is-link>审核</cell-box>
				        <cell-box class="sub-item" is-link>角色</cell-box>
				        <cell-box class="sub-item" is-link>权限</cell-box>
				      </template>
				</group>
				<!-- 产品管理 -->
				<group>
					<x-icon type="ios-flower" style="float:left;margin-top:5px;" size="30" class="icon_test" fill="blue"></x-icon>
					 <cell
				      title="产品管理"
				      is-link
				      :border-intent="false"
				      :arrow-direction="showPro ? 'up' : 'down'"
				      @click.native="showPro = !showPro">
				      </cell>

				      <template v-if="showPro">
				        <cell-box :border-intent="false" class="sub-item" is-link>全部产品</cell-box>
				        <cell-box class="sub-item" is-link>产品属性</cell-box>
				        <cell-box class="sub-item" is-link>钢筋品牌</cell-box>
				        <cell-box class="sub-item" is-link>钢材</cell-box>
				      </template>
				</group>
				<!-- 数据页面 -->
				<group>
					<x-icon type="ios-drag" style="float:left;margin-top:5px;" size="30" class="icon_test" fill="#76d0a3"></x-icon>
					 <cell
				      title="数据页面"
				      is-link
				      :border-intent="false"
				      :arrow-direction="showData ? 'up' : 'down'"
				      @click.native="showData = !showData">
				      </cell>

				      <template v-if="showData">
				        <cell-box :border-intent="false" class="sub-item" is-link>数据管理</cell-box>
				        <cell-box class="sub-item" is-link>历史数据</cell-box>
				        <cell-box class="sub-item" is-link>资源推荐</cell-box>
				        <cell-box class="sub-item" is-link>钢材信息</cell-box>
				        <cell-box class="sub-item" is-link>运费信息</cell-box>
				      </template>
				</group>
				<!-- 高级选项 -->
				<group>
					<x-icon type="ios-cloud" style="float:left;margin-top:5px;" size="30" class="icon_test" fill="#f46e65"></x-icon>
					 <cell
				      title="高级选项"
				      is-link
				      :border-intent="false"
				      :arrow-direction="showMore ? 'up' : 'down'"
				      @click.native="showMore = !showMore">
				      </cell>

				      <template v-if="showMore">
				        <cell-box :border-intent="false" class="sub-item" is-link>File manager</cell-box>
				        <cell-box class="sub-item" is-link>backups</cell-box>
				        <cell-box class="sub-item" is-link>Logs</cell-box>
				        <cell-box class="sub-item" is-link>Settings</cell-box>
				      </template>
				</group>
				<!-- 用户设置 -->
				<group>
					<x-icon type="ios-box" style="float:left;margin-top:5px;" size="30" class="icon_test" fill="#faaf76"></x-icon>
					 <cell
				      title="用户设置"
				      is-link
				      :border-intent="false"
				      :arrow-direction="showSet ? 'up' : 'down'"
				      @click.native="showSet = !showSet">
				      </cell>

				      <template v-if="showSet">
				        <cell-box :border-intent="false" class="sub-item" is-link>子账号管理</cell-box>
				        <cell-box class="sub-item" is-link>企业信息</cell-box>
				        <cell-box class="sub-item" is-link>修改密码</cell-box>
				      </template>
				</group>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.vux_demo {
	  text-align: center;
	  color: #fff;
	  position: fixed;
      top: 0;
      width: 100%;
      z-index: 2;
	}
	.contain{
		margin-top: 50px;
	}
	.icon_test{
		float: right;
		margin-top: 10px;
	}
	.sub-item {
	  color: #888;
	}
</style>