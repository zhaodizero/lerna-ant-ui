// packages\lerna-ant-ui\src\Button\index.js

import LernaButton from './components/Button.vue'

LernaButton.install = Vue => {
  Vue.component(LernaButton.name, LernaButton)
}
export default LernaButton
