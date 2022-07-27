<template>
  <div class="shi">
    <div  class="yang"  v-for="item in titele" :key="item.name">
    <router-link  :to="item.href" class="aname">{{item.name}}</router-link>
 
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titele: [
        {
          name: 'script',
          href: "/a",
        },
          {
          name: '数据类型',
          href: "/body",
        }, {
          name: '进制',
          href: "/audio",
        }, {
          name: '类型转换',
          href: "/br",
        }, {
          name: '运算操作符',
          href: "/button",
        }, {
          name: '自增自减',
          href: "/div",
        }, {
          name: 'unicode编码',
          href: "/em",
        }, {
          name: '代码块',
          href: "/footer",
        }, {
          name: '循环',
          href: "/h",
        }, {
          name: '九九乘法表',
          href: "/header",
        }, {
          name: '函数',
          href: "/img",
        }, {
          name: '对象',
          href: "/input",
        }, {
          name: 'this指向',
          href: "/ol",
        }, {
          name: '工厂模式',
          href: "/p",
        }, {
          name: '原型',
          href: "/select",
        }, 
      ],
    };
  },
};
</script>

<style scoped>
@import url('@/assets/threetao.css');
</style>