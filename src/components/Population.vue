<template>
  <div class="app">
    <MyHeader class="MyHeader"></MyHeader>
    <MyNavber class="MyNavber"></MyNavber>
    <MyMain class="MyMain"></MyMain>
    <!-- <MyRight></MyRight> -->

  </div>
</template>

<script>
import Audio from '@/views/HTML/htmlpages/audio.vue';
import MyHeader from "../components/MyHeader/index.vue";
import MyMain from "../components/MyMain/index.vue";
import MyNavber from "../components/MyNavber/index.vue";
// import MyRight from "../components/MyRight/index.vue";

export default {
  components: { MyHeader, MyMain, MyNavber, Audio },
  created() {
    // 获取当前设备的宽度，设置rem的根字体大小
    let width = window.innerWidth;
    width = width <= 1200 ? 1200 : width;
    const htmlObj = document.getElementsByTagName("html")[0];
    htmlObj.style.fontSize = width / 76.8 + "px";

    // 对resize事件进行浏览器兼容处理
    if (document.createEvent) {
      var event = document.createEvent("HTMLEvents");
      event.initEvent("resize", true, true);
      window.dispatchEvent(event);
    } else if (document.createEventObject) {
      window.fireEvent("onresize");
    }

    // 监听页面resize事件，重新设置rem的根字体大小
    window.onresize = function () {
      let width = window.innerWidth;
      width = width <= 1200 ? 1200 : width;
      htmlObj.style.fontSize = width / 76.8 + "px";
    };
  },
};
</script>

<!-- scoped 只对当前页面生效 -->
<style scoped>
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
.app {
  background-image: linear-gradient(
    to top,
    #89b1fb 0%,
    #689dff 1%,
    #ffffff 20%,
    #ff8c96 80%
  );
  width: 100%;
  height: 100%;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  margin: 0;
}

.MyHeader {
  position: absolute;
  color: rgb(180, 122, 47);
  text-align: center;
  top: 16px;
  left: 0;
  right: 0;
  height: 70px;
  font-size: 20px;
  line-height: 70px;
}
.MyNavber {
  top: 102px;
  left: 0;
  bottom: 0;
  width: 147px;
  position: absolute;
  margin: 0;
  font-size: 20px;
}
.MyMain {
  top: 86px;
  left: 147px;
  bottom: 0;
  right: 0;
  position: absolute;
  color: rgb(130, 95, 49);
  text-align: center;
  margin: 0;
}
</style>