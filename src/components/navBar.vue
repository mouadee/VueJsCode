<template>
    <ul class="nav nav-pills">
        <li class="nav-item">
            <router-link to="/" class="nav-link" exact active-class="active">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/posts" class="nav-link" active-class="active">Posts</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/users" class="nav-link" active-class="active">Users</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "navBar"
    }
</script>

