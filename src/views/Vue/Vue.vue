<template>
  <div>
    <div class="bottona">
      <button class="btns">
        <a href="https://cn.vuejs.org/v2/guide/">
          官网</a
        >
      </button>
    </div>
    <div class="shi">
      <div class="yang" v-for="item in titele" :key="item.name">
        <router-link :to="item.href" class="aname">{{ item.name }}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titele: [
        {
          name: "打包细节",
          href: "/build",
        },   {
          name: "router_link",
          href: "/router_link",
        },   {
          name: "路由",
          href: "/routera",
        },   {
          name: "scoped",
          href: "/scoped",
        },   {
          name: "v-for",
          href: "/v_for",
        },
        
      ],
    };
  },
};
</script>

<style scoped>
/* 循环 */
@import url('@/assets/threetao.css');
/* 按钮 */
.bottona {
  padding-top: 2rem;
  margin-bottom: -2rem;
}
.btns {
  padding: 0.4375rem 0.9375rem;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  background: linear-gradient(90deg, #21ea25, #f6ff00, #f8e645, #21ea25);
  background-size: 400%;
  border-radius: 0.3125rem;
  border: 3px solid rgb(251, 36, 193);
}
.btns > a {
  color: #fff;
  text-decoration: none;
  font-weight: 900;
}
.btns:hover {
  animation: animate 8s linear infinite;
}

@keyframes animate {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
}

.btns::before {
  content: "";
  z-index: -1;
  background: linear-gradient(90deg, #53f403, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 40px;
  opacity: 0;
  transition: 0.5s;
}

.btns:hover::before {
  filter: blur(20px);
  opacity: 1;
  animation: animate 8s linear infinite;
}
</style>