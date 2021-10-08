import TCButton from './src/button/index';
import LernaTestCode from './src/test-code/index';


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


export default {
  //总体
  install,
  //支持按需引入
  TCButton,
  LernaTestCode
}