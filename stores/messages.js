// stores/messages.js
import { defineStore } from 'pinia'

export const useMessagesStore = defineStore('messages', {
    state: () => ({
        messages: process.client ? JSON.parse(localStorage.getItem('messages')) || [] : [],
    }),
    persist: true,
})
