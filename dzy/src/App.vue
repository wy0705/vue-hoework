<template>
  <div id="app">
    <div>
      <div class="pic">
        <img
          src="./assets/logo.jpg"
          style="width：90px;height:60px;left:30px;margin-left: -200px;"
        />
      </div>
      <div class="ziti">
        <h2>高校内部权力运行数据库</h2>
        <h6>Operation of University Internal Powers Database</h6>
      </div>

      <div class="right">
        <a href="">会员登录|</a>
        <a href="">注册 |</a>
        <a href="">收藏 </a>
        <p>最新通知 : 1231027473484234</p>
      </div>
    </div>
    <div>
      <div class="menu" style=" background: rgb(36, 34, 34);">
        <a href="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首页 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
        <a href="">学术动态  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
        <a href="/#/p1">文献库  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a>
        <a href="">文件库 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
        <a href="">案例库 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
        <a href="">联系我们  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
        <a href="">关于我们 </a>

        <div class="input1">
          <input type="text" />
        </div>
      </div>
    </div>  
    <router-view />
</div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.pic {
  margin-left: -900px;
}
.ziti {
  margin-left: 10px;
  position: relative;

  float: left;
  top: -85px;
  left: 130px;
}
.ziti h {
  text-align: left;
}

.right {
  float: right;
  margin-top: -30px;
  
}
.right a{
  text-decoration:none;
}
.menu {
  margin-top: -90px;
  width: 100%;
  height: 40px;
  font-size: 14px;
  float: left;
  float: left;
  line-height: 250%;
 
}
.menu a {
  color: aliceblue;
  float: left;
  text-decoration:none;
}
.input1 {
  float: right;
  margin-top: 4px;
}
</style>
