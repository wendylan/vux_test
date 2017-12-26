<script>
import { Scroller, Swiper, GroupTitle ,SwiperItem } from 'vux';

const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg',
  title: '送你一次旅行'
}]

const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  title: `(可点击)${item.title}`
}))

export default {
  components: {
    Scroller,
    Swiper,
    GroupTitle,
    SwiperItem,
  },
  methods: {
    load (uuid) {
      const _this = this
      setTimeout(function () {
        _this.$broadcast('pulldown:reset', uuid)
      }, 2000)
    },

    demo06_onIndexChange (index) {
      this.demo06_index = index
    },

  },

  data () {
    return {
      // 轮播图第一种方式
      list: [{
        url: 'javascript:',
        img: 'https://static.vux.li/demo/1.jpg',
        title: '如何手制一份秋意的茶？'
      }, {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/2.jpg',
        title: '茶包VS原叶茶'
      }, {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/3.jpg',
        title: '播下茶籽，明春可发芽？'
      }],

    // 轮播图第二种方式
      demo06_index: 0,
      demo06_list: urlList,
    }
  }
}
</script>

<template>
  <div>
    <!-- 轮播图第一种方式 -->
    <scroller lock-x scrollbar-y use-pulldown @pulldown:loading="load" enable-horizontal-swiping  style="height:auto;">
       <div class="box2">
          <swiper :list="list" direction="horizontal" auto :min-moving-distance="20" height="180px"></swiper>
       </div>
    </scroller>
    <!-- 轮播图第二种方式 -->
      <group-title>循环模式</group-title>
      <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange" dots-class="custom-bottom" ></swiper>
      <p>current index: {{demo06_index}}</p>
      <br>

      <group-title>垂直方向文字滚动</group-title>
      <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
        <swiper-item><p class="space">义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p></swiper-item>
        <swiper-item><p class="space">基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
        <swiper-item><p class="space">零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p></swiper-item>
        <swiper-item><p class="space">做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
        <swiper-item><p class="space">只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
        <swiper-item><p class="space">基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
      </swiper>
  </div>
</template>
<style>
  .space{
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
  }
</style>
