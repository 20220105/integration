<template>
  <!-- 最外层大盒子不能循环 -->
  <div class="hezi">
    <!-- 卡片 -->
    <div v-for="item in uiList" :key="item.name" class="case">
      <div class="ui">{{ item.name }}</div>
      <div class="picture">
        <a :href="item.OfficialWebsite" :title="item.text">
          <img :src="item.picture" alt="图片加载失败"
        /></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uiList: [
        {
          name: "Element-Ui",
          OfficialWebsite:
            "https://element.eleme.cn/#/zh-CN/component/installation",
          picture:
            "https://img2.baidu.com/it/u=3860777160,2020850966&fm=253&fmt=auto&app=138&f=JPEG?w=720&h=405",
          text: "Element集团出品,适用于vue",
        },
        {
          name: "Grace-Ui",
          OfficialWebsite: "https://www.graceui.com/v6/info/60000-0.html",
          picture:
            "https://img0.baidu.com/it/u=2838744123,755819060&fm=253&fmt=auto&app=138&f=PNG?w=930&h=500",
          text: "组件挺好看,但是不开源",
        },
        {
          name: "Vant-Ui",
          OfficialWebsite: "https://vant-contrib.gitee.io/vant/#/zh-CN/home",
          picture:
            "https://img2.baidu.com/it/u=108490229,2306120304&fm=253&fmt=auto&app=120&f=JPEG?w=720&h=405",
          text: "有赞出品,可用于vue/react",
        },
        {
          name: "Uview-Ui",
          OfficialWebsite: "https://www.uviewui.com/components/intro.html",
          picture:
            "https://img1.baidu.com/it/u=3464867541,1896234395&fm=253&fmt=auto&app=120&f=JPEG?w=720&h=405",
          text: "基于Uniapp的一个组件库",
        },
        {
          name: "Mint-Ui",
          OfficialWebsite: "http://mint-ui.github.io/#!/zh-cn",
          picture:
            "https://img1.baidu.com/it/u=2554903018,3262508398&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
          text: "适用于vue",
        },
      ],
    };
  },
};
</script>

<style scoped>
.ui {
  border-bottom: 3px solid rgb(141, 138, 138);
  padding: 10px 5px;
  border-radius: 7px 7px 0px 0px;
  font-weight: 900;
  margin-bottom: 0;
}
.ui:hover {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}
.case {
  border: 3px solid rgb(255, 238, 0);
  border-radius: 10px;
  padding: 0;
  margin-left: 52px;
  margin-top: 30px;
}
.picture {
  width: 116px;
  height: 70px;
}
img {
  width: 116px;
  height: 86px;
  border-radius: 0;
  margin: 0;
  border-radius: 0px 0px 7px 7px;
}
a {
  text-decoration: none;
}

.hezi {
  display: flex;
  padding: 30px;
}
</style>