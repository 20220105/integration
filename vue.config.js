const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// 解决规范取名
module.exports ={ 
  
  lintOnSave:false,
  
  publicPath: './'

} 
//vue.config.js


