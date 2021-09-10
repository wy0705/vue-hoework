<template>
  <div class="insert">
    <div class="nav">
      <div class="nav-a">
        <ul class="nav-a-ul">
          <i class="el-icon-s-home" style="color: #fff"></i>
          <li
            class="nav-a-li"
            :class="classA == index ? 'active' : ''"
            @click="selected(index)"
            v-for="(item, index) in configNav"
          >
            <router-link
              :to="item.path"
              class="nav-a-text"
              @click="showToggle(index)"
              >{{ item.name }}</router-link
            >
            <ul class="menu_ul" :class="{ active: index === isShow }">
              <li
                class="menu_li"
                v-for="nav in item.subItems"
                :class="classB == nav ? 'active' : ''"
                @click="menuselected(nav)"
              >
                <router-link
                  class="menu_ul_text"
                  :to="nav.link"
                  :class="{ active: nav.link == linkClick }"
                  @click="treeNavSwitch(nav)"
                  >{{ nav.text }}</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="henglan">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="mp">
        <el-breadcrumb-item :to="{ path: '/' }"
          >您的位置： 首页</el-breadcrumb-item
        >
        <el-breadcrumb-item>文献库</el-breadcrumb-item>
        <el-breadcrumb-item>国内文献库</el-breadcrumb-item>
        <el-breadcrumb-item><router-link to="/p2" style="text-decoration:none">学术专著</router-link></el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="bot">
      <i class="el-icon-phone-outline" style="color: #fff"></i>
      <p>联系我们</p>
    </div>
    <div class="xm">
      <p>xxxx大学高等教育研究院</p>
      <p>高校内部权力制约与监督机制研究课题组</p>
      <p>电子邮箱：1142551384@qq.com</p>
      <p>电 话：15639142408</p>
    </div>

    <div class="boder">
      <router-view />
    </div>
  </div>
</template>


<script>
export default {
  name: "Header",
  data() {
    return {
      show: false,
      classA: 0,
      classB: 0,
      isShow: 0,
      linkClick: "",
      configNav: [
        {
          name: "文献库",
          path: "",
          subItems: [
            { link: "", text: "国内文献库" },
            { link: "", text: "学术论文" },
            { link: "/p2", text: "学术专著" },
            { link: "", text: "国外文献库" },
          ],
        },
      ],
    };
  },
  methods: {
    selected: function (index) {
      this.classA = index;
    },
    menuselected: function (nav) {
      this.classB = nav;
    },
    showToggle: function (index) {
      this.isShow = index;
    },
    treeNavSwitch: function (nav) {
      this.linkClick = nav.link;
    },
  },
};
</script>

<style scoped>
.boder {
  width: 850px;
  border: 1px solid rgb(99, 173, 38);
  height: 300px;
  margin-top: -250px;
  float: right;
  margin-right: 100px;
}
.nav {
  width: 80%;
  min-width: 1300px;
  height: auto;
  margin: 0px auto;
  position: absolute;
  border-bottom: none;
  line-height: 65px;
}
.nav-a {
  cursor: pointer;
  float: left;
  margin-left: 50px;
  letter-spacing: 4px;
  position: relative;
}
.nav-a-ul {
  list-style: none;
  height: 30px;
  background: rgb(99, 173, 38);
  height: 30px;
  line-height: 30px;
}

.nav-a-ul i {
  margin-right: -60px;
}
.nav-a-li {
  display: inline-block;
  margin-left: 30px;

  width: 140px;

  border-radius: 2px;
}

.nav-a-text {
  font-size: 15px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(255, 255, 255);
  text-decoration: none;
}
.menu_ul {
  width: 130px;
  list-style: none;
  background: rgb(255, 255, 255);
  border-radius: 3px;
  z-index: 999;
  position: absolute;
  top: 58px;
  left: -40px;
}
.menu_li {
  height: 30px;
  line-height: 30px;
  padding-left: 12px;
}
.menu_ul_text {
  font-size: 14px;
  color: #666;
  letter-spacing: 0;
  line-height: 30px;
  text-decoration: none;
  padding-left: 6px;
}
.nav-a-li:hover {
  border-bottom: 2px solid rgb(0, 0, 0);
}
.nav-a-li.active {
  border-bottom: 2px solid rgb(0, 0, 0);
}

.nav-a-li:hover .menu_ul {
  display: block;
}
.menu_ul_text:hover {
  color: #2589ff;
}
.menu_li.active .menu_ul_text {
  color: #2589ff;
}

.insert {
  width: 100%;
  height: 380px;
  margin-top: 90px;
  /* background: brown; */
}

.bot {
  background: rgb(36, 34, 34);
  list-style: none;
  width: 178.5px;
  margin-left: 50px;
  position: relative;
  top: 200px;

  text-align: center;
  height: 30px;
}
.bot p {
  font-size: 15px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(255, 255, 255);
  position: relative;
  text-align: center;
  width: 180px;
  height: 30px;
  top: -55px;
}
.bot i {
  top: -20px;
  position: relative;
  left: -50px;
}
.xm {
  width: 180px;
  height: 80px;
  margin-top: 200px;
  margin-left: 60px;
}
.xm p {
  font-size: 8px;
}

.henglan {
  list-style: none;
  height: 30px;
  background: rgb(99, 173, 38);
  line-height: 30px;
  width: 850px;
  margin-top: -8px;
  margin-right: 100px;
  float: right;
  text-align: right;
}

.mp {
  float: right;
  line-height: 30px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
