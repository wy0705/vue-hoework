<template>
<div>
<div class="top">
<div>关键词：<input/>发表日期：<input type="text">~<input type=""><button>搜索</button></div>
</div>

    <div>
<el-collapse v-model="activeName" accordion>
  <el-collapse-item title="2021-09-01     习近平：信念坚定对党忠诚实事求是担当作为 努力成为可堪大用能担重任的栋梁之才" name="1">
    <div><router-link to="/p3" style="text-decoration:none">习近平在中央党校（国家行政学院）中青年干部培训班开班式上发表重要讲话强调信念坚定对党忠诚实事求是担当作为</router-link></div>
    <div><router-link to="/p3" style="text-decoration:none">努力成为可堪大用能担重任的栋梁之才</router-link></div>
  </el-collapse-item>
  <el-collapse-item title="2021-09-04     梦想启航！天津职业技术师范大学2021级新生开学典礼隆重举行" name="2">
    <div><router-link to="/p4" style="text-decoration:none">潜心读书，不负韶华；动手动脑，全面发展；爱国敬业，团结创新；志存高远，报效祖国！</router-link></div>
    <div><router-link to="/p4" style="text-decoration:none">开学典礼在天津职业技术师范大学校歌声中圆满结束。</router-link></div>
  </el-collapse-item>
  <el-collapse-item title="2021-08-29     【学习进行时】习近平出席中央民族工作会议并发表重要讲话" name="3">
    <div><router-link to="/p5" style="text-decoration:none">习近平在中央民族工作会议上强调 以铸牢中华民族共同体意识为主线 推动新时代党的民族工作高质量发展</router-link></div>
    <div><router-link to="/p5" style="text-decoration:none">李克强主持 栗战书王沪宁赵乐际韩正出席 汪洋讲话</router-link></div>
  </el-collapse-item>

</el-collapse>    </div></div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: '1'
      };
    }
  }
</script>

<style scoped>
.top{
    height: 40px;
    border:1px solid rgb(99, 173, 38);
    text-align: center;
    line-height: 40px;
}
.top button{
    background: rgb(99, 173, 38);
}
</style>