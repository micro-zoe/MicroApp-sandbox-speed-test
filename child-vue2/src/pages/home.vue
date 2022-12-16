<template>
  <div>
    <div class='logo-img'></div>
    <h3>Vue@{{version}}</h3>
    <HelloWorld msg="子应用vue2"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import Vue from 'vue'

export default {
  name: 'home',
  data () {
    return {
      version: Vue.version,
    }
  },
  components: {
    HelloWorld
  },
  methods: {
  }
}
</script>

<style>
  .logo-img {
    background: url(../assets/logo.png) no-repeat;
    height: 200px;
    width: 200px;
    margin: 0 auto;
  }
</style>
