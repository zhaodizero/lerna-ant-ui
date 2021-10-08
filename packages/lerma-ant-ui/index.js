import TCButton from './src/button/components/Button.vue';
import LernaTestCode from './src/test-code/components/lernaTestCode.vue';


const components = [
  TCButton,
  LernaTestCode
];

//script标签方式映入
const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

//支持使用标签方式引入
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

expect.TCButton= TCButton
expect.LernaTestCode= LernaTestCode
export default {
  //总体
  install,
  //支持按需引入
  // TCButton,
  // LernaTestCode
}