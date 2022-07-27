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
          name: "a",
          href: "/a",
        },
        {
          name: "body",
          href: "/body",
        },
        {
          name: "audio",
          href: "/audio",
        },
        {
          name: "br",
          href: "/br",
        },
        {
          name: "button",
          href: "/button",
        },
        {
          name: "div",
          href: "/div",
        },
        {
          name: "em",
          href: "/em",
        },
        {
          name: "footer",
          href: "/footer",
        },
        {
          name: "h",
          href: "/h",
        },
        {
          name: "header",
          href: "/header",
        },
        {
          name: "img",
          href: "/img",
        },
        {
          name: "input",
          href: "/input",
        },
        {
          name: "ol",
          href: "/ol",
        },
        {
          name: "p",
          href: "/p",
        },
        {
          name: "select",
          href: "/select",
        },
        {
          name: "span",
          href: "/span",
        },
        {
          name: "strong",
          href: "/strong",
        },
        {
          name: "ul",
          href: "/ul",
        },
        {
          name: "video",
          href: "/video",
        },  {
          name: "table",
          href: "/table",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url('@/assets/threetao.css');
</style>