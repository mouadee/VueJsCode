<template>
    <div>
        <h1>About Us Page</h1>
        <button @click="goToHome()" class="btn btn-success">GO to home after 1 sec</button>
    </div>
</template>

<script>
    export default {
        methods: {
            goToHome: function () {
                const self = this;
                setTimeout(function () {
                    self.$router.push('/');
                }, 1000);
            }
        }
    }
</script>
