# vue-meituan

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

# 文件相关介绍
build 目录是一些webpack的文件，配置参数

config 目录是一些webpack配置参数（注意index.js有个bug 需要改成：assetsPublicPath: './'，不然所有的静态资源会找不到）

src 源码文件夹，基本上所有文件都应该放在这里。

static 生成好的文件会放在这个目录下。

test 测试文件夹，测试都写在这里

.babelrc babel编译参数，vue开发需要babel编译

.editorconfig 看名字是编辑器配置文件，不晓得是哪款编辑器，没有使用过。

.eslintrc.js eslint配置文件，用以规范团队开发编码规范，大中型项目很有用

.gitignore 用来过滤一些版本控制的文件，比如node_modules文件夹

index.html 主页

package.json 项目文件，记载着一些命令和依赖还有简要的项目描述信息

README.md github介绍文件

vue-router 修改了依赖路由文件，可以实现一些切换效果(需要将)

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
