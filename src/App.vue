<template>
  <div class="fluid-container">
    <RouterView />
  </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  created(){
      this.$store.dispatch('getUser')
      this.$store.dispatch('getCountriesStat');
      this.$store.dispatch('getModules');
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
