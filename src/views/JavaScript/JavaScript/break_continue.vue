<template>
  <div class="JavaScript">
    <div v-highlight class="center">
      <pre>
    <code >
      break：
     &lt;script&gt;
        // 1. 起个名字 终止循环
        a:
        for (i = 0; i <= 10; i++) {
            for (j = 0; j <= i; j++) {
                document.write("&lt;div &gt;" + j + "X" + i + "=" + j * i + "&lt;/div &gt;")
                // 2. 终止指定的循环a，默认情况下终止最近的循环
                break a;
                // 3. 条件终止
                if (j == 8) {
                    break;
                }
            }
            document.write(' &lt;br /&gt;')
        }
    &lt;/script&gt;

    continue：

        &lt;script&gt;
        // 1.起名字
        a:
        for (i = 1; i <= 4; i++) {
            // 2. 设置终止
            continue a;
            for (j = 1; j <= i; j++) {
                   document.write("&lt;div &gt;" + j + "X" + i + "=" + j * i + "&lt;/div &gt;")

                //    条件判断终止
                if (j == 3) {
                    continue
                }
            }
                       document.write(' &lt;br /&gt;')

        }
    &lt;/script&gt;

    </code>
  </pre>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
.center {
  margin: auto;
  opacity: 1;
font-size: 16px;
}
.JavaScript {
  opacity: 0.9;
  background-color: rgba(255, 255, 255, 0.83);
  height: 35.3rem;
  width: 70rem;
  margin-left: 1.5rem;
  border-radius: 1rem;
  font-weight: 900;
  text-align: left;
  padding-left: 1.875rem;
  color: black;
  font-weight: 900;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 1rem;
  display: flex;
  background-attachment: fixed;
  overflow-y:scroll ;
}
/* 隐藏滚动条 */
.JavaScript::-webkit-scrollbar {
  display: none;
}
</style>