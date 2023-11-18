<template>
    <div class="fluid-container">
      <nav class="navbar  ">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

      <RouterView />
    </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'

</script>
<style scoped>

</style>
