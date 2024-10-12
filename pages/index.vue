<!-- pages/index.vue -->
<template>
  <div class="container">
    <main-header />
    <main-chat />
    <main-input />
  </div>
</template>

<script setup>
import MainHeader from '@/components/main_header.vue'
import MainChat from '@/components/main_chat.vue'
import MainInput from '@/components/main_input.vue'
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 使容器高度占满视口高度 */
  overflow: hidden; /* 隐藏超出容器的内容 */
}
</style>
