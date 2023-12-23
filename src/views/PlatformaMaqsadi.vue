<template>
  <header class="position-relative overflow-hidden p-3 text-center">
    <Navbar />

        <div class="col-md-6 p-lg-5 mx-auto my-md-5 text-white">
          <h1>Platform maqsadi</h1>
          <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
            <ol class="breadcrumb" style="justify-content: center;">
              <li class="breadcrumb-item"><a class="text-white" href="#">Bosh sahifa </a></li>
              <li class="breadcrumb-item active text-white" aria-current="page">Platform maqsadi</li>
            </ol>
          </nav>
        </div>

        <div class="header-image-container">
          <div id="header-bg">
          </div>
        </div>
  </header>

  
  <section class=" container-fluid p-0 bg-naqsh">
    <div class="album py-5">
      <div class="container">
       <!--Section: FAQ-->
      <section>
        <h3 class="text-center mb-2 pb-2 text-primary fw-bold">“O'ZBEK TILI”NI O'RGANISH VA O'QITISH BO'YICHA ONLAYN TA'LIM PLATFORMASI YARATISHDAN MAQSAD VA VAZIFALAR</h3>
        <p class="text-center mb-3 fw-bold">
          Loyiha konsepsiyasi
        </p>

        <div class="row">
          <div class="col-md-12 col-lg-10 mb-4 mx-auto">
              <div style="text-align: justify;">
                O'zbekiston Respublikasi Prezidentining 2023-yil 28-fevraldagi PF-27-son Farmoni bilan 2022-2026-yillarga mo'ljallangan Yangi O'zbekistonning taraqqiyot strategiyasini “Insonga eʼtibor va sifatli taʼlim yili”da amalga oshirishga oid Davlat dasturi tasdiqlangan.
                Mazkur Davlat dasturining 87-moddasi 268-bandida Xorijda yashayotgan vatandoshlar orasida o'zbek tilini keng targ'ib qilish, o'zbek tili bo'yicha xorijdagi vatandoshlarga mo'ljallangan onlayn mashg'ulotlarni tashkil etish vazifasi belgilangan.

                “Vatandosh” loyihasi dunyoning turli mamlakatlarida yashovchi vatandoshlarimizning farzandlari o'z ona tillarini bilishlari, o'zbek millatining qadriyatlari va urf-odatlari bilan yaqindan tanishishlari, ularning o'zbek tilida muloqot madaniyatlarini shakllantirishga qaratilgan elektron tizim uchun o'zbek tilini o'rganish reja va dasturi, o'quv-metodik jamlanmasi, lug'at, grammatik material, turli amaliy va interaktiv mashqlar, test topshiriqlari, audio va video mahsulotlarini yaratish va jahon miqyosida keng joriy etishga mo'ljallangan.

                Loyiha maqsadi
                Til o'rganayotgan shaxslarning o'zbek tili doirasidagi topshiriqlar bilan ishlash: tinglab-tushunish, o'qish, so'zlash va yozish ko'nikmalarini shakllantirishga qaratilgan elektron tizim uchun uchun o'zbek tilini o'rganish reja va dasturi, o'quv-metodik jamlanmasi: lug'at, grammatik material, turli amaliy va interaktiv mashqlar, test topshiriqlari, audio va video mahsulotlarini yaratish va jahon miqyosida keng joriy etish.

                Loyiha vazifalari
                1.  Xalqaro til o'rganish uchun yaratilgan elektron tizim uchun o'zbek tilini chet tili sifatidagi reja va dasturini tuzish.
                2.  Xalqaro talablarga javob beradigan va keng doiraga mo'ljallangan A1 darajasini qamrab oluvchi dastur asosida lug'at, grammatik material, mashqlar to'plami, testlar to'plamini yaratish. 
                3.  Elektron tizimga joylashtirish uchun to'plangan ma'lumotlar asosida dars ssenariylarini yozish.
                4.  Yaratilgan ssenariylar asosida audio va video mahsulotlarini tayyorlab, elektron tizimga joylashtirish.
                5.  Til o'rganuvchilarning motivatsiyasini oshirish va amaliy ko'nikmalarini rivojlantirish uchun elektron tizimdagi materiallarni qiziqarli rasm va animatsiyalar bilan boyitish. 
                6.  O'zbek tilini o'rgatish bo'yicha yaratilgan kontentni jahon miqyosida keng joriy etish.
              </div>
          </div>
        </div>
      </section>
      <!--Section: FAQ-->
        
      </div>
    </div>
  </section>

  <Footer/>
</template>

<script>
import { RouterLink } from 'vue-router'
import Navbar from '../components/layout/Navbar.vue';
import Footer from '../components/layout/Footer.vue';
export default{
  components:{
    Navbar,
    Footer
  }
}

</script>

<style scoped>

.bg-naqsh{
  background-image: url('../assets/background.png'); 
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: 100%;
}


@media (max-width: 992px) {
.nav-menu{
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
}

.btn-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.btn-group{
  margin-bottom: 15px;
}
}

@media (max-width: 768px) {
.kirish-button a{
  /* flex-direction: column; */
  font-size: 8px;
}

}

.dropdown-menu .dropdown-item{
color: white;
}
.dropdown-menu .dropdown-item:hover{
background: #0a58ca;
color: white;
}
.innovation{
color: #EED468;
border-bottom: 2px solid #EED468;
}

.header-image-container {
  z-index: -100;
  width:100%;
  height:100%;
  overflow:hidden;
  position:absolute;
  top:0;
  left:0;
  bottom: 0;
  background-image: url('../assets/image1.jpg'); 
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: 100%;
}

#header-bg{
  height: 60vh;
  background-color: rgb(0 0 0 / 70%);
}
</style>
