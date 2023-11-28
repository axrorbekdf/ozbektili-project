<template>
  <div class="fluid-container">
    <!-- <nav class="navbar  ">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->

    <RouterView />
  </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import {getItem} from '@/helpers/persistaneStorage'
export default {
  mounted(){
      const user ={
        token: getItem('token')
      };
      this.$store.dispatch('getUser', user)
  }
}
</script>
<style scoped>

</style>
