<template>
  <div id="app">
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link to="/" class="nav-link" exact active-class="active">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link" active-class="active">About</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>


    export default {
        components: {

        }
    }

</script>

<style>

</style>
