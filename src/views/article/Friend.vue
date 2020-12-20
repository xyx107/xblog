<template>
  <div id="friend">
  <el-scrollbar style=" height: 100%; ">
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
    </el-scrollbar>
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

<style lang="scss" scoped>
h1{
  color: #333;
}
#friend {
  // width: 100%;
  // height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  /* align-items: center; */
  // margin: 10% 0 0 0;
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

#friend /deep/ .el-scrollbar__wrap {
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
