<template>
  <div>
    <div class="bottona">
      <button class="btns">
        <a href="https://www.react-native.cn/docs/getting-started/">
          官网</a
        >
      </button>
    </div>
    <div class="shi">
      <div class="yang" v-for="item in titele" :key="item.name">
        <a href="https://juejin.cn/post/7100099751755907102" class="aname">环境搭建</a>
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
          name: "",
          href: "",
        },
        
      ],
    };
  },
};
</script>

<style scoped>
@import url('@/assets/threetao.css');

/* 按钮 */
.bottona {
  padding-top: 32px;
  margin-bottom: -32px;
}
.btns {
  padding: 7px 15px;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  background: linear-gradient(90deg,#0084ff, #ff9625, #fbff12,  #213cea);
  background-size: 400%;
  border-radius: 5px;
  border: 3px solid rgb(3, 226, 255);
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