<script setup>
import GameItem from './GameItem.vue';

const props = defineProps(['games'])
</script>

<template>
    <div v-for="game in games">
        <GameItem :game="game"></GameItem>
    </div>
</template>

<style scoped>
</style>