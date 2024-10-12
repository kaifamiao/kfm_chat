// plugins/vue3-markdown-it.client.js
import { defineNuxtPlugin } from '#app'
import { Markdown } from 'vue3-markdown-it'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import python from 'highlight.js/lib/languages/python'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('python', python)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('Markdown', Markdown)
    nuxtApp.provide('hljs', hljs)
})
