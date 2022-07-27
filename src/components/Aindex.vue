<template>
  <div class="fiex">
    <div class="top_text">
      Hello, Welcome to my notebook ！

      <div class="Contact_me">
        <img src="../assets/1.png" alt="" title="联系我" />
      </div>
    </div>
    <div class="backg">
      <div class="portrait">
        <img
          src="https://img0.baidu.com/it/u=1951419040,733742595&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500"
          alt=""
        />
      </div>
    </div>
    <div class="where">
      <router-link to="/Population" class="index">Follow me</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.fiex{
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  margin: 0;
}
.Contact_me {
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0;
  padding: 0;
  margin-top: -16px;
  margin-right: 0;
  border-radius: 0;
  width: 162px;
  height: 162px;
}
.Contact_me > img {
 width: 162px;
  height: 162px;
  margin-right: -16px;
}
.backg {
  margin-top: 10%;
  margin-left: 43.5%;
  width: 203.6px;
  height: 203.6px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 50%;
  background-image: linear-gradient(to right, #00dbde 0%, #fc00ff 100%);
}
.top_text {
  padding: 16px;
  font-size: 25px;
  font-weight: 900;
}
.where {
  margin-left: 45.5%;
  margin-top: 7%;
}
.index {
  text-decoration: none;
  color: rgb(0, 255, 21);
  border: 5px solid rgb(255, 137, 137);
  padding: 24px 40px;
  border-radius: 10px;
  font-weight: 900;
  text-align: center;
}
.portrait {
  margin-top: 16px;
  margin-left: 16px;
  width: 171.6px;
  height: 171.6px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
}
.portrait>img {
  display: inline-block;
  text-align: center;
  margin-top: 24px;
  width: 171.6px;
  height: 123.6px;
  border-radius: 50%;
}
</style>