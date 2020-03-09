<template>
    <div class="main" v-if="this.$route.path == '/admin' || this.$route.path == '/main'">
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
        <div class="c2">
          <p>最近得到的回复</p>
        </div>
        <div class="c2">
          <p>最近得到的回复</p>
        </div>
        <div class="c2">
          <p>最近得到的回复</p>
        </div>
        <div class="c2">
          <p>最近得到的回复</p>
        </div>
        <div class="c2">
          <p>最近得到的回复</p>
        </div>
        <div class="c2">
          <p>最近得到的回复</p>
        </div>
        <div class="c2">
          <p>最近得到的回复</p>
        </div>
        <div class="c2">
          <p>最近得到的回复</p>
        </div>
        <div class="c2">
          <p>最近得到的回复</p>
        </div>
        <div class="c2">
          <p>最近得到的回复</p>
        </div>
        <div class="c2">
          <p>最近得到的回复</p>
        </div>
        <div class="c2">
          <p>最近得到的回复</p>
        </div>
        <div class="c2">
          <p>最近得到的回复</p>
        </div>
        <div class="c2">
          <p>最近得到的回复</p>
        </div>
        <div class="c2">
          <p>最近得到的回复</p>
        </div>
        <div class="c2">
          <p>最近得到的回复</p>
        </div>
        <div class="c5">
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
    return {};
  }
};
</script>

<style scoped>
.el-main {
  background-color: #e9eef3;
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
