<template>
  <div>
    <div class="background">
      <router-view></router-view>
<!-- f分页按钮 -->
    <!-- <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :hide-on-single-page="value"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div> -->
    </div>
  </div>
</template>
<script>
// 引入花瓣
import {} from '@/assets/index';
  export default {
    methods: {
      
      // handleSizeChange(val) {
      //   console.log(`每页 ${val} 条`);
      // },
      // handleCurrentChange(val) {
      //   console.log(`当前页: ${val}`);
      // }
    },
    data() {
      return {
           value: true,
        currentPage: 1,
     
      };
    }
  }

</script>
<style>
/* 分页样式 */
/* .block{
  bottom: 0;
  position:absolute ;
  text-align: center;
  margin-left: 30%;
} */
/* 全局样式 */
body {
  margin: 0;
  
}
</style>
