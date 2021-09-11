<template>
<div>
<div class="top">
<div>关键词：<input/>发表日期：<input type="text">~<input type=""><button>搜索</button></div>
</div>

    <div>
<el-collapse v-model="activeName" accordion>
  <el-collapse-item title="2021-09-01     C语言开发单片机为什么大多数都采用全局变量的形式？" name="1">
    <div><router-link to="/p3" style="text-decoration:none">，其实在做一些中大型项目的时候，为了保证程序可移植性和可扩展性，都会采用面向对象的编程思维。</router-link></div>
    <div><router-link to="/p3" style="text-decoration:none">STM32固件库把每个外设可以配置的参数都通过结构体封装起来，比如说GPIO有具体引脚(GPIO_Pin)，频率(GPIO_Speed)，工作模式(GPIO_Mode)。</router-link></div>
  </el-collapse-item>
  <el-collapse-item title="2021-09-04     Python访问街区所有节点最短路径问题，并结合matplotlib可视化" name="2">
    <div><router-link to="/p4" style="text-decoration:none"> N个点除去起点，即N-1个点全排列；</router-link></div>
    <div><router-link to="/p4" style="text-decoration:none">为了更加直观，便于可视化，可以matplotlib、pyecharts绘制路线出来~</router-link></div>
  </el-collapse-item>
  <el-collapse-item title="2021-08-29     “人工智障”的机器学习处理日常实用性问题，你知道有多少？" name="3">
    <div><router-link to="/p5" style="text-decoration:none">机器学习问题很多。它们构成了你每天在网络或桌面上使用的软件的核心或困难部分。想想Twitter上的“你想要遵循”的建议，以及苹果Siri的演讲理解。</router-link></div>
    <div><router-link to="/p5" style="text-decoration:none">数据的标签意味着它被分配了一个类，例如垃圾邮件/非垃圾邮件或欺诈/非欺诈。正在建模的决定是将标签分配给新的未贴标签的数据。这可以被认为是一个歧视问题，模拟群体之间的差异或相似之处。</router-link></div>
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
