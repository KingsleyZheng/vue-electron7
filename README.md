# vue-electron7

整合 electron7.1.1 和 vue 项目的模板

## 项目说明

1. 本项目基本上是整合了 SimulatedGREG 大神的 electron-vue 和 nklayman 的 vue-cli-plugin-electron-builder 。使用的是 electron7 版本，开发环境可以使用 vue-devtools
2. 进行了针对 vue 项目的 eslint-prettier 配置，以及对 axios 的封装，希望实现开箱即用
3. 本项目对你有帮助的话希望能帮忙 star 一下~

## 项目使用

将本项目拉取到本地，即可开始开发

## 运行、打包指令

```bash
# install dependencies
npm install
# 安装依赖

# serve with hot reload at localhost:9081
npm run dev
# 开发环境

# build electron application for production
npm run build
# 打包出来的exe文件在build文件夹中

```

## 备注

1. /src/main/index 是 electron 主进程入口文件，有关窗口大小等等配置都可以在该文件修改
2. 要用大版本号为 **10** 的 node.js 启动项目，切换 node 版本推荐使用 nvm
3. electron 为 ^7.1.1 ，官方文档不会保留旧版数据亦会对旧版停止维护(会有版本升级说明)，若没有致命性缺陷，官方建议升级。升级(直接使用 npm install 设定 electron 版本号)时留意官方文档相关注意事项即可，不成功也可以回退
4. 因为 vue 和 electron 共用一个 package.json，打包时会将 dependencies 中的 node_modules 不打包直接放进 app.asar。由于 vue 项目同时也会被打包，所以不需要把依赖包打包进 app.asar ，以减少项目体积。目前把所有 dependencies 移至 devdependencies
5. electron 项目的前端文件都在本地，在 electron 项目中用懒加载是毫无意义的
6. 打包相关的配置都在 package.json 。打包慢是因为既要打包 vue 项目，又要打包 electron
7. 打包配置项请看 [electron-builder 文档](https://www.electron.build/)
