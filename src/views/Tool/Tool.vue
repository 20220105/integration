<template>
  <div class="Box">
    <div class="casea" v-for="item in tool" :key="item.titele">
      <div class="topaa">
        <div class="Aimg"><img :src="item.src" alt="图片加载失败" /></div>
        <div>
          <div class="titlea">{{ item.title }}</div>
          <div class="explain">{{ item.explain }}</div>
        </div>
      </div>
      <div class="nalaibani">
        <a :href="item.href"><button>拿来吧你</button></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tool: [
        {
          src: "https://img1.baidu.com/it/u=3147218875,2652951611&fm=253&fmt=auto&app=138&f=PNG?w=888&h=500",
          href: "https://www.code-nav.cn/",
          title: "编程导航",
          explain: "鱼皮大佬创作的网站，内容很全",
        },
        {
          src: "https://img2.baidu.com/it/u=1591782341,3900788768&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=312",
          href: "http://color.oulu.me/",
          title: "背景渐变",
          explain:
            "一个集合180种免费的线性渐变网站, 您不仅可以复制渐变的原生CSS颜色代码,还可以查看下载每个优质的渐变图片",
        },
        {
          src: "https://img1.baidu.com/it/u=1710988341,4075804049&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
          href: "https://tinypng.com/",
          title: "熊猫压缩",
          explain: "智能WebP、PNG和JPEG压缩",
        },
        {
          src: "https://img2.baidu.com/it/u=2213413772,1357971757&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
          href: "https://www.beijing-time.org/riqi.htm",
          title: "时间差计算",
          explain: "在线日期时间计算器",
        },

        {
          src: "https://img1.baidu.com/it/u=3645746819,483785176&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=334",
          href: "https://tool.oschina.net/hexconvert/",
          title: "进制转换",
          explain: "支持在2~36进制之间进行任意转换，支持浮点型",
        },
        {
          src: "https://img0.baidu.com/it/u=1841845234,1447485764&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
          href: "https://www.aconvert.com/cn/icon/png-to-ico/",
          title: "图片转图标",
          explain: "PNG转ICO - 在线转换图标文件",
        },
        {
          src: "https://img2.baidu.com/it/u=1989038259,1842360401&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500",
          href: "https://cli.im/text",
          title: "草料二维码",
          explain: "文本、网址、图片生成二维码",
        },
        {
          src: "https://img2.baidu.com/it/u=1636254316,241644462&fm=253&fmt=auto&app=138&f=JPEG?w=250&h=188",
          href: "http://tools.jb51.net/regex",
          title: "正则在线生成",
          explain: "正则表达式在线生成与检测",
        },
        {
          src: "https://img1.baidu.com/it/u=862235573,144548550&fm=253&fmt=auto&app=138&f=JPEG?w=437&h=500",
          href: "http://tools.jb51.net/regex",
          title: "unicode码查询",
          explain: "unicode码大全",
        },
        {
          src: "https://img1.baidu.com/it/u=594556796,1953063061&fm=253&fmt=auto&app=138&f=JPEG?w=450&h=431",
          href: "http://tools.jb51.net/static/colorpicker/",
          title: "颜色选择",
          explain: "在线颜色选择器 | RGB颜色查询对照表",
        },
        {
          src: "https://img2.baidu.com/it/u=460591639,1103488215&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=407",
          href: "https://www.fenxianglu.cn/highlight.html",
          title: "页面输出代码",
          explain: "向页面输出高亮代码块，像掘金/csdn那样",
        },
      ],
    };
  },
};
</script>
<style scoped>
.nalaibani > a > button {
  height: 1.875rem;
  width: 7.125rem;
  background-color: black;
  color: aliceblue;
  border-radius: 0.625rem;
  text-align: center;
  margin-top: 1.5rem;
}
.nalaibani {
  border-top: 3px dashed rgb(255, 105, 105);
  margin-top: 0.5rem;
}
.Aimg {
  margin: 0;
}
.titlea {
  background-color: black;
  color: aliceblue;
  margin-bottom: 0;
}
.explain {
  border-top: 3px solid rgb(191, 191, 191);
  font-size: 0.75rem;
  padding: 2px;
  height: 3.25rem;
  text-align: center;
}
.Aimg > img {
  width: 100px;
  height: 100px;
}
.topaa {
  display: flex;
}
.casea {
  border: 5px solid rgba(255, 60, 60, 0.703);
  border-radius: 5px 5px 30px 30px;
  width: 13.25rem;
  height: 13.25rem;
  background-color: rgb(255, 255, 255);
  opacity: 0.9;
  margin-left: 2rem;
  margin-bottom: 3rem;
}
.Box {
  display: flex;
  padding: 1.875rem;
  color: black;
  flex-wrap: wrap;
  position: fixed;
  height: 30rem;
  width: 81rem;
  background-attachment: fixed;
  /* 开启滚动 */
  overflow-y: scroll;
}
/* 隐藏滚动条 */
.Box::-webkit-scrollbar {
  display: none;
}
</style>
