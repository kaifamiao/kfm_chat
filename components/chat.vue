<!-- components/chat.vue -->
<template>

      <div :class="['chat-message', message.role]">
        <userinput v-if="message.role === 'user'" :content="message.content" />
        <assistant v-else :content="message.content" />
      </div>


</template>

<script setup>
import UserInput from './userinput.vue'
import Assistant from './assistant.vue'

const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
})
</script>
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
.scroll-container {
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
}

.scroll-content {
  display: flex;
  flex-direction: column;
}

</style>
