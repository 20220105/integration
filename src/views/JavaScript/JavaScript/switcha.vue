<template>
  <div class="JavaScript">
    <div v-highlight class="center">
      <pre>
    <code >
    // switch(条件表达式){
        //     case 表达式：
        //     语句...
        //     break
        // }
        //  在执行时一次降case后的值和switch进行全等比较
        // 如果为真当前代码开始执行
        //  break 退出语句

        var score = 55;
        switch (parseInt(score / 10)) {
            case 10:
            case 9:
            case 8:
            case 7:
            case 6:
                console.log('合格');
                break;
            default:
                console.log('不合格');
                break;
        }
        switch (true) {
            case score >= 60:
                console.log('合格');
                break;
            default:
                console.log('不合格');
                break;
        }
        //  while循环
        // while(条件语句){
        //     语句
        // }
        // var n = 1;
        // while (true) {
        //     alert(n++);
        //     if (n == 10) {
        //         break;
        //     }
        // }
        //  do...while先执行性 再判断。可以保证至少循环一次
        // while先判断在执行
        // var n = 1;
        // while (n<106) {
        //         document.write(n+'<br/>')
        //          n++;
        // }

        var money = 1000;
        var n = 0;
        while (money <= 5000) {
            money *= 1.05;
            n++;
        }
        console.log(money)
        console.log(n)










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