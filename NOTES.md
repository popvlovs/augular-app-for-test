## Angular CLI File Structure
```
src                              源代码
|——app                          |-app组件
|    |——app.component.css       |    |-样式
|    |——app.component.html      |    |-html模板
|    |——app.component.spec.ts   |    |-组件测试文件
|    |——app.component.ts        |    |-组件
|    `——app.module.ts           |    `-定义AppModule
|——assets                       |-静态资源？图片之类的文件
|    `——.gitkeep                |
|——environments                 |-应用中使用的变量，build时替换
|    |——environment.prod.ts     |   |-类似于application.yml
|    `——environment.ts          |
|——browserslist                 |-PostCSS browserslist
|——favicon.ico                  |
|——index.html                   |-首页，不用动，build时构建
|——karma.conf.js                |-karma单元测试配置，For ng test
|——main.ts                      |-主入口点
|——polyfills.ts                 |-腻子脚本，据说时用来屏蔽浏览器差异的
|——styles.css                   |-全局样式
|——test.ts                      |-测试代码入口点
|——tsconfig.app.json            |-TypeScript编译器配置文件，For app
|——tsconfig.spec.json           |-TypeScript编译器配置文件，For test
`——tslint.json                  `-用于ng lint，语法检查？
```
根目录
```
my-app
|-e2e                           |-端到端（end-to-end）测试
|   |-src                       |
|   |   |-app.e2e-spec.ts       |
|   |   `-app.po.ts             |
|   |-tsconfig.e2e.json         |
|   `-protractor.conf.js        |
|-node_modules/...              |-For node.js，package.json中引用的第三方模块放在这里
|-src/...                       |-源代码目录（见上一张图）
|   `-karma.conf.js             |
|-.editorconfig                 |-For 编辑器，跨编辑器开发时保持统一的代码格式
|-.gitignore                    |-
|-angular.json                  |-Angular CLI的配置文件，有点像.gradle？
|-package.json                  |-npm配置文件，引用第三方模块
|-README.md                     |
|-tsconfig.json                 |-TypeScript编译器配置
`-tslint.json                   `For TSLint and Codelyzer
```
