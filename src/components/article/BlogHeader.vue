<template>
  <div>
    <header id="header">
      <h1 id="user">Archerx's Blog</h1>
      <p class="description">我于今早重生，来时心怀暖阳。</p>
      <nav id="navbar">
        <article>
          <ul class="list">
            <section><router-link to="article">首页</router-link></section>
            <section><router-link to="messageboard">留言</router-link></section>
            <section><router-link to="file">归档</router-link></section>
            <section><router-link to="about">关于</router-link></section>
            <section><router-link to="">友链</router-link></section>
          </ul>
        </article>
        <div class="icon">
          <a href="https://github.com/xuchaoa"><img src="https://blog.ixuchao.cn/usr/themes/Plain-master/images/github.png" alt="github图标"></a>
        </div>
      </nav>
    </header>
  </div>
  
</template>

<script>
export default {
  name: 'BlogHeader',
  components: {},
  data() {
    return {

    }
  }
}
</script>

<style scoped>
#header{
  margin: 25px 10px 10px 10px ;
  border-bottom: 1px solid #d8dadc;
}

.description{
  margin: 5px;
  color: #666;
}
#user{
  margin: 0;
}
#navbar{
  display: flex;
  justify-content: space-between;
  margin: 5px 3px 0 0;
  padding: 0;
}
.list{
  margin: 5px 5px 0 5px;
  padding: 0;
  display: flex; 
}
section{
  margin-right: 15px;
}
.icon{
  line-height: 11px;
  padding: 2px;
  margin-top: 5px;
}
li{
  display: inline-block;
  list-style: none;
}
</style>

