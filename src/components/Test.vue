<script>
import { Divider, Card,Group,Cell,Rater,Qrcode} from 'vux'

export default {
  data(){
    return{
      data1:5,
      data4: 3,
      data5: 3,
      value: 'https://vux.li',
      fgColor: '#000000'
    }
  },
  components: {
    Card,
    Divider,
    Group,
    Cell,
    Rater,
    Qrcode,
  },
  mounted(){
    setInterval(()=>{
      this.vaule=`http://www.gangerp.com?t=${Math.random()}`;
      this.fgColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    },5000)
  }
}
</script>

<template> 
  <div>
    <!-- tab选项 -->
    <card :header="{title:'我的钱包'}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r">
          <span>1130</span>
          <br/>
          京豆
        </div>
        <div class="vux-1px-r">
          <span>15</span>
          <br/>
          京东券
        </div>
        <div class="vux-1px-r">
          <span>0</span>
          <br/>
          京东卡/E卡
        </div>
        <div>
          <span>88</span>
          <br/>
          七天待还
        </div>
      </div>
    </card>
    <group>
        <!-- 满意度的打星星 -->
       <cell title="set default score = 5">
         <rater v-model="data1" slot="value"></rater>
       </cell>
       <cell title="loving">
         <rater v-model="data4" slot="value" star="♡" active-color="red" :margin="4"></rater>
       </cell>
       <cell title="Sunshine">
         <rater v-model="data5" slot="value" star="☼" active-color="#ff9900" :margin="4"></rater>
       </cell>
       <cell title="smiles">
         <rater v-model="data5" slot="value" star="☻" active-color="#ff9900" :margin="4"></rater>
       </cell>
       <cell title="different stars">
         <rater v-model="data5" slot="value" star="✩" active-color="#ff9900" :margin="4"></rater>
       </cell>
       <cell title="how embarrass">
         <rater v-model="data5" slot="value" star="囧" active-color="#ff9900" :margin="4"></rater>
       </cell>
    </group>
    <divider>默认的二维码</divider>
    <qrcode value="http://www.gangerp.com" type="img" class="imgkind"></qrcode>
    <qrcode :value="value" :fg-color="fgColor" class="imgkind"></qrcode>
    <br>
  </div>
</template>

<style scoped lang="less" scoped>
@import '~vux/src/styles/1px.less';

.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
.imgkind{
  margin-right: 20px;
  float: left;
}
</style>