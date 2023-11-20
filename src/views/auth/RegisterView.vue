<template>
    <!-- Section: Design Block -->
 <section class="">
   <!-- Jumbotron -->
   <div class="text-start bg-naqsh" style=" min-height: 100vh">
     <div class="container-fluid d-inline-block" style="height: 100vh!important;">
       <div class="row align-items-center">
         <div class="col-lg-6 mb-5">
           <img src="@/assets/sign-up-background.png" alt="">
         </div>
 
         <div class="col-lg-6 align-self-center mb-5 mb-lg-0" style="padding: 0;">
           <div class="card w-100 " style="height: 100vh!important;  border-radius: 0; border: 0;">
             <div class="card-body py-5 px-md-5 d-flex align-items-center">
              
               <form class=" w-100">
                 <!-- 2 column grid layout with text inputs for the first and last names -->
                 <div class="row">
                  
                  <div class="col-md-12 mb-4">
                     <div class="form-outline">
                        <h2>Ro'yhatdan o'tish</h2> 
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="form-outline">
                         <label class="form-label" for="form3Example1">Familiyasi *</label>
                       <input type="text" id="form3Example1" class="form-control" />
                       
                     </div>
                   </div>
                   <div class="col-md-6">
                     <div class="form-outline">
                         <label class="form-label" for="form3Example2">Ismi *</label>
                       <input type="text" id="form3Example2" class="form-control" />
                       
                     </div>
                   </div>
                 </div>

                 <!-- 2 column grid layout with text inputs for the first and last names -->
                 <div class="row">
                   <div class="col-md-8">
                     <div class="form-outline">
                         <label class="form-label" for="form3Example3">Otasining ismi</label>
                       <input type="text" id="form3Example3" class="form-control" />
                       
                     </div>
                   </div>
                   <div class="col-md-4">
                     <div class="form-outline">
                         <label class="form-label" for="form3Example4">Tugʼilgan sanasi *</label>
                       <input type="date" id="form3Example4" defaultValue="12.12.1212" class="form-control" />
                       
                     </div>
                   </div>
                 </div>

                 <div class="row">
                   <div class="col-md-4">
                     <div class="form-outline">
                        <label class="form-label">Jinsi *</label><br>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" selected id="inlineRadio1" value="option1">
                            <label class="form-check-label" for="inlineRadio1">Erkak</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                            <label class="form-check-label" for="inlineRadio2">Ayol</label>
                        </div>
                       
                     </div>
                   </div>
                   <div class="col-md-4">
                    <label class="form-label" for="form3Example5">Bandlik maqomi</label><br>
                    <select class="form-select" aria-label="Default select example" id="form3Example5">
                        <option selected>o'quvchi</option>
                        <option value="1">talaba</option>
                        <option value="2">ishchi</option>
                        <option value="3">ishsiz</option>
                    </select>
                   </div>
                   <div class="col-md-4">
                    <label class="form-label" for="form3Example6">Xorijiy davlat *</label><br>
                    <select class="form-select" aria-label="Default select example" id="form3Example6">
                        
                        <option selected>Davlatni tanlang</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
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

                 <!-- Email input -->
                 <div class="form-outline">
                    <label class="form-label" for="form3Example9">Qaytadan parol *</label>
                   <input type="text" id="form3Example9" class="form-control" />
                 </div>

                 
 
                 <!-- Checkbox -->
                 <div class="form-check d-flex mb-4 mt-2">
                   <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                   <label class="form-check-label" for="form2Example33">
                     Eslab qolish
                   </label>
                 </div>

                 <!-- Checkbox -->
                 <div class="form-check mb-4 mt-2" style="padding-left: 0;">
                  <ReCaptcha />
                 </div>

                 <!-- Submit button -->
                 <button type="submit" class="btn btn-primary btn-block mb-4">
                   Ro'yhatdan o'tish
                 </button>
 
                 <!-- Register buttons -->
                 <div class="text-center">
                  <p>yoki quyidagilar orqali ro'yhatdan o'ring:</p>
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