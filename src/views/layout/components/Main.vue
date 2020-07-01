<template>
    <div class="main" v-if="this.$route.path == '/main' || this.$route.path == '/admin'">
      <template>
        <!-- Scroll down to see the bottom-right button. -->
        <el-backtop target=".main">
          <div
            style="{
                        height: 100%;
                        width: 100%;
                        text-align: center;
                    }"
          >
            <img src="https://blog.ixuchao.cn/usr/themes/Plain-master/images/commentsbg.gif" alt />
          </div>
        </el-backtop>
      </template>
      <section>
        <h2 class="title">网站概要</h2>
        <p>
          目前有
          <em>6</em> 篇文章, 并有 0 条关于你的评论在 8 个分类中.点击下面的链接快速开始:
        </p>
        <ul>
          <li>撰写新文章</li>
          <li>更换外观</li>
          <li>插件管理</li>
          <li>系统设置</li>
        </ul>
      </section>
      <section>
        <p>{{gettime}}</p>
        <div id="myecharts" class="myecharts"></div>
    <!--    <div class="left">
     <div v-for="it in its1" :key="it.id">
        <el-tooltip class="item"  effect="light" placement="bottom-start">
            <div slot="content">名称：{{it.name}}<br/>个数：{{it.num}}</div>
            <div class="name" @click="go"> {{ it.name.substring(0,4)+'...' }}</div>
        </el-tooltip>
        <div class="num">{{ it.num }}</div>
    </div>
</div> -->

<!-- <div class="right">
    <div v-for="it in its2" :key="it.id">
        <el-tooltip class="item"  effect="light" placement="bottom-start">
            <div slot="content">名称：{{it.name}}<br/>个数：{{it.num}}</div>
            <div class="name" @click="go"> {{ it.name.substring(0,4)+'...' }}</div>
        </el-tooltip>
        <div class="num">{{ it.num }}</div>
    </div>
</div> -->
  
      </section>
      <section id="content">
        <div class="c1">
          <p>最近发布的文章</p>
        </div>
        <div class="c2">
          <p>最近得到的回复</p>
        </div>
        <div class="c3">
          <p>官方最新日志</p>
        </div>
        <div class="c2">
          <p>最近得到的回复</p>
        </div>
      </section>
    </div>
    <!-- <router-view></router-view> -->
    <!-- <manage-footer /> -->
</template>

<script>

export default {
  name: "",
  components: {},
  data() {
    return {
      gettime: '',
    };
  },
  methods: {
    drawECharts(){
                // temp 是我们的自定义样式，上面安装Echarts时有介绍
      var myChart = this.$echarts.init(document.getElementById("myecharts"))
                var option = {}
                option = {
                  // 提示框（就是鼠标放上去后出现的框）
                  tooltip : {
                      trigger: 'axis',
                      axisPointer: {
                          type: 'cross',
                          label: {
                              backgroundColor: '#6a7985'
                          }
                      }
                  },

                  //  右上角的组件，用于说明，也可进行点击筛选
                  legend: {
                      align : 'right',
                      x : 'right',
                      top : 25,
                      selectedMode : 'single',    //  我这里设置的单选模式
                      data:['好','坏']            //  显示的第一项和第二项，这里的颜色是根据自定义主题的颜色顺序来定的
                  },

                  //  x、y轴显示一些设置，比如刻度颜色显示什么的，可在自定义主题设置一部分
                  xAxis: {
                      type: 'category',
                      boundaryGap: false,
                      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                  },
                  yAxis: {
                      type: 'value'
                  },
                  // 具体配置项，根据具体项目查看官网配置项说明
                  series: [
                      {
                          name : '好',
                          data: [150, 132, 201, 534, 290, 530, 820],
                          type: 'line',
                          smooth: true,   //  是否平滑曲线
                          areaStyle: {},
                      },
                      { 
                          name : '坏',
                          data: [82, 93, 90, 93, 129, 333, 432],
                          type: 'line',
                          smooth: true,
                          areaStyle: {},
                      }
                  ]
              }
              myChart.dispatchAction({
                  type: 'legendSelect',
                  name: '坏',
              })
              //  默认显示第7个数据
              myChart.dispatchAction({
                  type: 'showTip',
                  seriesIndex: 1,
                  dataIndex: 6,
              })
                // 执行渲染图形和数据的操作
                if (option && typeof option === "object") {
                    myChart.setOption(option, true)
                }
    },
    getTime:function(){
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth()+1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
      let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
      _this.gettime = yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
    },
    currentTime(){
      setInterval(this.getTime,500)
    },
  },
  created() {
    this.currentTime();    
  },
  mounted(){
    this.drawECharts()
  }
};
</script>

<style scoped>

 .myecharts{
        width : 500px;
        height : 300px;
    }
.el-main {
  background-color: #eee;
  color: #333;
  text-align: center;
  padding-right: 0;
}
.title {
  padding-left: 0;
}
/* .main {
  height: 100vh;
  overflow-x: hidden;
} */
ul {
  padding-left: 10px;
}
li {
  list-style: none;
  display: inline;
  padding-right: 10px;
}
</style>
