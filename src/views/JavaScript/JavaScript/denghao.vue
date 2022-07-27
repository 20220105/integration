<template>
  <div class="JavaScript">
    <div v-highlight class="center">
      <pre>
    <code >
        // 相等运算符用来比较值是否相等
        //  =  一个是赋值
        //  != 不相等
        //  == 判断两个值是否相等 不能有空格
        //  undefined衍生自null
        // ===不会做类型转换
        // ！==不全等
        console.log(undefined == null)
        // NAN不和任何值相等
        console.log(NaN == NaN)
        // 判断是不是NaN
        isNaN();
        //  null不等于0
        console.log(null == 0)
        
        
        // 对于非数值转换时先转换在比较
        // 任何值和NAN比较时候都是false
        var a=10>5;
        console.log(a)
        aa =true>false;
        console.log(aa);
        // 两个字符串比较时候比较的事字符串编码
        ss= "a" > "b";
        console.log(ss)

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