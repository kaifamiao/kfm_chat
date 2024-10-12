<!-- components/main_header.vue -->
<template>
  <div class="main-header">
    <select-model />
    <select-rag />
  </div>
</template>

<script setup>
import SelectModel from './select_model.vue'
import SelectRag from './select_rag.vue'
</script>

<style scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
</style>
