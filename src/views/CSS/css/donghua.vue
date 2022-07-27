<template>
  <div class="box">
    <div class="top">
      <table border="1" cellspacing="0" cellpadding="10">
        <tr>
          <td colspan="2">动画</td>
        </tr>
        <tr>
          <td>@keyframes</td>
          <td class="left">	规定动画。</td>
        </tr>
        <tr>
          <td>animation</td>
          <td class="left">	所有动画属性的简写属性。</td>
        </tr>
        <tr>
          <td>animation-name</td>
          <td class="left">	规定 @keyframes 动画的名称。</td>
        </tr>
        <tr>
          <td>animation-duration</td>
          <td class="left">	规定动画完成一个周期所花费的秒或毫秒。默认是 0。</td>
        </tr>
        <tr>
          <td>animation-timing-function</td>
          <td class="left">规定动画的速度曲线。默认是 "ease"。</td>
        </tr>
        <tr>
          <td>animation-fill-mode</td>
          <td class="left">
           规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。
          </td>
        </tr>
        <tr>
          <td>animation-delay</td>
          <td class="left">规定动画何时开始。默认是 0。</td>
        </tr>
        <tr>
          <td>animation-iteration-count</td>
          <td class="left">规定动画被播放的次数。默认是 1。</td>
        </tr>
        <tr>
          <td>animation-direction</td>
          <td class="left">规定动画是否在下一周期逆向地播放。默认是 "normal"。</td>
        </tr>
        <tr>
          <td>animation-play-state</td>
          <td class="left">	规定动画是否正在运行或暂停。默认是 "running"。</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
@import url("@/assets/css.css");
</style>