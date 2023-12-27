<template>
    <component :is="currentModule"></component>
</template>

<script>
  import Module1 from './1-module/IndexView.vue';
  import Module2 from './2-module/IndexView.vue';
  import Module3 from './3-module/IndexView.vue';
  export default{
    components: { 
      Module1,
      Module2,
      Module3
    },
    data() {
      return {
        currentModule: 'Module1',
      }
    },
    created(){
      const module_id = this.$route.params.moduleId;
      this.currentModule = `Module${module_id}`;
    },
  }

</script>

<style scoped>

</style>
