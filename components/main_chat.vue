<script setup>
import { computed, ref, onMounted } from 'vue'
import { useMessagesStore } from '@/stores/messages'
import Chat from './chat.vue'

const isClient = ref(false)
onMounted(() => {
  isClient.value = true
})

const messagesStore = useMessagesStore()
const messages = computed(() => messagesStore.messages)
</script>

<template>
  <div class="main-chat">
    <template v-if="isClient">
      <chat
          v-for="(message, index) in messages"
          :key="index"
          :message="message"
      />
    </template>
  </div>
</template>
<style scoped>
.chat-message {
  margin-bottom: 10px;

}
.chat-message.user {
  text-align: right;
}
.chat-message.assistant {
  text-align: left;
}



</style>
