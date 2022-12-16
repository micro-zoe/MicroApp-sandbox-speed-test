<template>
  <div id="app">
    <div class="menu-con">
      <el-menu
        class="el-menu-vertical-demo"
        :router='true'
        :default-active='activeIndex'
      >
        <el-menu-item index="/">
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/micro-app-table/">
          <span slot="title">micro-app 表单</span>
        </el-menu-item>
        <el-menu-item index="/micro-app-list/">
          <span slot="title">micro-app 长列表</span>
        </el-menu-item>
        <el-menu-item index="/qiankun-table/#/table">
          <span slot="title">qiankun 表单</span>
        </el-menu-item>
        <el-menu-item index="/qiankun-list/#/list">
          <span slot="title">qiankun 长列表</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="router-con">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      activeIndex: '/react16/',
    }
  },
  mounted () {

  },
  methods: {},
  watch: {
    $route: function (newRoute, oldRoute) {
      this.activeIndex = `/${newRoute.name}/`
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #fff;
  width: 100%;
  /* padding: 10px; */
  box-sizing: border-box;
  display: flex;
}

.menu-con  {
  width: 200px;
  height: 100vh;
}

.menu-con ul:first-child {
  padding-bottom: 50px;
}

.router-con  {
  flex: 1;
}

body {
  margin: 0;
}
</style>
