<template>
  <div class="JavaScript">
    <div v-highlight class="center">
      <pre>
    <code >

强制数据类型转换


（1）转字符串：tostring()
var a=123;
console.log(typeof(a),a);
 
var b= a.toString();
console.log(typeof(b),b);

var c = 123;
 console.log(typeof(c),c);
 var  c= String(c);
 console.log(typeof(c),c);
复制代码
该方法不会影响原变量但对于null 和undefined无效，可以使用string()方法。
（2）转number ：number()函数
如果是纯数字 转为数字
如果是非数值内容  转为NAN
如果是空 或者是空格字符串直接为0
undefined转数字是NAN
true 0  false 0
var aa = '';
console.log(typeof(aa),aa );
var bb = Number(aa);
console.log(typeof(bb),bb );
复制代码
（3）布尔值:Boolean()
除了0和NAN都是true
除了空串都是true
undefined false
obect true












  </code>
  </pre>
    </div>
 
  </div>
</template>
<script>
</script>
<style scoped>
@import url('@/assets/js.css');
</style>