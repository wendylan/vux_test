<template>
  <div>
    <div class="vux-demo"> 
      <img class="logo" src="../assets/vux_logo.png">
      <h1>hello </h1>
    </div>
    <group title="vuex_hello demo">
      <cell title="Vux_hello" value="beautiful" ></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
