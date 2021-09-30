<!-- COMPONENT_NAME -->
<template>
  <div class="lerna-root">
    Lerna Components to NPM.js
  </div>
</template>

<script>
export default {
  name: 'LernaCode',
  props: {},
  data() {
    // 这里存放数据
    return {}
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
}
</script>
<style scoped lang="less">
//@import url(); 引入公共css类
.lerna-root {
  height: 100px;
  line-height: 1;
  font-size: 30px;
  color: #f11a0b;
  width: 100%;
  font-weight: 700;
}
</style>
