<template>
  <div class="insert">
    <div class="pic">
      <img
        src="../assets/img1.jpg"
        style="height: 300px; width: 1200px; left: 200px"
      />
    </div>

    <div class="xsdt">
      <div class="t1" style="height: 15px; background: rgb(18, 112, 60)"></div>
      <p style="color: rgb(18, 112, 60); float: left; font-size: 20px">
        学术动态
      </p>
      <div>
        <el-card class="box-card">
          <div v-for="(o, p) in message" class="text item">
            {{ o.text }}
          </div>
        </el-card>
      </div>
      <div>
        <a
          href=""
          style="text-decoration: none; color: rgb(18, 112, 60); float: right"
          >More>></a
        >
      </div>
    </div>

    <div class="wxk">
      <div class="t1" style="height: 15px; background: rgb(17, 142, 184)"></div>
      <p
        style="
          color: rgb(17, 142, 184);
          float: left;
          font-size: 20px;
          margin-top: -350px;
        "
      >
        文献库
      </p>
      <div>
        <el-card class="box-card">
          <div v-for="(o, p) in m2" class="text item">
            {{ o.text }}
          </div>
        </el-card>
      </div>
      <div>
        <a
          href=""
          style="text-decoration: none; color: rgb(17, 142, 184); float: right"
          >More>></a
        >
      </div>
    </div>
    <div class="alk">
      <div class="t1" style="height: 15px; background: rgb(184, 139, 28)"></div>
      <p style="color: rgb(184, 139, 28); float: left; font-size: 20px;margin-top:-365px">
        案例库
      </p>
     <div class="block">
  <el-timeline>
    <el-timeline-item timestamp="2018/4/12" placement="top">
      <el-card>
        <h4>最新热门案例1</h4>
        <p>无声的教育――老禅师的育人技巧</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/3" placement="top">
      <el-card>
        <h4>最新热门案例2</h4>
        <p>人格的力量――张伯苓先生以身作则戒烟</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/2" placement="top">
      <el-card>
        <h4>最新热门案例3</h4>
        <p>一句话改变学生的命运――皮尔</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
  <div>
        <a
          href=""
          style="text-decoration: none; color:rgb(184, 139, 28); float: right"
          >More>></a
        >
      </div>
</div>
    </div>
    <div class="wjk">
      <div class="t1" style="height: 15px; background: maroon"></div>
      <p style="color: maroon; float: left; font-size: 20px;margin-top:-100px;">文件库</p>
      <div class="table1">
       <table>
           <tbody>
               <tr>
                   <td>中共中央印发《中国共产党巡视工作条例》</td>
                   <td class="time">2015-08-20</td>
               </tr>
               <tr>
                   <td>关于进一步落实领导干部带头在公共场合禁烟的通知</td>
                   <td class="time">2015-05-16</td>
                </tr>

                   
                   
                   <tr>
                   <td>中共中央办公厅、国务院办公厅印发《关于严禁党政机关到风景名胜区开会的通知》</td>
                   <td class="time">2015-05-16</td>
                   </tr>

                   <tr>
                   <td>党政领导干部选拔认证工作条例</td>
                   <td class="time">2015-05-16</td>
                   </tr>

                   <tr>
                   <td>关于进一步规范信访事项手里办理程序引导来访人依法逐级走访的方法</td>
                   <td class="time">2015-05-16</td>
                   </tr>

                   <tr>
                   <td>党政机关理性节约反对浪费条例</td>
                   <td class="time">2015-05-16</td>
                   </tr>
            
           </tbody>
       </table>
      </div>
      <div>
        <a
          href=""
          style="text-decoration: none; color:maroon; float: right;margin-top:-100px"
          >More>></a
        >
      </div>
    </div>
  </div>
</template>
<script >
export default {
  data() {
    return {
      message: [
        { link: "", text: "天职师大顺利开展2021级新生报到工作" },
        { link: "", text: "我校完成二届党委第二轮巡察情况反馈" },
        { link: "", text: "天津职业技术师范大学2021级新生开学典礼隆重举行" },
        { link: "", text: "《中国古代文学》：品味经典 浸润人生" },
      ],
      m2: [
        {
          link: "",
          text: "《陶行知文集》陶行知,江苏教育出版社,2001年3月",
        },
        {
          link: "",
          text: "《新教育之梦》(朱永新)人民教育出版社,2002年7月版",
        },
        {
          link: "",
          text: "《终身教育引论》[法]保罗·郎格朗",
        },
        {
          link: "",
          text: "《明日之学校》(杜威著,赵祥麟、王承绪编译)",
        },
      ],
    };
  },
};
</script>


<style scoped>
.insert {
  width: 100%;
  height: 1500px;
  margin-top: -130px;
  background: rgb(216, 213, 213);
}
.pic {
  margin-left: -15px;
}
.xsdt {
  margin-top: 20px;
  margin-left: 50px;
  width: 350px;
  height: 400px;
  background: rgb(252, 252, 252);
}
.wxk {
  margin-top: -400px;
  margin-left: 450px;
  width: 350px;
  height: 400px;
  background: rgb(252, 252, 252);
}
.alk {
  margin-top: -400px;
  margin-left: 850px;
  width: 350px;
  height: 700px;
  background: rgb(252, 252, 252);
}
.wjk {
  margin-top: -250px;
  margin-left: 50px;
  width: 750px;
  height: 400px;
  background: rgb(252, 252, 252);
}
.xsdt t1 {
  width: 350px;

  position: absolute;
}

.text {
  font-size: 7px;
}

.item {
  height: 50px;
  width: 300px;
  margin-left: -21px;
  margin-bottom: 10px;
  background: rgb(243, 245, 248);
  text-align: center;
  line-height: 40px;
  border: rgb(179, 224, 209);
  border-radius: 8px;
}

.box-card {
  margin-top: 65px;
  margin-left: 20px;
  width: 300px;
}

.block {
  top: 80px;
  left: -20px;
  position: relative;
}

.table1 table {
  margin-top: -50px;
  float: left;
  border-spacing: 2px;
  height: 400px;
}

.table1 table tr {
  color: #606266;
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  font-size: 14px;
  margin-bottom: 15px;
  line-height: 1.5em;
  float: left;
}
.table1 table td {
    border-bottom: 1px solid #9da1ad;
    width: 800px;
}
.time{
    width: 100px;
}
</style>