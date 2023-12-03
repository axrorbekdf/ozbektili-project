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
<style>
textarea:focus, 
textarea.form-control:focus, 
input.form-control:focus, 
select.form-select:focus, 
input[type=text]:focus, 
input[type=password]:focus, 
input[type=email]:focus, 
input[type=number]:focus, 
[type=text].form-control:focus, 
[type=password].form-control:focus, 
[type=email].form-control:focus, 
[type=tel].form-control:focus, 
[contenteditable].form-control:focus {
  box-shadow: none;
}

</style>
