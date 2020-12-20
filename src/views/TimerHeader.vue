<template>
  <div id='header'>
      {{date | formatDateTime}}
  </div>
</template>

<script type='text/javascript'>
export default {
  name: 'base-header',
  data () {
    return {
      date: new Date()
    }
  },
  filters: {
    formatDateTime (value) {
      const date = new Date(value)
      const y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? '0' + MM : MM
      let d = date.getDate()
      d = d < 10 ? '0' + d : d
      let h = date.getHours()
      h = h < 10 ? '0' + h : h
      let m = date.getMinutes()
      m = m < 10 ? '0' + m : m
      let s = date.getSeconds()
      s = s < 10 ? '0' + s : s
      return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s
    }
  },
  mounted () {
    const _this = this
    this.timer = setInterval(() => {
      _this.date = new Date()
      this.date = new Date()
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
}
</script>

<style >
#header{
  height: 100px;
  line-height: 100px;
}
</style>
