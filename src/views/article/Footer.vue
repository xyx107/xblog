<template>
  <div >
      <footer id="footer">
      <p>(●'◡'●) 被续 920 天 14 小时 31 分 46 秒</p>
      <p>Royal Never GIve Up：纵使疾风起，皇族不言弃</p>
      <p>© 2020 Archerx's Blog - Using Typecho & Theme by Godme</p>
      <p>除非特别注明，本站内容采用 知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议进行许可。</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
  data() {
    return {

    }
  }
}
</script>

<style scoped>
#footer{
  display: flex;
  flex-direction: column;
  align-items: center;
}
#footer p{
  font-size: 5px;
  margin: 5px;
}
</style>
