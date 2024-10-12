<!-- components/chat.vue -->
<template>

     <div>
       <div :class="['chat-message', message.role]">
         <usermessage v-if="message.role === 'user'" :content="message.content" />
         <assistant v-else :content="message.content" />
       </div>

     </div>

</template>

<script setup>
import UserInput from './usermessage.vue'
import Assistant from './assistant.vue'
import Usermessage from "~/components/usermessage.vue";

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

</style>
