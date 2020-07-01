<template>
  <div id="messageBord">
      <!-- <blog-header/> -->
      <main>
        <h1>留言</h1>
        <section id="classifyTotal">
          想说点哈就说点哈~
        </section>
         <section id="listByTime">
             <p>已有 3 条评论</p>
          <ul>
            <li>bbsec3: 2019-08-09 01:11 回复</li>
            <li>3I6N: 这主题一进来就已经美到我了 2020-01-30 17:41 回复</li>
            <li>xyx107: 大佬 2020-02-22 19:59 回复</li>
          </ul>
        </section>
        <section>
            <el-form id="messageForm">
                <el-input placeholder="恁叫哈~"></el-input>
                <el-input placeholder="恁邮箱是哈~"></el-input>
                <el-input placeholder="恁滴网址~"></el-input>
                <el-input placeholder="恁想说哈~"></el-input>
                <img src="https://blog.ixuchao.cn/usr/themes/Plain-master/images/commentsbg.gif" alt="">
                <el-radio>俺不是机器银</el-radio>
                <el-button type="primary">提交</el-button>
            </el-form>
        </section>
      </main>
      <!-- <blog-footer/> -->
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {

    }
  }
}
</script>

<style scoped>
#messageBord{
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 0 ;
}
#listByTime ul{
  padding-left: 0;
  list-style: none;
}
#listByTime ul li{
    border-bottom: 1px solid #d8dadc;
    margin-top: 10px;
}
#messageForm{
    padding: 20px;

}
</style>
