<template>
  <div>
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
.Contact_me {
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0;
  padding: 0;
  margin-top: -1rem;
  margin-right: 0rem;
  border-radius: 0;
  width: 10.125rem;
  height: 10.125rem;
}
.Contact_me > img {
  width: 10.125rem;
  height: 10.125rem;
  margin-right: -1rem;
}
.backg {
  margin-top: 10%;
  margin-left: 45%;
  width: 12.725rem;
  height: 12.725rem;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 50%;
  background-image: linear-gradient(to right, #00dbde 0%, #fc00ff 100%);
}
.top_text {
  padding: 1rem;
  font-size: 1.5625rem;
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
  padding: 1.5rem 2.5rem;
  border-radius: 0.625rem;
  font-weight: 900;
  text-align: center;
}
.portrait {
  margin-top: 1rem;
  margin-left: 1rem;
  width: 10.725rem;
  height: 10.725rem;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
}
.portrait>img {
  display: inline-block;
  text-align: center;
  margin-top: 1.5rem;
  width: 10.725rem;
  height: 7.725rem;
  border-radius: 50%;
}
</style>