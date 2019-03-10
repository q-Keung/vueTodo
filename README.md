# vueTodo
使用Vue+bootstrap开发的一个todo小项目
需要自行npm install安装依赖
npm i vue-router
npm i node-sass sass-loader -S
在rules加入
{
  test: /\.scss$/,
  loaders: ["style", "css", "sass"]
}
npm i bootstrap –save-dev
npm install jquery --save
修改webpack配置，引入webpack模块
在plugins中加入
new webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery"
})
