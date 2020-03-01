<template>
  <div id="notebook">
      <section>
          <textarea v-model="content"></textarea>
      </section>
      <aside class="preview" v-html="notePreview">
          <!-- {{notePreview}} -->
      </aside>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'Markdown',
  components: {},
  data() {
    return {
        content: 'This is note.',
        html:''
    }
  },
  computed: {
      notePreview () {
          return marked(this.content)
      }
  }
}
</script>

<style>
</style>
