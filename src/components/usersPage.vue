<template>
    <div>
        <h1>Users</h1>
        <ul class="list-unstyled">
            <li><router-link to="/users/1">User 1</router-link></li>
            <li><router-link to="/users/2">user 2</router-link></li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "usersPage"
    }
</script>
