<template>
  <div class="JavaScript">
    <div v-highlight class="center">
      <pre>
    <code >
        var a = 1;
        while (a < 10) {
            a++;
            console.log(a)
       }
         for循环语法： 
        for(1 初始化表达式; 2 条件表达式; 4更新表示式){
             3 语句
         }

         执行表达式初始化变量
         执行条件表达式 判断是否执行循环
         执行更新表达式
         for(var i = 0; i< 10;i++){
             console.log(i)
           }
         for(var i=1,sum=0;i<=100;i++){
           if(i%2 !=0){
                sum=sum+i;
            }
         }
         console.log(sum)

         for(var a=1,su=0,j=0;a<=100;a++){
             // 不能等于1
             if(a%7 ==0){
                 su=su+a;
                j++;
             }
       }
         console.log(su)
         console.log(j)




         for (var d = 100; d < 1000; d++) {
             var bai = parseInt(d / 100);
             var shi = parseInt((d - bai * 100) / 10);
             var ge = d % 10;
             if (bai * bai * bai + shi * shi * shi + ge * ge * ge == d) {
                 console.log(d)
            }

        }


        var num = prompt('请输入大于1的数组')
        if(num<=1){
            alert('不合法')
        }else{
               var flag=true;
            for(var i=2;i< num;i++){
                if(num % i ==0){
                    flag=!flag;
                }
            }
            if(flag){
                alert('是质数')
            }else{
                alert('不是质数')
            }
        }


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