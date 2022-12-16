<template>
  <div id="app">
    <div class='tab-con'>
      <el-tabs @tab-click="handleClick">
        <el-tab-pane label="home" name="/"></el-tab-pane>
        <el-tab-pane label="table" name="table"></el-tab-pane>
        <el-tab-pane label="list" name="list"></el-tab-pane>
      </el-tabs>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    handleClick(tab) {
      this.$router.push(tab.name)
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fff;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  display: block;
}
</style>
