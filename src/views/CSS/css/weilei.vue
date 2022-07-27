<template>
  <div class="box">
    <div class="top">
      <table border="1" cellspacing="0" cellpadding="10">
        <tr>
          <td colspan="4">伪类</td>
        </tr>
        <tr>
          <td>input:checked</td>
          <td class="left">选择所有选中的表单元素</td>
          <td>input:disabled</td>
          <td class="left">选择所有禁用的表单元素</td>
        </tr>
        <tr>
          <td>p:empty</td>
          <td class="left">选择所有没有子元素的p元素</td>
          <td>input:enabled</td>
          <td class="left">选择所有启用的表单元素</td>
        </tr>
        <tr>
          <td>p:first-of-type</td>
          <td class="left">选择的每个 p 元素是其父元素的第一个 p 元素</td>
          <td>input:in-range</td>
          <td class="left">选择元素指定范围内的值</td>
        </tr>
        <tr>
          <td>input:invalid</td>
          <td class="left">选择所有无效的元素</td>
          <td>p:last-child</td>
          <td class="left">选择所有p元素的最后一个子元素</td>
        </tr>
        <tr>
          <td>p:last-of-type</td>
          <td class="left">选择每个p元素是其母元素的最后一个p元素</td>
          <td>:not(p)</td>
          <td class="left">选择所有p以外的元素</td>
        </tr>
        <tr>
          <td>p:nth-child(2)</td>
          <td class="left">选择所有 p 元素的父元素的第二个子元素</td>
          <td>p:nth-last-child(2)</td>
          <td class="left">选择所有p元素倒数的第二个子元素</td>
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