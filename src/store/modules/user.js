import { defineStore } from 'pinia'
import store from '../index.js'

export const userStore = defineStore('counter', {
  state() {
    return {
      name: 'lucy',
      age: 18
    }
  },
})

export function useUserStore() {
  return userStore(store)
}