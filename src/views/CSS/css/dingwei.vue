<template>
  <div class="box">
    <div class="top">
      <table border="1" cellspacing="0" cellpadding="10">
        <tr>
          <td colspan="2">position</td>
        </tr>
        <tr>
          <td>static 定位</td>
          <td class="left">
            HTML 元素的默认值，即没有定位，遵循正常的文档流对象。
          </td>
        </tr>
        <tr>
          <td>fixed 定位</td>
          <td class="left">
            元素的位置相对于浏览器窗口是固定位置。
            即使窗口是滚动的它也不会移动：
          </td>
        </tr>
        <tr>
          <td>relative 定位</td>
          <td class="left">相对定位元素的定位是相对其正常位置。</td>
        </tr>
        <tr>
          <td>absolute 定位</td>
          <td class="left">
            绝对定位的元素的位置相对于最近的已定位父元素 <br />
            absolute 定位使元素的位置与文档流无关，因此不占据空间。 absolute
            定位的元素和其他元素重叠。
          </td>
        </tr>
        <tr>
          <td>sticky 定位</td>
          <td class="left">
            position: sticky; 基于用户的滚动位置来定位。<br />粘性定位的元素是依赖于用户的滚动，在
            position:relative 与 position:fixed 定位之间切换。<br />
            它的行为就像 position:relative;
            而当页面滚动超出目标区域时，它的表现就像
            position:fixed;，它会固定在目标位置。
          </td>
        </tr>
        <tr>
          <td>重叠的元素 z-index</td>
          <td class="left">
            元素的定位与文档流无关，所以它们可以覆盖页面上的其它元素
            <br />属性指定了一个元素的堆叠顺序
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
@import url('@/assets/css.css');
</style>