<template>
  <div class="JavaScript">
    <div v-highlight class="center">
      <pre>
    <code >
       var chengji = prompt('请输入成绩');
        if (chengji > 100 || chengji < 0 || isNaN(chengji)) { alert('你能靠这么高') } else {
            if (chengji == 100) {
                alert('BMW')
            } else if (chengji >= 80 && chengji <= 99) {
                alert('iphone15')
            } else if (chengji >= 60 && chengji < 80) {
                alert('参考书')
            } else {
                alert('挨打')
            }

        }
        var a = prompt('请输入身高');
        b = prompt('请输入彩礼');
        c = prompt('请输入颜值');
        if (a >= 180 && b >= 1000 && c >= 500) {
            alert('我一定要嫁给他')
        } else if (a >= 180 || b >= 1000 || c >= 500) {
            alert('比上不足比下有余，嫁吧')
        } else if (a < 180 && b < 1000 && c < 500) {
            alert('坚决不嫁')
        }

         var a=+ prompt('数字1');
             b=+ prompt('数字2');
             c=+ prompt('数字3');
            if(a<b && a<c){
                if(b<c){
                    alert(a+','+b+','+c)
                }else if(b>c){
                    alert(a+','+c+','+b)
                }
            }else if(b<a && b< c){
                if(a<c){
                    alert(b+','+a+','+c)
                }else if(a>c){
                    alert(b+','+c+','+a)
                }
            }else if(c<a && c<b){
            if(a<b){
                alert(c+','+a+','+b)
            }else if(a>b){
                alert(c+','+b+','+a)
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