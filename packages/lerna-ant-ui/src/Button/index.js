import LernaButton from './components/Button.vue'
// Vue.js 的插件应当有一个公开方法 install 。第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象
// 参考：https://cn.vuejs.org/v2/guide/plugins.html#%E5%BC%80%E5%8F%91%E6%8F%92%E4%BB%B6
// 注册组件
LernaButton.install = Vue => {
  Vue.component(lernaButton.name, LernaButton)
}
export default LernaButton
