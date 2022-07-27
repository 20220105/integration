<template>
  <div class="box">
    <div class="top">
      <table border="1" cellspacing="0" cellpadding="10">
        <tr>
          <td colspan="2">伪元素</td>
        </tr>
        <tr>
          <td>	a:link</td>
          <td class="left">	选择所有未访问链接	</td>
        </tr>
        <tr>
          <td>	a:visited</td>
          <td class="left">选择所有访问过的链接	</td>
        </tr>
        <tr>
          <td>a:active</td>
          <td class="left">	选择正在活动链接</td>
        </tr>
        <tr>
          <td>	a:hover</td>
          <td class="left">	把鼠标放在链接上的状态</td>
        </tr>
       <tr>
          <td>	input:focus</td>
          <td class="left">选择元素输入后具有焦点</td>
        </tr><tr>
          <td>p:first-letter</td>
          <td class="left">	选择每个 p 元素的第一个字母</td>
        </tr><tr>
          <td>	p:first-line</td>
          <td class="left">		选择每个p 元素的第一行</td>
        </tr><tr>
          <td>	p:first-child</td>
          <td class="left">	选择器匹配属于任意元素的第一个子元素的 p 元素</td>
        </tr><tr>
          <td>	p:before</td>
          <td class="left">		在每个p元素之前插入内容</td>
        </tr><tr>
          <td>	p:after</td>
          <td class="left">	在每个p元素之后插入内容</td>
        </tr><tr>
          <td>p:lang(it)</td>
          <td class="left">	为p元素的lang属性选择一个开始值</td>
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