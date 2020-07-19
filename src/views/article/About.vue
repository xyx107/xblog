<template>
  <div id="about">
      <h1>关于</h1>
      <section id="classifyTotal">
         <p>很多技术，明天就会过时，如果你掌握的是学习方法，那你还有下一个机会，如果你掌握的仅仅是这个技术本身，你就没有机会了。</p>
      </section>
      <section id="listByTime">
         
      </section>
      <baidu-map
            :center="center"
            :scroll-wheel-zoom="true"  
            :zoom="zoom" 
            id="mymap"
            class="baidumap">          
            <!-- <template v-for="(it,index) in ms">     -->
                <!-- <bm-marker 
                    :key="it.id"
                    :position="it.position"        
                    @click="markclick(it,index)"    
                    @mouseover="markover(it,index)" 
                    :icon="it.if? iocn:newincon"    
                    @mouseout="markout(it,index)"> 
                    <bm-info-window
                        :show="it.show"            
                        :position="it.position">    
                        <p v-text="it.mess"></p>  
                    </bm-info-window>
                </bm-marker> -->
            <!-- </template> -->
        </baidu-map>
  </div>
</template>

<script>
import 'echarts/map/js/china.js'
import 'echarts/map/js/province/beijing.js'
// import 'echarts/map/js/province'

export default {
  name: '',
  components: {},
  data() {
    return {
       center: { //经纬度
        lng: 1, 
        lat: 11
      },
      zoom: 3,　 //地图展示级别
      location: '北京',
    }
  },
  methods: {
     drawMap(){
      const rjs = require.context('echarts/map/js/province')
       rjs.keys().forEach(rjs)
       var myChart = this.$echarts.init(document.getElementById("mymap"))
                var option = {}
                option = {
                  tooltip : {
                  trigger: 'item',
                  formatter : function(params){
                      var val = params.data
                      return '名称：'+val.name+'，个数：'+val.value[2]+'<br/>'+'总数：'+val.tol+'，个数：'+val.un
                  },
              },

              //  不同颜色的点
              visualMap: [
                  {
                      min: 0,
                      max: 1,
                      show : false,
                      inRange: {
                          color: ['#01cae2', '#e63136',]
                      },
                      dimension : 3,
                  },
              ],

              // 地图样式
              geo: {
                  map: 'china',   // 地图样式，当为‘北京’时，会显示北京地图
                  roam : true,    
                  label: {
                      emphasis: {
                          show: true
                      }
                  },
                  zoom : 1.2,     //  初始大小
                  scaleLimit : {
                      min : 1.2,  //  最小缩放
                      max : 6     //  最大缩放
                  },
                  regions : regions(data)     // 省份样式方法
              },

              series : [
                  {
                      name: '分布',
                      type: 'scatter',
                      coordinateSystem: 'geo',    //  地图配置
                      data: convertData(data.sort(function (a, b) {   //  数据方法
                          return b.value - a.value;
                      })),
                      encode: {
                          value : 2
                      },
                      hoverAnimation: true,
                      itemStyle: {
                          normal: {
                              // color: '#FF3030',
                              shadowBlur: 1,
                          }
                      },
                  }
              ]
            }
            myChart.on('click',function(params){
                option.geo.map =  '北京'
                myChart.setOption(option, true);
            })
     },
  }
}
</script>

<style>
/* .baidumap{
  width: 600px;
  height: 500px;
} */
#about{
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 0 auto;
  padding: 20px
}
h1{
  margin: 0;
}
</style>
