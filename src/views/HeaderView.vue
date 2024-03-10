<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="nav">
        <div class="logo">
            <span>WorldSkills: Games</span>
        </div>
        <ul class="list">
            <li>
                <RouterLink class="link" to="">Sign Up</RouterLink>
            </li>
            <li>
                <RouterLink class="link" to="">Sign In</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.nav {
    width: 100vw;
    padding: 40px 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 2px solid #42b883;
}

.logo {
    border: 1px solid #eee;
    padding: 10px 20px;
    font-size: 32px;
}

.list {
    display: flex;
    gap: 10px;
    list-style: none;
}

.link {
    text-decoration: none;
    color: #42b883;
}

</style>