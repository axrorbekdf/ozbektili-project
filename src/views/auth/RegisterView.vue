<template>
    <!-- Section: Design Block -->
 <section class="">
   <!-- Jumbotron -->
   <div class="text-start bg-naqsh" style=" min-height: 100vh">
     <div class="container-fluid d-inline-block" style="height: 100vh!important;">
       <div class="row align-items-center">
         <div class="col-lg-6 mb-5 mb-lg-0">
           <h1 class="my-5 display-3 fw-bold ls-tight">
             The best offer <br />
             <span class="text-primary">for your business</span>
           </h1>
           <p style="color: hsl(217, 10%, 50.8%)">
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eveniet, itaque accusantium odio, soluta, corrupti aliquam
             quibusdam tempora at cupiditate quis eum maiores libero
             veritatis? Dicta facilis sint aliquid ipsum atque?
           </p>
         </div>
 
         <div class="col-lg-6 align-self-center mb-5 mb-lg-0" style="padding: 0;">
           <div class="card w-100 " style="height: 100vh!important;  border-radius: 0; border: 0;">
             <div class="card-body py-5 px-md-5 d-flex align-items-center">
               <form class=" w-100">
                 <!-- 2 column grid layout with text inputs for the first and last names -->
                 <div class="row">
                   <div class="col-md-6">
                     <div class="form-outline">
                         <label class="form-label" for="form3Example1">Фамилияси *</label>
                       <input type="text" id="form3Example1" class="form-control" />
                       
                     </div>
                   </div>
                   <div class="col-md-6">
                     <div class="form-outline">
                         <label class="form-label" for="form3Example2">Исми *</label>
                       <input type="text" id="form3Example2" class="form-control" />
                       
                     </div>
                   </div>
                 </div>

                 <!-- 2 column grid layout with text inputs for the first and last names -->
                 <div class="row">
                   <div class="col-md-8">
                     <div class="form-outline">
                         <label class="form-label" for="form3Example3">Отасининг исми</label>
                       <input type="text" id="form3Example3" class="form-control" />
                       
                     </div>
                   </div>
                   <div class="col-md-4">
                     <div class="form-outline">
                         <label class="form-label" for="form3Example4">Туғилган санаси *</label>
                       <input type="date" id="form3Example4" defaultValue="12.12.1212" class="form-control" />
                       
                     </div>
                   </div>
                 </div>

                 <div class="row">
                   <div class="col-md-4">
                     <div class="form-outline">
                        <label class="form-label">Жинси *</label><br>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                            <label class="form-check-label" for="inlineRadio1">Erkak</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                            <label class="form-check-label" for="inlineRadio2">Ayol</label>
                        </div>
                       
                     </div>
                   </div>
                   <div class="col-md-4">
                    <label class="form-label" for="form3Example5">Бандлик мақоми</label><br>
                    <select class="form-select" aria-label="Default select example" id="form3Example5">
                        <option selected>ўқувчи</option>
                        <option value="1">талаба</option>
                        <option value="2">ишчи</option>
                        <option value="3">ишсиз</option>
                    </select>
                   </div>
                   <div class="col-md-4">
                    <label class="form-label" for="form3Example6">Хорижий давлат *</label><br>
                    <select class="form-select" aria-label="Default select example" id="form3Example6">
                        
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                   </div>
                 </div>

                 <!-- Email input -->
                 <div class="form-outline">
                    <label class="form-label" for="form3Example7">Электрон почта манзили (логин) *</label>
                   <input type="email" id="form3Example7" class="form-control" />
                 </div>

                 <!-- Email input -->
                 <div class="form-outline">
                    <label class="form-label" for="form3Example8">Пароль *</label>
                   <input type="text" id="form3Example8" class="form-control" />
                 </div>

                 <!-- Email input -->
                 <div class="form-outline">
                    <label class="form-label" for="form3Example9">Қайтадан пароль *</label>
                   <input type="text" id="form3Example9" class="form-control" />
                 </div>

    
 
                 <!-- Checkbox -->
                 <div class="form-check d-flex mb-4 mt-2">
                   <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                   <label class="form-check-label" for="form2Example33">
                     Subscribe to our newsletter
                   </label>
                 </div>
 
                 <!-- Submit button -->
                 <button type="submit" class="btn btn-primary btn-block mb-4">
                   Ro'yhatdan o'tish
                 </button>
 
                 <!-- Register buttons -->
                 <div class="text-center">
                   <p>or sign up with:</p>
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