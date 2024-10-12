<!-- components/usermessage.vue -->
<template>


  <div class="user-message">
    <p>{{ content }}</p>
  </div>
  <svg t="1728757039446" class="icon" viewBox="0 0 1039 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="32793" width="20" height="20">
    <path d="M688.041535 633.879297H348.630761A349.20701 349.20701 0 0 0 0 979.628812v26.507463a15.558728 15.558728 0 0 0 15.558728 15.558728h1004.978591a16.134977 16.134977 0 0 0 16.134977-15.558728V979.628812a349.783259 349.783259 0 0 0-345.749515-348.630761z" fill="#3873FF" p-id="32794"></path>
    <path d="M235.685919 281.214792A281.209606 281.209606 0 1 0 518.624273 0.005186a281.209606 281.209606 0 0 0-282.938354 281.209606z" fill="#3873FF" p-id="32795"></path>
  </svg>
</template>

<script setup>
const props = defineProps({
  content: {
    type: String,
    required: true,
  },
})

</script>

<style scoped>
.user-message {
  background-color: #0057ff;
  color: #f1f0f0;
  display: inline-block;
  padding: 10px;
  border-radius: 10px;





}
</style>
