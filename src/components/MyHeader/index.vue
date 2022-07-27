<template>
  <div class="position">
    <div class="topp">
      <img
        src="https://img0.baidu.com/it/u=605090022,2488965618&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=500"
        alt=""
      />
    </div>
    <div class="top">乘风破浪会有时，直挂云帆济沧海</div>
    <div class="z_time">
      <span class="time" id="time">
        <span class="date">{{ nowTime }}</span
        >&nbsp;
        <span class="hour"></span>
        <a class="split">:</a>
        <span class="minitus"></span>
        <a class="split">:</a>
        <span class="seconds"></span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nowTime: "",
      timeId: "",
    };
  },
  created() {},
  mounted() {
    this.showTime();
  },
  methods: {
    sitTime() {
      const d = new Date();
      const h = d.getHours();
      const m = d.getMinutes();
      const s = d.getSeconds();
      time.style.setProperty("--ds", s);
      time.style.setProperty("--dm", m + s / 60);
      time.style.setProperty("--dh", h + m / 60 + s / 3600);
    },
    // 显示当前时间
    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =
        new Date(timeStamp).getMonth() + 1 < 10
          ? "0" + (new Date(timeStamp).getMonth() + 1)
          : new Date(timeStamp).getMonth() + 1;
      let date =
        new Date(timeStamp).getDate() < 10
          ? "0" + new Date(timeStamp).getDate()
          : new Date(timeStamp).getDate();

      let week = new Date(timeStamp).getDay();
      let weeks = ["日", "一", "二", "三", "四", "五", "六"];
      let getWeek = "星期" + weeks[week];
      this.nowTime = year + "年" + month + "月" + date + "日 " + getWeek;
    },
    showTime() {
      this.timeFormate(new Date());
      this.sitTime();
      this.timeId = setTimeout(this.showTime, 1000 * 60 * 60 * 24); //对日期实施有限制，设置1000可以避免，但是用css就没意义
    },
    beforeDestroy() {
      //实例销毁前清除定时器
      if (this.timeId) {
        clearInterval(this.timeId);
      }
    },
  },
};
</script>
<style scoped>

@property --h {
  syntax: "<integer>";
  inherits: false;
  initial-value: 0;
}
@property --m {
  syntax: "<integer>";
  inherits: false;
  initial-value: 0;
}
@property --s {
  syntax: "<integer>";
  inherits: false;
  initial-value: 0;
}

.time {
  display: flex;
  align-items: center;
  justify-content: center;
  --step: 60s;
  font-family: Consolas, Monaco, monospace;
  font-size: 1rem;
  .date {
    margin-right: 0.5rem;
  }
}
.split {
  animation: shark 1s step-end infinite;
}

.hour::after {
  counter-reset: hour var(--h);
  content: counter(hour, decimal-leading-zero);
  animation: hour calc(var(--step) * 60 * 24) infinite steps(24);
  animation-delay: calc(-1 * var(--step) * var(--dh) * 60);
}
.minitus::after {
  counter-reset: minitus var(--m);
  content: counter(minitus, decimal-leading-zero);
  animation: minitus calc(var(--step) * 60) infinite steps(60);
  animation-delay: calc(-1 * var(--step) * var(--dm));
}
.seconds::after {
  counter-reset: seconds var(--s);
  content: counter(seconds, decimal-leading-zero);
  animation: seconds var(--step) infinite steps(60);
  animation-delay: calc(-1 * var(--step) * var(--ds) / 60);
}
@keyframes hour {
  to {
    --h: 24;
  }
}
@keyframes minitus {
  to {
    --m: 60;
  }
}
@keyframes seconds {
  to {
    --s: 60;
  }
}
@keyframes shark {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.topp {
  top: 0.625rem;
  left: 1.875rem;
  display: inline-block;
  text-align: left !important;
  border-radius: 50%;
  line-height: 50px;
  vertical-align: middle;
  position: absolute;
  /* margin-right: 19.75rem; */
}
img {
  border-radius: 50%;

  width: 50px;
  margin-left: 0;
}
.top {
  font-family: "仿宋";
  font-weight: 900;
  font-size: 1.875rem;
  text-shadow: 10px 0px 5px #000000;
  display: inline-block;
  color: rgb(0, 0, 0);
}
.z_time {
  display: inline-block;
  right: 1.875rem;
  position: absolute;
  color: #000000;
  font-family: "仿宋";
  font-weight: 900;
}

</style>
