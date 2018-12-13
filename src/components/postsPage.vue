<template>
    <div>
        <h1>posts</h1>
        <ul class="list-unstyled">
            <li><router-link to="/posts/1">Post 1</router-link></li>
            <li><router-link to="/posts/2">Post 2</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "postsPage"
    }
</script>

