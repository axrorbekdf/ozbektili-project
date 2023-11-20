<template>
    <vue-recaptcha v-show="showRecaptcha" sitekey="6Le2fhUpAAAAAHlJ_i9kZHqz0CJRqKBUyUQbil2z"
           size="normal" 
           theme="light"
           hl="ru"
           :loading-timeout="loadingTimeout"
           @verify="recaptchaVerified"
           @expire="recaptchaExpired"
           @fail="recaptchaFailed"
           @error="recaptchaError"
           ref="vueRecaptcha">
    </vue-recaptcha>
  </template>
  
  <script>
  import vueRecaptcha from 'vue3-recaptcha2';
  
  export default {
    name: 'ReCaptcha',
    components: {
      vueRecaptcha
    },
    data() {
      return {
          showRecaptcha: true,
          loadingTimeout: 30000 // 30 seconds
      }
    },
    methods: {
      recaptchaVerified(response) {
      },
      recaptchaExpired() {
        this.$refs.vueRecaptcha.reset();
      },
      recaptchaFailed() {
      },
      recaptchaError(reason) {
      }
    }
  };
  </script>