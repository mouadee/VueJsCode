<template>
  <div id="app">
    <navBar />
    <router-view></router-view>
  </div>
</template>

<script>
  import navBar from './components/navBar'
    export default {
        components: {
          navBar
        }
    }

</script>

<style>

</style>
