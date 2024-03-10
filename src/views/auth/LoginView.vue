<script setup>
import { useCounterStore } from '@/stores/counter';
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
const VITE_API_URL = import.meta.env.VITE_API_URL

const username = ref('')
const password = ref('')

function submit() {
    fetch(VITE_API_URL + '/auth/signin', {
        method: 'post',
        body: JSON.stringify({username: username.value, password: password.value})
    }).then(res => {
        console.log(res.json())
    })
}

</script>

<template>
    <div class="container">
        <form @submit.prevent="submit" method="post">
            <input class="input" type="text" v-model="username" name="username" placeholder="Username">
            <input class="input" type="password" v-model="password" name="password" placeholder="Password">
            <div style="display: flex; align-items: center; justify-content: space-between;">
                <input class="button" type="submit" value="Sign In">
                <RouterLink style="text-decoration: none; color: #1d4ed8; font-size: 1.2rem;" to="/">Cancel</RouterLink>
            </div>
        </form>
    </div>
</template>

<style scoped>
    .container {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    form {
        margin-top: 10rem;
        width: 20%;
        border: 1px solid #ccc;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    .input {
        font-size: 1.3rem;
        padding: 10px;
        outline: none;
        border-radius: 5px;
    }
    .button {
        font-size: 1.3rem;
        color: white;
        padding: 0.6rem 1.2rem;
        border: 0;
        border-radius: 5px;
        background-color: #1d4ed8;
    }
</style>