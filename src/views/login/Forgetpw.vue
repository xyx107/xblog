<template>
  <div>
    <div class="box">
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
        <div class="box_fixed" id="boxFixed" :class="{'is_fixed' : isFixed}">
          我是来测试的、哇咔咔
        </div>
      <h3>快下来</h3>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
    </div>
    <form >
        <label for="">
            邮箱:
            <input type="email" name="email">
        </label>
        <button type="submit">提交</button>
    </form>
    <div class="box">
      <div class="carousel-messagebox">
        <transition-group tag="ul" enter-active-class="animated fadeInUp"  
          leave-active-class="animated fadeOutUp">  
          <li v-show="idx == isCurrent"   :class="['carousel-message']">
            <span class="good">{{item.name}}</span>
            <span>开通了</span>
            <span class="good">{{item.prizeName}}</span>
          </li>
        </transition-group> 
      </div>
    </div>
  </div>
</template>

<script>
import animate from '@/assets/css/animate.css';

import messageList from '@/utils/messagelist.js';

 export default {
    data(){
      return {
        itme: {
          name: 'aaa'
        },
        messageList: [],
        isCurrent:0,
        isFixed: false,
        offsetTop:0,
      }
    },
    
    methods:{
      initHeight () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.isFixed = scrollTop > this.offsetTop ? true : false;
      },
      autoPlay () {
        this.messageList = messageList;
        let length = this.messageList.length;
        if (this.isCurrent >= length) {
          this.isCurrent = 0;
          this.autoPlay();
        } else {
          setTimeout(()=>{
            this.isCurrent++;
            this.autoPlay();
          }, 3000)
        }
    }
    },
    mounted(){
      this.autoPlay();
      window.addEventListener('scroll',this.initHeight);
      this.$nextTick( () => {
        this.offsetTop = document.querySelector('#boxFixed').offsetTop;
      })
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
  }
</script>

<style>
.box{
  width: 300px;
  height: 200px;
  border: 1px dashed pink;
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel-messagebox {
  width:260px;
  height: 30px;
}
.carousel-message {
  width:220px;
  height: 30px;
  line-height:30px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  /* background: url('../assets/ic_notice.png') 16px center no-repeat rgba(0,0,0,0.6); */
  background-size:20px 16px;
  border-radius: 30px;
  padding-left:30px;
  position: absolute;
  color:#fff;
  display: -webkit-box;
  -webkit-box-pack: left;
  -webkit-box-align: center;
}
.good {
  color:#ffe795;
  width: 80px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  display: block;
  height: 30px;
  line-height:30px;
  margin-left: 8px;
}
  .box_fixed{
    width: 500px;
    height: 40px;
    border: 2px dashed pink;
    border-radius: 20px;
    margin: 0 auto;
    line-height: 40px;
    background: #eee;
  }
  .is_fixed{
    position: fixed;
    top: 0;
    left: 50%;
    margin-left: -250px;
    z-index: 999;
  }
</style>
