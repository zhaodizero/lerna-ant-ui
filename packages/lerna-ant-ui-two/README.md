## 前言

Lerna 管理工具及组件库发布基础实践示例

## 组件库使用

安装组件库

```javascript
npm install lerna-ant-ui-two
```

项目内使用（示例）

```js
// mian.js
// 安装组件库后在main.js 中引入注册，即可全局使用组件库组件

import LernaUI from 'lerna-ant-ui-two'
Vue.use(LernaUI)
```
