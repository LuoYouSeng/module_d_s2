<script setup>
import GameList from '@/components/games/GameList.vue';
import { ref } from 'vue';

const loading = ref(true)
const page = ref(0)
const size = ref(10)
const totalElements = ref(0)
const games = ref([])

const VITE_API_URL = import.meta.env.VITE_API_URL

async function fetchList() {
    const response = await fetch(VITE_API_URL + '/games')
    const data = await response.json()
    
    page.value = data.page
    size.value = data.size
    totalElements.value = data.totalElements
    games.value = data.content

    loading.value = false
}

fetchList()

</script>

<template>
    <div class="container">
        <div v-if="loading">Loading</div>
        <GameList :games="games"></GameList>
    </div>
</template>

<style scoped>
.container {
    width: 66%;
}
</style>
