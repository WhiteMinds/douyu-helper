# Chrome扩展插件 斗鱼助手

本项目与斗鱼官方无关~

## 开发环境配置
1. 安装Node.js (version >= 6)
2. 安装 [yarn](https://yarnpkg.com/lang/en/docs/install/).
3. 克隆本仓库
4. 执行 `yarn`.
5. 执行 `npm run start`
6. 在Chrome下加载扩展:
    1. 访问 `chrome://extensions/`
    2. 开启 `开发者模式`
    3. 点击 `加载已解压的扩展程序`
    4. 选择 `build` 文件夹.

## 项目结构
所有的插件开发代码在 `src` 文件夹, 包括 `manifest.json`.

## 构建
开发完成后执行此命令

```
$ NODE_ENV=production npm run build
```
构建后的文件位于build文件夹, 使用Chrome的 `打包扩展程序` 来完成打包

-------------
Basic template from [chrome-extension-webpack-boilerplate](https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate)
