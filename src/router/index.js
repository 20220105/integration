import Vue from "vue";
import VueRouter from "vue-router";
// 首页
import Aindex from "../components/Aindex.vue";
// 集成页
import Population from "../components/Population.vue";
// js
import break_continue from "../views/JavaScript/JavaScript/break_continue.vue";
import denghao from "../views/JavaScript/JavaScript/denghao.vue";
import guifan from "../views/JavaScript/JavaScript/guifan.vue";
import ifa from "../views/JavaScript/JavaScript/ifa.vue";
import script from "../views/JavaScript/JavaScript/script.vue";
import in_jiancha from "../views/JavaScript/JavaScript/in_jiancha.vue";
import returna from "../views/JavaScript/JavaScript/returna.vue";
import sanyuan from "../views/JavaScript/JavaScript/sanyuan.vue";
import shujuleixing from "../views/JavaScript/JavaScript/shujuleixing.vue";
import switcha from "../views/JavaScript/JavaScript/switcha.vue";
import unicode from "../views/JavaScript/JavaScript/unicode.vue";
import yuhuo from "../views/JavaScript/JavaScript/yuhuo.vue";
import yunsuancaozuofu from "../views/JavaScript/JavaScript/yunsuancaozuofu.vue";
import zhuanyifu from "../views/JavaScript/JavaScript/zhuanyifu.vue";
import zimianlianghebianliang from "../views/JavaScript/JavaScript/zimianlianghebianliang.vue";
import zizenghezijian from "../views/JavaScript/JavaScript/zizenghezijian.vue";
import zuidahezhengzuixiao from "../views/JavaScript/JavaScript/zuidahezhengzuixiao.vue";
import fora from "../views/JavaScript/JavaScript/fora.vue";
import shujuleixingzhuanhuan from "../views/JavaScript/JavaScript/shujuleixingzhuanhuan.vue";
// vue
import build from "../views/Vue/Vue/build.vue";
import router_link from "../views/Vue/Vue/router_link.vue";
import routera from "../views/Vue/Vue/routera.vue";
import scoped from "../views/Vue/Vue/scoped.vue";
import v_for from "../views/Vue/Vue/v_for.vue";
// methods
import css_chuantou from "../views/Methods/Methods/css_chuantou.vue";
import git_zhiling from "../views/Methods/Methods/git_zhiling.vue";
import github_io from "../views/Methods/Methods/github_io.vue";
import vscode_xiazai from "../views/Methods/Methods/vscode_xiazai.vue";
import nvm from "../views/Methods/Methods/nvm.vue";
// uniapp
import navigateTo from "../views/Uniapp/Uniapp/navigateTo.vue";
import DocumentName from "../views/Uniapp/Uniapp/DocumentName.vue";
// css
import jianbian from "../views/CSS/css/jianbian.vue";
import quanzhong from "../views/CSS/css/quanzhong.vue";
import donghua from "../views/CSS/css/donghua.vue";
import background from "../views/CSS/css/background.vue";
import bianju from "../views/CSS/css/bianju.vue";
import biankuang from "../views/CSS/css/biankuang.vue";
import display from "../views/CSS/css/display.vue";
import duolie from "../views/CSS/css/duolie.vue";
import guodu from "../views/CSS/css/guodu.vue";
import meitichaxun from "../views/CSS/css/meitichaxun.vue";
import weilei from "../views/CSS/css/weilei.vue";
import weiyuansu from "../views/CSS/css/weiyuansu.vue";
import yuanjiao from "../views/CSS/css/yuanjiao.vue";
import dingwei from "../views/CSS/css/dingwei.vue";

// HTML
import table from "../views/HTML/htmlpages/table.vue";

