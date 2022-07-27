<template>
  <div class="JavaScript">
    <div v-highlight class="center">
      <pre>
    <code >
   // 自增 ++
        // 对于一个变量以后 原变量的值会立即增加1
        //  后++ (a++) 前 ++ （++ a） 
        //  不同的是值不同 a++ 表达的是自增前的值  ++a是自增后的值
        var a = 1;
        a = a++;
        console.log(a)
        a++;
        console.log(a)
        b = 10;
        b = b++ + ++b + b;
        //  第一个b 当前表达是 10 第二个是表达式12 第三个 12
        // 从左往右执行
        // 34
        console.log(b)
       // 自减 --
       // 在自身的基础上减一
      // 前 --a  后 a-- 立即使原变量值减一 
      //  a-- 自减前的值
      //  --a 自减新值 




     var n1 = 10;
            n2 = 20;
        var n = n1++;
        console.log(n);
// 10
        console.log(n1);
// 11
        n = ++n1;
        console.log(n)
// 12
        console.log(n1)
// 12
        n = n2--;
        console.log(n)
// 20
        console.log(n2)
// 19
        n = --n2;
        console.log(n)
// 18
        console.log(n2)
// 18















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