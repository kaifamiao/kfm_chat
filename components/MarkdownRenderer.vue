<template>
  <Markdown :content="content" :markdown-it-options="markdownOptions" />
</template>

<script setup>
import { defineProps, inject } from 'vue'

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
})

const hljs = inject('hljs')

const markdownOptions = {
  html: false,
  highlight: (str, lang) => {
    if (lang && hljs && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${hljs.highlight(str, { language: lang }).value}</code></pre>`
      } catch (__) {}
    }
    return `<pre class="hljs"><code>${str}</code></pre>`
  },
}
</script>
