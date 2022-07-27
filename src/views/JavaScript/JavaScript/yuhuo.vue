<template>
  <div class="JavaScript">
    <div v-highlight class="center">
      <pre>
    <code >
    //  逻辑运算符号  非！  与&&  或||
        // 如果对非布尔值进行元素转换，回先转为布尔值，然后取反
        // 两次取反转为布尔值
        // !
        var a = true;
        a = !!a;
        console.log(a);

        //  &&
        // 只要有一个false是时候返回false 
        // 全为true时候true
        // 如果都为true则返回最后的 如果都为false则返回前的
        var result = false && false;

        console.log(result);
        //  ||
        // 只要有一个true就是true
        // 都为false就是false
        // 如果第一个为ture就返回true
        // 如果都为false则返回最后一个
        var dd = true || false;
        console.log(dd)















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