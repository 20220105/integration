<template>
  <div class="JavaScript">
    <div v-highlight class="center">
      <pre>
    <code >
引用数据类型：object。

基本数据类型：

（1）number 数字

（2）string 字符串

（3）null 空

（4） undefined 未定义

（5）boolean 布尔值




  //    基本数据数据类型都在栈内存中存储
        // 值与值之间独立存在


        // 对象保存在堆内存中
        // 每创一个一个新的对象就会在堆中开辟一个新的空间
        // 对象保存的是值在堆内的地址
        // 新对象指向的也是地址
        // 相当当于多人看电视 一个人换台其他人也跟着看其他的电视台

    //    基本数据类型比较的是值 引用数据类型比较的是对象的内存地址
        // 新创建俩对象  == 时候 false 值得地址不一样

        let a = new Object();
        a.name = '齐天大圣';
        a.age = '100';
        a.sex = "雄性";
        let b = a;
        console.log(b==a)
        console.log(a);
        b.name = '猪八戒'
        console.log(b);
        // 新对象改变 原值也改变 
        console.log(a);
        delete b.name;
        console.log(b);
        console.log(a)

        b = null;
        console.log(b);
        console.log(a)












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