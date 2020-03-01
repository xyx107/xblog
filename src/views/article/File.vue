<template>
  <div id="blogFile">
      <!-- <blog-header/> -->
      <main>
        <h1>归档</h1>
        <section id="classifyTotal">
          <ul>
            <li>文章总数：42篇</li>
            <li>分类总数: 5个</li>
            <li>评论总数：66条</li>
            <li>页面总数：4个</li>
          </ul>
        </section>
         <section id="listByTime">
          <ul>
            <li>2020-01-08:PYTHON ENHANCEMENT PROPOSALS</li>
            <li>2020-01-21:聊一聊多CPU，多核，多进程，多线程</li>
            <li>2020-02-24:PYTHON 沙箱逃逸总结一下</li>
            <li>2020-02-19:关于跨域问题</li>
          </ul>
        </section>
      </main>
      <!-- <blog-footer/> -->
  </div>
</template>

<script>
export default {
  name: 'File',
  components: {},
  data() {
    return {

    }
  }
}
</script>

<style scoped>
#blogFile{
  width: 71.8%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 0 auto;
  padding: 20px
}
#classifyTotal ul,#listByTime ul{
  display: flex;
  flex-direction: column;
}
#classifyTotal ul {
  padding-left: 20px; 
}
#listByTime ul{
  padding-left: 0;
}
</style>
