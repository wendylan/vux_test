<script>
//  this.$vux.alert.show(),this.$vux.alert.hide()   要使用这个插件的话就要引入AlertPlugin;
import Vue from 'vue';
import {AlertPlugin} from 'vux';
Vue.use(AlertPlugin);
//在 ViewBox 或者 overflow-scrolling:touch 的容器中使用时，请使用 prop:transfer-dom 来解决其引起的 z-index 失效问题。

import { Alert, Group, XSwitch, Cell, TransferDomDirective as TransferDom } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    Alert,
    Group,
    XSwitch,
    Cell
  },
  data () {
    return {
      show: false,
      show1: false,
      show2: false
    }
  },
  methods: {
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    },
    showPlugin () {
      this.$vux.alert.show({
        title: 'VUX is Cool',
        content: 'Do you agree?',
        onShow () {
          console.log('Plugin: I\'m showing')
        },
        onHide () {
          console.log('Plugin: I\'m hiding now')
        }
      })
    },
    showPluginAuto () {
      this.showPlugin()
      setTimeout(() => {
        this.$vux.alert.hide()
      }, 3000)
    }
  }
}
</script>

<template>
  <div>
    <group>
      <x-switch title="Show Me" v-model="show"></x-switch>
    </group>
    <div v-transfer-dom>
      <alert v-model="show" title="Congratulations" @on-show="onShow" @on-hide="onHide">  Your Message is sent successfully~ </alert>
    </div>

    <group title="prop:content">
      <x-switch title="Show Me" v-model="show2"></x-switch>
    </group>
    <div v-transfer-dom>
      <alert v-model="show2" title="Congratulations" content="Your Message is sent successfully~" mask-transition></alert>
    </div>

    <group title="Use as a plugin">
      <cell title="Show Me" @click.native="showPlugin" is-link></cell>
      <cell title="will auto close in 3s" @click.native="showPluginAuto" is-link></cell>
    </group>
  </div>
</template>
<style></style>


