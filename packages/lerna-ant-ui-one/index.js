//  packages\lerna-ant-ui\index.js

import LernaButton from './src/Button/components/Button.vue'

const components = [LernaButton]

// script标签方式映入
const install = function(Vue, opts = {}) {
  // 判断是否安装过
  if (install.installed) return
  // 注册所有组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 支持使用标签方式引入
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  // 总体
  install,
  LernaButton
}
