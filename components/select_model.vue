<template>
  <div>
    <select v-model="selectedModel">
      <option disabled value="">请选择模型</option>
      <option value="qwen2">qwen2</option>
      <option value="gpt-3.5">GPT-3.5</option>
      <option value="gpt-4">GPT-4</option>
    </select>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import {useSelectModelStore} from '@/stores/select_model'

const store = useSelectModelStore()

const selectedModel = computed({
  get: () => store.selectedModel,
  set: (value) => (store.selectedModel = value),
})
</script>
