<template>
  <div id="about">
      <h1>关于</h1>
      <section id="classifyTotal">
        <p>很多技术，明天就会过时，如果你掌握的是学习方法，那你还有下一个机会，如果你掌握的仅仅是这个技术本身，你就没有机会了。</p>
        <p>学不动了>~< </p>
        <p>不我还能学>~< </p>    
        
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
  methods: {
  }
}
</script>

<style scoped>
#about{
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 0 auto;
  padding: 0;
}
h1{
  color: #333;
}
#classifyTotal{
    display: flex;
    flex-direction: column;
    height: 450px;
}
</style>
