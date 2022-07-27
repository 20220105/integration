<template>
  <div class="bg">
    <div>
      <div class="one">
       1. nvm：nodejs 版本管理工具。一个 nvm 可以管理很多 node 版本和 npm 版本。 <a href="https://pan.baidu.com/s/1Mp6shyLxEW5-mG5HffgLzw?_at_=1658891093622">提取码6666</a>
      </div>
      <div class="one">2.更改配置文件打开刚才安装的问文件夹，把下面复制进去。注意： 前两行是自己安装的路径，根据自己的路径填写。</div>
      <div class="expot">

root: E:\nvm <br>
path: E:\nvm<br>
arch: 64<br>
proxy: none<br>
node_mirror: https://npm.taobao.org/mirrors/node/<br>
npm_mirror: https://npm.taobao.org/mirrors/npm/


      </div>
      <div class="one">3.指令</div>
   <div class="expot">
nvm list  available  //查看可以安装的版本<br>
nvm install  版本号 // 安装需要的版本<br>
nvm   ls     //查看已经安装的版本  安装完成后nvm文件夹会有对应的node文件夹 可以查看<br>
nvm use 版本号 //切换需要的版本，前提是安装过得，可能回遇到乱码<br>
node_mirror: https://npm.taobao.org/mirrors/node/<br>
npm_mirror: https://npm.taobao.org/mirrors/npm/



   </div>
    </div>
  </div>
</template>
<style scoped>
.expot{
  padding: 30px
}
@import url("@/assets/uniapp.css");
</style>