import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const isAuth = ref(false)

  function toggle() {
    isAuth.value = !isAuth.value
  }

  return { isAuth, toggle }
})
