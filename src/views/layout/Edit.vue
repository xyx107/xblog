<template>
  <div class="simplemde-container" :style="{height:height+'px',zIndex:zIndex}">
    <textarea :id="id">
    </textarea>
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css'
import 'simplemde/dist/simplemde.min.css'
import SimpleMDE from 'simplemde'
export default {
  data () {
    return {
      simplemde: null,
      hasChange: false
    }
  },
  props: {
    value: String,
    id: {
      type: String
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 150
    },
    zIndex: {
      type: Number,
      default: 10
    },
    toolbar: {
      type: Array
    }
  },
  watch: {
    value(val) {
      if (val === this.simplemde.value() && !this.hasChange) return
      this.simplemde.value(val)
    }
  },
  mounted() {
    this.simplemde = new SimpleMDE({
      element: document.getElementById(this.id || 'markdown-editor-' + +new Date()),
      autoDownloadFontAwesome: false,
      autofocus: this.autofocus,
      toolbar: this.toolbar,
      spellChecker: false,
      insertTexts: {
        link: ['[', ']( )']
      },
      // hideIcons: ['guide', 'heading', 'quote', 'image', 'preview', 'side-by-side', 'fullscreen'],
      placeholder: this.placeholder
    })
    if (this.value) {
      this.simplemde.value(this.value)
    }
    this.simplemde.codemirror.on('change', () => {
      if (this.hasChange) {
        this.hasChange = true
      }
      this.$emit('input', this.simplemde.value())
    })
  },
  destroyed() {
    this.simplemde.toTextArea()
    this.simplemde = null
  }
}
</script>
<style lang="scss" scoped>
//css    根据自己的需求覆盖原样式
.simplemde-container>>>.CodeMirror {
  min-height: 350px;
  line-height: 20px;
}
.simplemde-container>>>.CodeMirror-scroll {
  min-height: 350px;
  max-height: 20px;
}
.simplemde-container>>>.CodeMirror-code {
  padding-bottom: 40px;
}
.simplemde-container>>>.editor-statusbar {
  display: none;
}
.simplemde-container>>>.CodeMirror .CodeMirror-code .cm-link {
  color: #1890ff;
}
.simplemde-container>>>.CodeMirror .CodeMirror-code .cm-string.cm-url {
  color: #2d3b4d;
}
.simplemde-container>>>.CodeMirror .CodeMirror-code .cm-formatting-link-string.cm-url {
  padding: 0 2px;
  color: #E61E1E;
}
.simplemde-container >>> .editor-toolbar.fullscreen,
.simplemde-container >>> .CodeMirror-fullscreen {
  z-index: 1003;
}
.simplemde-container >>> .fa-columns,
.simplemde-container >>> .fa-arrows-alt,
.simplemde-container >>> .fa-eye,
.simplemde-container >>> .fa-question-circle,
.simplemde-container >>> .separator,
.simplemde-container >>> .fa-quote-left{
  display:none;
}
</style>
