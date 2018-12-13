<template>
    <div>
        <h1>Users</h1>
        <hr>
        <ul class="list-unstyled">
            <li><router-link to="/users/1">User 1</router-link></li>
            <li><router-link to="/users/2">user 2</router-link></li>

            <router-view></router-view>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "usersPage"
    }
</script>
