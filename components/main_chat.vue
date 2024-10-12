<!-- components/main_chat.vue -->
<template>
  <div class="main-chat" ref="mainChat">
    <chat
        v-for="(message, index) in messages"
        :key="index"
        :message="message"
    />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch, nextTick } from 'vue'
import { useMessagesStore } from '@/stores/messages'
import Chat from './chat.vue'

const messagesStore = useMessagesStore()
const messages = computed(() => messagesStore.messages)

const mainChat = ref(null)

const scrollToBottom = () => {
  if (mainChat.value) {
    mainChat.value.scrollTop = mainChat.value.scrollHeight
  }
}

// 在组件挂载后滚动到底部
onMounted(() => {
  nextTick(() => {
    scrollToBottom()
  })
})
// 监听 messages 的变化
watch(
    messages,
    async () => {
      await nextTick()
      scrollToBottom()
    },
    { deep: true }
)
</script>

<style scoped>
.main-chat {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}
</style>
