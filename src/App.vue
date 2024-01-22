<template>
  <div class="fluid-container">
    <div v-if="isLoading" class="waitLoading fluid-container"></div>
    <RouterView />
  </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapState } from 'vuex';
export default {
  created(){
      this.$store.dispatch('getUser')
      this.$store.dispatch('getCountriesStat');
      this.$store.dispatch('getModules');
  },
  computed:{
      ...mapState({
            isLoading: (state) => state.module.isLoading,
      })
  },
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

.waitLoading {
  /* The image used */
  background-image: url("@/assets/wait-loading.png"), url('@/assets/background.png');
  /* ,  */
  /* Full height */
  height:100vh;

  /* Center and scale the image nicely */
  background-position: center, center;
  background-repeat: no-repeat, no-repeat;
  background-size: auto, cover;
}

</style>