import a from "../views/HTML/htmlpages/a.vue";
import audio from "../views/HTML/htmlpages/audio.vue";
import br from "../views/HTML/htmlpages/br.vue";
import button from "../views/HTML/htmlpages/button.vue";
import div from "../views/HTML/htmlpages/div.vue";
import em from "../views/HTML/htmlpages/em.vue";
import footer from "../views/HTML/htmlpages/footer.vue";
import h from "../views/HTML/htmlpages/h.vue";
import header from "../views/HTML/htmlpages/header.vue";
import img from "../views/HTML/htmlpages/img.vue";
import input from "../views/HTML/htmlpages/input.vue";
import ol from "../views/HTML/htmlpages/ol.vue";
import p from "../views/HTML/htmlpages/p.vue";
import select from "../views/HTML/htmlpages/select.vue";
import span from "../views/HTML/htmlpages/span.vue";
import strong from "../views/HTML/htmlpages/strong.vue";
import ul from "../views/HTML/htmlpages/ul.vue";
import video from "../views/HTML/htmlpages/video.vue";
import body from "../views/HTML/htmlpages/body.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Aindex",
    component: Aindex,
  },
  {
    path: "/Population",
    name: "Population",
    component: Population,
    // 路由重定向
    redirect: "/html",
    children: [
      {
        path: "/html",
        component: () => import("../views/HTML/html.vue"),
      },
      {
        path: "/css",
        component: () => import("../views/CSS/css.vue"),
      },
      {
        path: "/JavaScript",
        component: () => import("../views/JavaScript/JavaScript.vue"),
      },
      {
        path: "/Assembly",
        component: () => import("../views/Assembly/Assembly.vue"),
      },
      {
        path: "/Vue",
        component: () => import("../views/Vue/Vue.vue"),
      },
      {
        path: "/Uniapp",
        component: () => import("../views/Uniapp/Uniapp.vue"),
      },
      {
        path: "/React",
        component: () => import("../views/React/React.vue"),
      },
      {
        path: "/Interview",
        component: () => import("../views/Interview/Interview.vue"),
      },
      {
        path: "/Tool",
        component: () => import("../views/Tool/Tool.vue"),
      },
      {
        path: "/Methods",
        component: () => import("../views/Methods/Methods.vue"),
      },

      {
        path: "/a",
        name: "a",
        component: a,
      },
      {
        path: "/body",
        name: "body",
        component: body,
      },
      {
        path: "/table",
        name: "table",
        component: table,
      },
      {
        path: "/audio",
        name: "audio",
        component: audio,
      },
      {
        path: "/br",
        name: "br",
        component: br,
      },
      {
        path: "/button",
        name: "button",
        component: button,
      },
      {
        path: "/div",
        name: "div",
        component: div,
      },
      {
        path: "/em",
        name: "em",
        component: em,
      },
      {
        path: "/footer",
        name: "footer",
        component: footer,
      },
      {
        path: "/h",
        name: "h",
        component: h,
      },
      {
        path: "/header",
        name: "header",
        component: header,
      },
      {
        path: "/img",
        name: "img",
        component: img,
      },
      {
        path: "/input",
        name: "input",
        component: input,
      },
      {
        path: "/ol",
        name: "ol",
        component: ol,
      },
      {
        path: "/p",
        name: "p",
        component: p,
      },
      {
        path: "/select",
        name: "select",
        component: select,
      },
      {
        path: "/span",
        name: "span",
        component: span,
      },
      {
        path: "/strong",
        name: "strong",
        component: strong,
      },
      {
        path: "/ul",
        name: "ul",
        component: ul,
      },
      {
        path: "/video",
        name: "video",
        component: video,
      },
      // css

      {
        path: "/background",
        name: "background",
        component: background,
      },
      {
        path: "/bianju",
        name: "bianju",
        component: bianju,
      },
      {
        path: "/biankuang",
        name: "biankuang",
        component: biankuang,
      },
      {
        path: "/display",
        name: "display",
        component: display,
      },
      {
        path: "/donghua",
        name: "donghua",
        component: donghua,
      },
      {
        path: "/duolie",
        name: "duolie",
        component: duolie,
      },
      {
        path: "/guodu",
        name: "guodu",
        component: guodu,
      },
      {
        path: "/jianbian",
        name: "jianbian",
        component: jianbian,
      },
      {
        path: "/meitichaxun",
        name: "meitichaxun",
        component: meitichaxun,
      },

      {
        path: "/yuanjiao",
        name: "yuanjiao",
        component: yuanjiao,
      },
      {
        path: "/weilei",
        name: "weilei",
        component: weilei,
      },
      {
        path: "/weiyuansu",
        name: "weiyuansu",
        component: weiyuansu,
      },
      {
        path: "/dingwei",
        name: "dingwei",
        component: dingwei,
      },
      {
        path: "/quanzhong",
        name: "quanzhong",
        component: quanzhong,
      },
      // uniapp
      {
        path: "/navigateTo",
        name: "navigateTo",
        component: navigateTo,
      },
      {
        path: "/DocumentName",
        name: "DocumentName",
        component: DocumentName,
      },
      // methods
      {
        path: "/css_chuantou",
        name: "css_chuantou",
        component: css_chuantou,
      },
      {
        path: "/git_zhiling",
        name: "git_zhiling",
        component: git_zhiling,
      },
      {
        path: "/github_io",
        name: "github_io",
        component: github_io,
      },
      {
        path: "/vscode_xiazai",
        name: "vscode_xiazai",
        component: vscode_xiazai,
      },
      {
        path: "/nvm",
        name: "nvm",
        component: nvm,
      },
      // vue
      {
        path: "/build",
        name: "build",
        component: build,
      },
      {
        path: "/router_link",
        name: "router_link",
        component: router_link,
      },
      {
        path: "/routera",
        name: "routera",
        component: routera,
      },
      {
        path: "/scoped",
        name: "scoped",
        component: scoped,
      },
      {
        path: "/v_for",
        name: "v_for",
        component: v_for,
      },
      // js
      {
        path: "/break_continue",
        name: "break_continue",
        component: break_continue,
      }, {
        path: "/denghao",
        name: "denghao",
        component: denghao,
      }, {
        path: "/guifan",
        name: "guifan",
        component: guifan,
      }, {
        path: "/v_for",
        name: "v_for",
        component: v_for,
      }, {
        path: "/ifa",
        name: "ifa",
        component: ifa,
      }, {
        path: "/script",
        name: "script",
        component: script,
      }, {
        path: "/in_jiancha",
        name: "in_jiancha",
        component: in_jiancha,
      }, {
        path: "/returna",
        name: "returna",
        component: returna,
      }, {
        path: "/sanyuan",
        name: "sanyuan",
        component: sanyuan,
      }, {
        path: "/shujuleixing",
        name: "shujuleixing",
        component: shujuleixing,
      }, {
        path: "/switcha",
        name: "switcha",
        component: switcha,
      }, {
        path: "/unicode",
        name: "unicode",
        component: unicode,
      }, {
        path: "/yuhuo",
        name: "yuhuo",
        component: yuhuo,
      }, {
        path: "/yunsuancaozuofu",
        name: "yunsuancaozuofu",
        component: yunsuancaozuofu,
      }, {
        path: "/zhuanyifu",
        name: "zhuanyifu",
        component: zhuanyifu,
      }, {
        path: "/zimianlianghebianliang",
        name: "zimianlianghebianliang",
        component: zimianlianghebianliang,
      }, {
        path: "/zizenghezijian",
        name: "zizenghezijian",
        component: zizenghezijian,
      }, {
        path: "/zuidahezhengzuixiao",
        name: "zuidahezhengzuixiao",
        component: zuidahezhengzuixiao,
      }, {
        path: "/fora",
        name: "fora",
        component: fora,
      },{
        path: "/shujuleixingzhuanhuan",
        name: "shujuleixingzhuanhuan",
        component: shujuleixingzhuanhuan,
      },

    ],
  },
];
const router = new VueRouter({
  // 打包后空白网页 第一次 关闭
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
