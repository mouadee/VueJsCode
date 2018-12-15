<template>
    <div>
        <h1>posts</h1>
        <ul class="list-unstyled">
            <li><router-link to="/posts/1?q=1&name=ahmed">Post 1</router-link></li>
            <li><router-link :to="{name: 'single-post', params: {id: 2}, query: {q: 2, name: 'John'}}">Post 2</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "postsPage"
    }
</script>

