<template>
  <div class="app">
    <MyHeader class="MyHeader"></MyHeader>
    <MyNavber class="MyNavber"></MyNavber>
    <MyMain class="MyMain"></MyMain>
    <!-- <MyRight></MyRight> -->
  </div>
</template>

<script>
import MyHeader from "../components/MyHeader/index.vue";
import MyMain from "../components/MyMain/index.vue";
import MyNavber from "../components/MyNavber/index.vue";
// import MyRight from "../components/MyRight/index.vue";

export default {
  components: { MyHeader, MyMain, MyNavber,  },
  data() {
    return {};
  },
};
</script>

<!-- scoped 只对当前页面生效 -->
<style scoped>
body{
  width: 100%;
  height: 100%;
  margin: 0;
}
.app {
  background-image: linear-gradient(
    to top,
    #75a5ff 0%,
    #5f97ff 1%,
    #ffffff 20%,
    #ff9fa7 80%
  );
  width: 100%;
  height: 100%;
  min-height: 44.525rem;
  margin-bottom: -1rem;
 
}

.MyHeader {
  position: absolute;
  color: rgb(180, 122, 47);
  text-align: center;
  top: 1rem;
  left: 0;
  right: 0;
  height: 4.375rem;
  font-size: 1.25rem;
  line-height: 4.375rem;
}
.MyNavber {
  top: 6.375rem;
  left: 0;
  bottom: 0;
  width: 9.1875rem;
  position: absolute;
  margin: 0;
  font-size: 1.25rem;
}
.MyMain {
  top: 5.375rem;
  left: 9.1875rem;
  bottom: 0;
  right: 0;
  position: absolute;
  color: rgb(130, 95, 49);
  text-align: center;
  margin: 0;
}

</style>