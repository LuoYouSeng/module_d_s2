<script setup>
const props = defineProps(['game'])
</script>

<template>
    <div class="container">
        <div>#scores submitted: {{ game.scoreCount }}</div>
        <div>
            <span>{{ game.title }}</span>
            <span>by {{ game.author }}</span>
        </div>
        <div class="display">
            <img src="https://sdfsdf.dev/300x200.jpg" alt="">
            <p>{{ game.description }}</p>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #42b883;
}

.display {
    display: flex;
}
</style>