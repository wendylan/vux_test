<script>
    //引入组件
    import {Divider,FlexboxItem,Flexbox} from 'vux'
    //创造构造器
    export default {
        data(){
          return{
            msg:''
          }
        },
        components: {
            Divider,FlexboxItem,Flexbox
        },
    }
</script>

<template>
  <div>
    <divider>Horizontal</divider>
    <flexbox style="height:40px;">
      <flexbox-item><div class="flex-demo">this is a test</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item><div class="flex-demo">3</div></flexbox-item>
    </flexbox>
    <divider>Vertical</divider>
    <flexbox orient="vertical" :margin-left=0>
      <flexbox-item><div class="flex-demo" style="margin-left:0">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo" style="margin-left:0">2</div></flexbox-item>
      <flexbox-item><div class="flex-demo" style="margin-left:0">3</div></flexbox-item>
    </flexbox>
<br>
    <div>
      <flexbox :margin-left=0 style="height: 200px; " class="vux-1px-tb vux-1px-l vux-1px-r">
      <flexbox-item class="vux-1px-r" style="height:200px;background-color:red"></flexbox-item>
      <flexbox-item>
        <flexbox orient="vertical" :margin-left=0>
          <flexbox-item class="vux-1px-b"></flexbox-item>
          <flexbox-item style="height: 100px;background-color:skyblue"><!--height: 100% doesnot work here-->
            <flexbox :margin-left=0>
              <flexbox-item class="vux-1px-r"></flexbox-item>
              <flexbox-item></flexbox-item>
            </flexbox>
          </flexbox-item>
        </flexbox>
      </flexbox-item>
    </flexbox>
    </div>
    

  </div>
    
</template>



<style lang="less">
@import '~vux/src/styles/1px.less';

    .flex-demo {
      text-align: center;
      color: #fff;
      background-color: #20b907;
      border-radius: 4px;
      background-clip: padding-box;
    }   
</style>