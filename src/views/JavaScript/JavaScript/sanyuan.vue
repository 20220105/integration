<template>
  <div class="JavaScript">
    <div v-highlight class="center">
      <pre>
    <code >
    // 条件运算符 ？语句 1 ： 语句 2
    // 如果表达式非布尔值会转换为布尔值
    var a = 10;
    b = 20;
    c=100;
    a > b ? alert('小于') : alert('大于')
            
    max= a > b ? a : b 
    console.log('max=' +max)
    max= max >c ? max :c 
    console.log('max=' + max) 
    // 套三元
    max = a >  b ? a > c ? a : c :b > c ? b : c
    console.log(12,max)
   max = a >  b ? (a > c ? a : c) :(b > c ?b : c)
    console.log('1231',max)
    // 逻辑与
    max = a > b && a>c ? a :  b>a && b>c ? b : c
    console.log('逻辑与',max)














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