<template>
    <div>
        <h2>Users View Page :</h2>
        <hr>
        <p class="lead">User : {{ id }}</p>
    </div>
</template>

<script>
    export default {
        props: ["id"]
    }
</script>
