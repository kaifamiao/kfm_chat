// stores/select_list.js
import { defineStore } from 'pinia'

export const useSelectListStore = defineStore('selectList', {
    state: () => ({
        selectedItem: 'item3',
    }),
    persist: true,
})
