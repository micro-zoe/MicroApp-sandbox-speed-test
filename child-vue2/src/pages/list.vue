<template>
  <div>
    <el-button type="primary" @click="renderNode">点击渲染一万个元素</el-button>
    <div class="pt60">
      <ul class="wrapper">
        <li v-for="item in liList" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'list',
  data () {
    return {
      liList: 0,
    }
  },
  methods: {
    renderNode() {
      console.time("run loop", 10000);

      for (let index = 2; index < 1 * 10000; index++) {
        this.liList = index;
      }

      console.timeLog("run loop", 10000);

      this.$nextTick(() => {
        console.timeEnd("run loop", 10000);
      });
    },
  }
}
</script>

<style>

</style>
