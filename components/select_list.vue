<template>
  <div>
    <select v-model="selectedItem">
      <option disabled value="">请选择列表项</option>
      <option value="item1">项 1</option>
      <option value="item2">项 2</option>
      <option value="item3">项 3</option>
    </select>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSelectListStore } from '@/stores/select_list'

const store = useSelectListStore()

const selectedItem = computed({
  get: () => store.selectedItem,
  set: (value) => (store.selectedItem = value),
})
</script>
