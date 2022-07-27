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
          name: '样式穿透',
          href: "/css_chuantou",
        },    {
          name: 'git常用指令',
          href: "/git_zhiling",
        },    {
          name: 'github静态部署',
          href: "/github_io",
        },    {
          name: 'Vscode下载慢解决办法',
          href: "/vscode_xiazai",
        },    {
          name: 'nvm',
          href: "/nvm",
        },
         
      ],
    };
  },
};
</script>

<style scoped>
@import url('@/assets/threetao.css');
</style>