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
          name: '语法规范',
          href: "/guifan",
        },
          {
          name: 'Script',
          href: "/script",
        }, {
          name: '数据类型',
          href: "/shujuleixing",
        }, {
          name: '等号说明',
          href: "/denghao",
        }, {
          name: '运算操作符',
          href: "/yunsuancaozuofu",
        }, {
          name: '自增自减',
          href: "/zizenghezijian",
        }, {
          name: 'unicode编码',
          href: "/unicode",
        }, {
          name: '逻辑与/逻辑或',
          href: "/yuhuo",
        }, {
          name: 'For循环',
          href: "/fora",
        }, {
          name: 'Switch循环',
          href: "/switcha",
        }, {
          name: '转义符',
          href: "/yunsuancaozuofu",
        }, {
          name: '字面量和变量',
          href: "/zimianlianghebianliang",
        }, {
          name: '最大值与最小正值',
          href: "/zuidahezhengzuixiao",
        }, {
          name: '数据类型转换',
          href: "/shujuleixingzhuanhuan",
        }, {
          name: 'break和continue',
          href: "/break_continue",
        }, {
          name: 'if',
          href: "/ifa",
        }, {
          name: '检查对象是否有值',
          href: "/in_jiancha",
        }, {
          name: 'return',
          href: "/returna",
        }, {
          name: '三元',
          href: "/sanyuan",
        }, 
      ],
    };
  },
};
</script>

<style scoped>
@import url('@/assets/threetao.css');
</style>