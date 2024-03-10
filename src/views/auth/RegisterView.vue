<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="container">
        <form action="">
            <input class="input" type="text" name="username" placeholder="Username">
            <input class="input" type="password" name="password" placeholder="Password">
            <div style="display: flex; align-items: center; justify-content: space-between;">
                <input class="button" type="submit" value="Sign Up">
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