const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  // 解决规范取名
  lintOnSave: false,
  // 打包后路径
  publicPath: "./",
  // css: {
  //   //像素单元生成rem单位自适应
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require("postcss-pxtorem")({
  //           rootValue: 192, //Number | Function）表示根元素字体大小或根据input参数返回根元素字体大小。（我电脑分辨率为1920*1080，所以设置192）
  //           unitPrecision: 5, //（Number）允许REM单位增加的十进制数字
  //           propList: ["*", "font-size", "line-height", "padding"], //(Array）可以从px更改为rem的属性。有样式遗漏可自行在该数组中添加
  //           selectorBlackList: [], //(Array）要忽略的选择器，保留为px
  //           replace: true, //（Boolean）替换包含rems的规则
  //           mediaQuery: false, //（Boolean）允许在媒体查询中转换px
  //           minPixelValue: 0, //（Number）设置要替换的最小像素值
  //           exclude: /node_modules/i, //（String, Regexp, Function）要忽略并保留为px的文件路径。
  //           //  ****   忽略单个属性的方法:在像素单位声明中使用大写字母，将px写为Px。    border: 1Px solid; 或 border-width: 2PX;
  //         }),
  //       ],
  //     },
  //   },
  // },
};
