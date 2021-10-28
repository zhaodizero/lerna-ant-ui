<!-- COMPONENT_NAME -->
<template>
  <div class="root">
    <a-button @click="handleAlert">
      Ly 组件发布测试
    </a-button>
  </div>
</template>

<script>
export default {
  name: 'LernaButton',
  props: {},
  data() {
    //这里存放数据
    return {}
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleAlert() {
      alert('发布组件')
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
}
</script>
<style scoped lang="less">
//@import url(); 引入公共css类
</style>
