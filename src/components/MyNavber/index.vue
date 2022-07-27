<template>
  <div>
    <el-menu
      :router="true"
      default-active="/HTML"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="/HTML">
        <i class="el-icon-s-promotion"></i>
        <span slot="title">HTML</span>
      </el-menu-item>
      <el-menu-item index="/CSS">
        <i class="el-icon-s-open"></i>
        <span slot="title">CSS</span>
      </el-menu-item>
      <el-menu-item index="/JavaScript">
        <i class="el-icon-s-flag"></i>
        <span slot="title">JavaScript</span>
      </el-menu-item>
      <el-menu-item index="/Assembly">
        <i class="el-icon-sunny"></i>
        <span slot="title">Assembly </span>
      </el-menu-item>
      <el-menu-item index="/Vue">
        <i class="el-icon-apple"></i>
        <span slot="title">Vue</span>
      </el-menu-item>
      <el-menu-item index="/Uniapp">
        <i class="el-icon-watermelon"></i>
        <span slot="title">Uniapp</span> </el-menu-item
      ><el-menu-item index="/React">
        <i class="el-icon-cherry"></i>
        <span slot="title">React</span> </el-menu-item
      ><el-menu-item index="/Tool">
        <i class="el-icon-coffee-cup"></i>
        <span slot="title">Tool</span>
      </el-menu-item>
      <el-menu-item index="/Methods">
        <i class="el-icon-s-cooperation"></i>
        <span slot="title">Methods</span>
      </el-menu-item>
      <el-menu-item index="/Interview">
        <i class="el-icon-service"></i>
        <span slot="title">Music</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped>
.aaa /deep/ {
  border-radius: 50% !important;
}
.tac {
  background-color: aliceblue;
}
span:hover {
  color: rgba(255, 187, 0, 0.723);
}
</style>
