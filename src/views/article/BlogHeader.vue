<template>
  <div>
    <header id="header">
      <h1 id="user">XingYu's Blog</h1>
      <p class="description">我于今早重生，来时心怀暖阳。</p>
      <nav id="navbar">
        <article>
          <ul class="list" :router="true">
            <section><router-link to="article">首页</router-link></section>
            <section><router-link to="messageboard">留言</router-link></section>
            <section><router-link to="file">归档</router-link></section>
            <section><router-link to="about">关于</router-link></section>
            <section><router-link to="friend">友链</router-link></section>
          </ul>
        </article>
        <div class="icon">
          <div class="admin-btn">
              <router-link to="/admin"><i class="el-icon-set-up" ></i></router-link>
          </div>
          <a href="https://github.com/xyx107"><img src="../../assets/imgs/github.png" alt="github图标"></a>
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
      msg: ''
    }
  }
}
</script>

<style scoped>
#header{
  margin: 45px 0 20px;
  border-bottom: 1px solid #d8dadc;
}
.description{
  margin: 5px;
  color: #666;
}
#user{
  margin: 0;
  font-family: 'zashu';
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
.admin-btn{
  font-size: 25px;
  display: inline;
  margin: 3px 3px;
}
li{
  display: inline-block;
  list-style: none;
}
a{
  color: #333;
}
a:visited{
  color: #333;
}
a:hover{
  text-decoration: underline;
}
</style>

