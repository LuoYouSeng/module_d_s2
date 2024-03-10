<script setup>
import { ref } from 'vue';

const loading = ref(true)
const page = ref(0)
const size = ref(10)
const totalElements = ref(0)
const games = ref([])

const sortBy = ref('title')
const orderBy = ref('ASC')

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
    <div v-if="loading">Loading</div>
    <div style="display: flex; flex-direction: column; align-items: center;" v-else>
        <div style="margin: 2rem 0; display: flex; align-items: center; gap: 1rem">
            <span style="font-size: 2rem;">{{ totalElements }} Games available</span>
            <div>
                <label class="label" :style="{ 'background-color': sortBy == 'title' ? '#ddd' : '#eee' }" for="title">
                    Title
                    <input id="title" style="display: none;" type="radio" value="title" v-model="sortBy">
                </label>
                <label class="label" :style="{ 'background-color': sortBy == 'popular' ? '#ddd' : '#eee' }" for="popular">
                    Popular
                    <input id="popular" style="display: none;" type="radio" value="popular" v-model="sortBy">
                </label>
                <label class="label" :style="{ 'background-color': sortBy == 'uploaddate' ? '#ddd' : '#eee' }" for="uploaddate">
                    Upload Date
                    <input id="uploaddate" style="display: none;" type="radio" value="uploaddate" v-model="sortBy">
                </label>
            </div>
            <div>
                <label class="label" :style="{ 'background-color': orderBy == 'ASC' ? '#ddd' : '#eee' }" for="ASC">
                    ASC
                    <input id="ASC" style="display: none;" type="radio" value="ASC" v-model="orderBy">
                </label>
                <label class="label" :style="{ 'background-color': orderBy == 'DESC' ? '#ddd' : '#eee' }" for="DESC">
                    DESC
                    <input id="DESC" style="display: none;" type="radio" value="DESC" v-model="orderBy">
                </label>
            </div>
        </div>
        <div class="container">
            <div class="game-container" v-for="game in games">
                <div style="display: flex; justify-content: space-between;">
                    <div><span style="font-size: 2rem;">{{ game.title }}</span>&nbsp;<span>by {{ game.author }}</span></div>
                    <div># scores submitted: {{ game.scoreCount }}</div>
                </div>
                <div style="display: flex; gap: 1rem;">
                    <div>
                        <!-- <img :src="game.thumbnail" alt=""> -->
                        <img src="https://placekitten.com/300/200" alt="">
                    </div>
                    <div>
                        <p>{{ game.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.label {
    padding: 1rem 2rem;
}
.container {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
.game-container {
    width: 100%;
    padding: 1rem 2rem;
    border: #42b883 solid 1px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
