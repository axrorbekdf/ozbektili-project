<template>
    <!-- Section: Design Block -->
 <section class="">
   <!-- Jumbotron -->
   <div class="text-center text-lg-start bg-naqsh" style=" min-height: 100vh">
     <div class="container-fluid d-inline-block" style="height: 100vh!important;">
       <div class="row align-items-center">
         <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="col-lg-6 mb-5">
              <img src="@/assets/login-in-background.png" alt="">
            </div>
         </div>
 
         <div class="col-lg-6 align-self-center mb-5 mb-lg-0" style="padding: 0;">
           <div class="card w-100 " style="height: 100vh!important;  border-radius: 0; border: 0;">
             <div class="card-body py-5 px-md-5 d-flex align-items-center">
               <form class="w-75">

                <div class="col-md-12 mb-4">
                     <div class="form-outline">
                        <h2>Kirish</h2> 
                     </div>
                </div>
                 <!-- Email input -->
                 <div class="form-outline">
                    <label class="form-label" for="form3Example7">Elektron pochta manzili (login) *</label>
                   <input type="email" id="form3Example7" class="form-control" />
                 </div>

                 <!-- Email input -->
                 <div class="form-outline">
                    <label class="form-label" for="form3Example8">Parol *</label>
                   <input type="text" id="form3Example8" class="form-control" />
                 </div>
 
                 <!-- Checkbox -->
                 <div class="form-check d-flex mb-4 mt-2">
                   <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                   <label class="form-check-label" for="form2Example33">
                     Eslab qolish
                   </label>
                 </div>
 
                 <!-- Submit button -->
                 <button type="submit" class="btn btn-primary btn-block mb-4">
                   Kirish
                 </button>
 
                 <!-- Register buttons -->
                 <div class="text-center">
                   <p><RouterLink to="/register" class="link-underline-light">Ro'yxatdan o'ting</RouterLink> yoki quyidagilar orqali kiring:</p>
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
               </form>

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
 export default {
    
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