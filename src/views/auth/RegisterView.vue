<template>
    <!-- Section: Design Block -->
 <section class="">
   <!-- Jumbotron -->
   <div class="text-start bg-naqsh" style=" min-height: 100vh">
     <div class="container-fluid d-inline-block" style="height: 100vh!important;">
       <div class="row align-items-center">
         <div class="col-lg-6 mb-5 d-none d-md-block">
           <img src="@/assets/sign-up-background.png" alt="">
         </div>
 
         <div class="col-lg-6 align-self-center mb-5 mb-lg-0" style="padding: 0;">
           <div class="card w-100 " style="height: 100vh!important;  border-radius: 0; border: 0;">
             <div class="card-body py-5 px-md-5 d-flex align-content-center align-items-center justify-content-center flex-wrap">
              
               <MyFormWizard />

               <div class="text-center mt-5">
                  <p><RouterLink to="/login" class="link-underline-light">Kiring</RouterLink> yoki quyidagilar orqali ro'yhatdan o'ring:</p>
                   <button type="button" class="btn btn-link btn-floating mx-1">
                     <i class="fab fa-facebook-f"></i>
                   </button>
 
                   <button type="button" class="btn btn-link btn-floating mx-1">
                     <i class="fab fa-google"></i>
                   </button>
 
                   <button type="button" class="btn btn-link btn-floating mx-1">
                     <i class="fab fa-twitter"></i>
                   </button>
 
                   <button type="button" class="btn btn-link btn-floating mx-1">
                     <i class="fab fa-github"></i>
                   </button>
                 </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   <!-- Jumbotron -->
 </section>
 <!-- Section: Design Block -->
 </template>
 <script>
import { RouterLink } from 'vue-router'
import { MyFormWizard } from '@/components'
 export default {
  components: {MyFormWizard}
 }
 </script>
 <style>
 
.d-inline-block {
    display: inline-block!important;
}
 .bg-naqsh{
    background-image: url('../../assets/background.png'); 
    background-size: cover; 
    background-repeat: no-repeat;
}
 </style>