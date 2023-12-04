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
              
               <MyFormWizard @toHomePage="toHomePageHandler"/>

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
    components: {MyFormWizard},
    methods:{
      toHomePageHandler(){
        return this.$router.push({name: "home"})
      }
    }
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