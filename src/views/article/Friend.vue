<template>
  <div id="friend">
    <h1>友链</h1>
    <section id="list">
      <ul>
        <li>
          <a href="https://blog.ixuchao.cn/">
            <img src="https://driverxdw.github.io/images/author.jpg" alt="friend" title="friend" />
            <i class="el-icon-d-arrow-right"></i>
            Archerx's Blog
          </a>
        </li>
        <li>
          <a href="https://binarysec.top/">
            <img src="https://driverxdw.github.io/images/author.jpg" alt="friend" title="friend" />
            <i class="el-icon-d-arrow-right"></i>
            Kaka's Blog
          </a>
        </li>
        <li>
          <a href="https://lushan.me/">
            <img
              src="../../assets/imgs/github.png"
              alt="friend"
              title="friend"
            />
            <i class="el-icon-d-arrow-right"></i>
            lushan: 安卓逆向大佬.
          </a>
        </li>
        <li>
          <a href="https://me.csdn.net/qq_41079177">
            <img
              src="../../assets/imgs/github.png"
              alt="friend"
              title="friend"
            />
            <i class="el-icon-d-arrow-right"></i>
            神林丶.
          </a>
        </li>
        <li>
          <a href="https://me.csdn.net/qq_42196196">
            <img src="https://driverxdw.github.io/images/author.jpg" alt="friend" title="friend" />
            <i class="el-icon-d-arrow-right"></i>
            诸神之眼
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>

export default {
  name: '',
  components: {},
  data() {
    return {
      
    }
  },
//   methods: {
//      drawMap(){
//        var myChart = echarts.init(document.getElementById("baidumap"))
//         var option = {}
//         window.dataList = [
        
//     ];
//     option = {
//         tooltip: {
//             //点击显示tip
//             // triggerOn: "click",
//             // formatter: function(e, t, n) {
//             //     return .5 == e.value ? e.name + "：" : e.seriesName + "<br />" + e.name + "：" + e.value
//             // }
//         },
//         visualMap: {
//             min: 0,
//             max: 1000,
//             left: 2,
//             top: 20,
//             showLabel: !0,
//             // text: ["高", "低"],
//             pieces: [{
//                 gte: 10,
//                 lte: 100,
//                 label: "10 - 100 人",
//                 color: "#ff5428"
//             }, {
//                 gte: 1,
//                 lt: 10,
//                 label: "1 - 9 人",
//                 color: "#ff8c71"
//             }, {
//                 value: 0,
//                 color: "#ffffff"
//             }],
//             show: !0
//         },
//         // geo: {
//         //     map: "china",
//         //     roam: !1,
//         //     scaleLimit: {
//         //         min: 1,
//         //         max: 2
//         //     },
//         //     zoom: 1,
//         //     top: 20,
//         //     label: {
//         //         normal: {
//         //             show: !0,
//         //             fontSize: "14",
//         //             color: "rgba(0,0,0,0.5)"
//         //         }
//         //     },
//         //     itemStyle: {
//         //         normal: {
//         //             // shadowBlur: 50,
//         //             // shadowColor: 'rgba(0, 0, 0, 0.2)',
//         //             areaColor: "rgba(20, 41, 87, 0.5)",//地图省份颜色
//         //             borderColor: "rgba(0, 0, 0, 0.1)"
//         //         },
//         //         emphasis: {
//         //             areaColor: "yellow",
//         //             shadowOffsetX: 0,
//         //             shadowOffsetY: 0,
//         //             borderWidth: 0
//         //         }
//         //     }
//         // },
//         series: [{
//             name: "地区分布",
//             type: "map",
//             mapType: 'china',
//             itemStyle: {
//                 normal:{
//                     borderColor: 'rgba(0, 0, 0, 0.2)'
//                 },
//                 emphasis:{
//                     shadowOffsetX: 0,
//                     shadowOffsetY: 0,
//                     shadowBlur: 20,
//                     borderWidth: 0,
//                     shadowColor: 'rgba(0, 0, 0, 0.5)'
//                 }
//             },
//             showLegendSymbol: true,
//             label: {
//                 normal: {
//                     show: true
//                 },
//                 emphasis: {
//                     show: true
//                 }
//             // geoIndex: 0,
//             // data: window.dataList
//             },
//             data: [
//                 {
//                     name: "南海诸岛",
//                     value: 0
//                 },
//                 {
//                     name: '北京',
//                     value: 5
//                 },
//                 {
//                     name: '天津',
//                     value: 1
//                 },
//                 {
//                     name: '上海',
//                     value: 4
//                 },
//                 {
//                     name: '重庆',
//                     value: 0
//                 },
//                 {
//                     name: '河北',
//                     value: 0
//                 },
//                 {
//                     name: '河南',
//                     value: 0
//                 },
//                 {
//                     name: '云南',
//                     value: 0
//                 },
//                 {
//                     name: '辽宁',
//                     value: 1
//                 },
//                 {
//                     name: '黑龙江',
//                     value: 0
//                 },
//                 {
//                     name: '湖南',
//                     value: 0
//                 },
//                 {
//                     name: '安徽',
//                     value: 0
//                 },
//                 {
//                     name: '山东',
//                     value: 39
//                 },
//                 {
//                     name: '新疆',
//                     value: 0
//                 },
//                 {
//                     name: '江苏',
//                     value: 0
//                 },
//                 {
//                     name: '浙江',
//                     value: 2
//                 },
//                 {
//                     name: '江西',
//                     value: 0
//                 },
//                 {
//                     name: '湖北',
//                     value: 0
//                 },
//                 {
//                     name: '广西',
//                     value: 0
//                 },
//                 {
//                     name: '甘肃',
//                     value: 0
//                 },
//                 {
//                     name: '山西',
//                     value: 0
//                 },
//                 {
//                     name: '内蒙古',
//                     value: 0
//                 },
//                 {
//                     name: '陕西',
//                     value: 0
//                 },
//                 {
//                     name: '吉林',
//                     value: 0
//                 },
//                 {
//                     name: '福建',
//                     value: 0
//                 },
//                 {
//                     name: '贵州',
//                     value: 0
//                 },
//                 {
//                     name: '广东',
//                     value: 1
//                 },
//                 {
//                     name: '青海',
//                     value: 0
//                 },
//                 {
//                     name: '西藏',
//                     value: 0
//                 },
//                 {
//                     name: '四川',
//                     value: 0
//                 },
//                 {
//                     name: '宁夏',
//                     value: 0
//                 },
//                 {
//                     name: '海南',
//                     value: 0
//                 },
//                 {
//                     name: '台湾',
//                     value: 0
//                 },
//                 {
//                     name: '香港',
//                     value: 0
//                 },
//                 {
//                     name: '澳门',
//                     value: 0
//                 }
//             ]
//         }]
//     }
//      myChart.setOption(option, true);
//   }
// },

//   mounted() {
//      this.drawMap()
//   }
}
</script>

<style lang="scss" scoped>
h1{
  color: #333;
}
#friend {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 0;
  padding: 0;
}
#list ul {
  padding-left: 0;
}
li {
  list-style: none;
  margin-top: 5px;
  a {
    color: #333;
  }
  a:hover {
    text-decoration: underline;
  }
}
img[alt='friend'] {
  height: 40px;
  width: 40px;
  border-radius: 40px;
  margin: 0 10px 0 0;
  vertical-align: middle;
}

</style>
