<template>
  <div >
    <!-- <nav>
      <router-link to="/findBlogUsers">Home</router-link> |
      <! <router-link to="/about">About</router-link> -->
    <!-- </nav>
    <router-view/> -->
    <router-link to="/findBlogUsers"></router-link>

    <!-- Render the current route's component -->
    <router-view></router-view>

  </div>
</template>
<script>
export default {
  name: 'App',
};
</script>

<style>
</style>
