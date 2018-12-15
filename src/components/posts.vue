<template>
    <div>
        <h1>Posts {{ id }}</h1>
        <hr>
        Query Parameters :
        <hr>
        Query : {{ $route.query.q }}
        <br>
        Name : {{ $route.query.name }}
    </div>
</template>

<script>
    export default {
       props: ["id"]
    }
</script>
