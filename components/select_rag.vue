<template>
  <div>
    <select v-model="selectedRag">
      <option disabled value="">请选择 RAG</option>
      <option value="rag-1">RAG-1</option>
      <option value="rag-2">RAG-2</option>
    </select>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSelectRagStore } from '@/stores/select_rag'

const store = useSelectRagStore()

const selectedRag = computed({
  get: () => store.selectedRag,
  set: (value) => (store.selectedRag = value),
})
</script>
