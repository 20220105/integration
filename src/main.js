import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
// 引入代码高亮工具 highlight
import hljs from "highlight.js";
import 'highlight.js/styles/school-book.css'
// 增加自定义命令v-highlight
Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});
// 增加组定义属性，用于在代码中预处理代码格式
Vue.prototype.$hljs = hljs;

// 引入适配文件
// import  '../util/flexible';
// import 'lib-flexible/flexible'




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
