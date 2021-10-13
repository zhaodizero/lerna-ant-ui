# LernaUI

## Lerna-ant-ui V1.0.0

## 前言

组件库为运营信息开发部维护的公共组件库，目的是为了实现功能和 UI 统一。

## 组件库使用

安装组件库

```javascript
npm install lerna-ant-ui
```

项目内使用（示例）

```js
// mian.js
// 安装组件库后在main.js 中引入注册，即可全局使用组件库组件

import LernaUI from 'lerna-ant-ui'
Vue.use(LernaUI)
```

## 组件库预览

待完善

## 组件开发流程

### 组件开发环境及工具介绍

1. 组件开发容器

- [Ant Design Pro Vue 框架](https://pro.antdv.com/docs/getting-started)
- [开源组件库：Ant Design Vue](https://antdv.com/docs/vue/introduce-cn/)

1. 包管理工具

- [Lerna](https://lerna.js.org/)

### 组件文件目录

![image.png](https://cdn.nlark.com/yuque/0/2021/png/22718125/1634096923130-c93e7f26-9876-4fc0-80d3-8087d25c6005.png)

### 组件开发

- 在 packages\src 下新建一个组件文件夹，以 Button 组件为例

- 注意必须填写组件 name，且唯一

![img](https://cdn.nlark.com/yuque/0/2021/png/22718125/1634097080030-7661e56a-0e5b-44bc-bda1-0fe4402aafb1.png)

- 组件 install 注册

```javascript
// packages\lerna-ant-ui\src\Button\index.js

import LernaButton from './components/Button.vue'

LernaButton.install = Vue => {
  Vue.component(lernaButton.name, LernaButton)
}
export default LernaButton
```

- 组件库入口文件 index 注册

```javascript
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
```

### 本地环境测试

- 组件库环境

```javascript
// main.js 入口引入

import LernaUI from '../packages/lerna-ant-ui/index'
Vue.use(LernaUI)
```

- 项目实际环境

  - 组件库需发布至 npm 管理
  - 安装 lerna-ant-ui

```javascript
npm install lerna-ant-ui
```

- 项目中使用

```javascript
// main.js 入口引入
import LernaUI from 'lerma-ant-ui'
Vue.use(LernaUI)
```

### 组件库发布

- 第一次 publish 前我们需要执行，登录 npm

```javascript
npm login --registry=https://registry.npmjs.org
```

- 使用 git 命令，并 git commit 提交

  - git status
  - git add .

  - git commit -m "发布 lerna-ant-ui 组件库"

- 发布 publish
  - git commit 之后执行 lerna publish

```javascript
lerna publish
```

### 版本更新日志

待完善
