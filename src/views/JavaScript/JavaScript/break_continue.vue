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
  </code>
  </pre>
    </div>
    <div v-highlight class="center">
      <pre>
    <code >
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
@import url('@/assets/js.css');
</style>