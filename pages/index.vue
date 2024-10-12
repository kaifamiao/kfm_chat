<!-- pages/index.vue -->
<template>
  <div class="container" ref="containerRef">
    <main-header />
    <main-chat />
    <main-input />
  </div>
</template>

<script setup>
import MainHeader from '@/components/main_header.vue'
import MainChat from '@/components/main_chat.vue'
import MainInput from '@/components/main_input.vue'

import { ref, onMounted, onUpdated, nextTick } from 'vue'

const containerRef = ref(null)

const scrollToBottom = () => {
  nextTick(() => {
    if (containerRef.value) {
      containerRef.value.scrollTop = containerRef.value.scrollHeight
    }
  })
}

onMounted(scrollToBottom)
onUpdated(scrollToBottom)

// 如果您在 MainChat 组件中添加新消息，您可能需要在那里触发一个事件
// 然后在这里监听该事件并调用 scrollToBottom
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;

}


</style>
