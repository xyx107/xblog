<template>
  <nav>
      <ul>
          <li>
              <router-link to="/">博客</router-link>
          </li>
           <li>
              <router-link to="/add">编辑文章</router-link>
          </li>
      </ul>
  </nav>
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

<style>
</style>

