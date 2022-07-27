<template>
  <div class="shi">
    <div class="yang" v-for="item in titele" :key="item.name">
      <router-link :to="item.href" class="aname">{{ item.name }}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titele: [
        {
          name: "Background",
          href: "/background",
        },
        {
          name: "Margin/Padding",
          href: "/bianju",
        },
      
        {
          name: "Border",
          href: "/biankuang",
        },
  
        {
          name: "Display:flex",
          href: "/display",
        },
        {
          name: "Position",
          href: "/dingwei",
        },
        {
          name: "Animation",
          href: "/donghua",
        },
        {
          name: "Column",
          href: "/duolie",
        },
        {
          name: "Transition",
          href: "/guodu",
        },
        {
          name: "Gradients",
          href: "/jianbian",
        },
        {
          name: "@media",
          href: "/meitichaxun",
        },
       
        {
          name: "伪类",
          href: "/weilei",
        },
        {
          name: "伪元素",
          href: "/weiyuansu",
        },
        {
          name: "圆角",
          href: "/yuanjiao",
        },
         {
          name: "权重",
          href: "/quanzhong",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url('@/assets/threetao.css');
</style>