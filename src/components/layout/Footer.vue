<template>
    <div style="background-color: #062A49">
      <section class="container-fluid p-0 mt-0 bg-naqsh">
        <div class="container py-5">
          <div class="row justify-content-between py-5">
            <div class="col-md-6 col-12 text-white" style="display: flex; flex-direction: column;">
              <img src="@/assets/logo-white.svg" width="250" alt="">  
              <p class="mt-4">Materialdan to'liq yoki qisman foydalanilganda,<br> piima.uz manbasi ko'rsatilishi shart.</p>
            </div>
            <div class="col-md-3 col-12  text-white" style="display: flex; flex-direction: column;">
              <h4>O'zbek tili darajalari.</h4>
              <p class="text-secondary mt-2 my-1">Beginner</p>
              <p class="text-secondary">Elementary</p>
            </div>
            <div class="col-md-3 col-12 text-white" style="display: flex; flex-direction: column;">
              <h4>Bizning kontaktlarimiz!</h4>
              <p class="text-secondary mt-2 my-1">
                <img src="@/assets/phone-solid.svg" alt="">  
                +998 (55) 502-22-99
              </p>
              <p class="text-secondary my-1">
                <img src="@/assets/phone-solid.svg" alt="">  
                +998 (55) 502-22-99
              </p>
              <p class="text-secondary my-1">
                <img src="@/assets/envelope-solid.svg" alt="">  
                inf@vatandoshlarfondi.uz
              </p>
              <p class="text-secondary my-1">
                <img src="@/assets/envelope-solid.svg" alt="">  
                inf@vatandoshlarfondi.uz
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.bg-naqsh{
    background-image: url('@/assets/naqsh/naqsh1.png'), url('@/assets/naqsh/naqsh2.png'); 
    background-size: auto; 
    background-repeat: no-repeat;
    background-position: 0% 150%, 100% 0%;
}
</style>