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
        <h3 class="text-center mb-2 pb-2 text-primary fw-bold">“ЎЗБЕК ТИЛИ”НИ ЎРГАНИШ ВА ЎҚИТИШ БЎЙИЧА ОНЛАЙН ТАЪЛИМ ПЛАТФОРМАСИ ЯРАТИШДАН МАҚСАД ВА ВАЗИФАЛАР</h3>
        <p class="text-center mb-3">
          Find the answers for the most frequently asked questions below
        </p>

        <div class="row">
          <div class="col-md-12 col-lg-8 mb-4 mx-auto">
            <div>
              <div style="text-align: justify;"><span>&nbsp; &nbsp; &nbsp; &nbsp;Ушбу тизимни яратишдан асосий мақсад Ўзбек тилини А1 даражада билиш учун видеороликлар, ўқув материаллари, ўқув-тематик режа, &nbsp; интерактив &nbsp;машқлар, видеоматериал тайёрлаш ҳамда 12 та ўқув модули бўйича видео курсларни ўз ичига олган онлайн таълим платформасини яратишдан иборат.</span></div>
              <div style="text-align: justify;"><span>&nbsp; &nbsp; &nbsp;Онлайн курслар дунёнинг турли нуқталарида истиқомат қилаётган халқаро таълим &nbsp; тизимида &nbsp;таҳсил олган &nbsp;7-12 &nbsp;ёшдаги &nbsp;ўзбек болалари учун &nbsp;мўлжалланган.</span></div>
              <div style="text-align: justify;"><span>&nbsp; &nbsp; &nbsp;Юқоридагилар билан бир қаторда ушбу онлайн платформани яратишнинг асосий вазифалари қуйидагилардан иборат. Яъни:</span></div>
              <div style="text-align: justify;"><span>- болаларда ўзбек тилидаги элементар, кундалик сўз ва ибораларни ифодалаш қобилиятини шакллантириш;</span></div>
              <div style="text-align: justify;"><span>- ватандошларнинг фарзандларини ватанпарварлик руҳида тарбиялаш ҳамда уларда ватан туйғусини шакллантириш ва бошқалар.</span></div>
              <div style="text-align: justify;"><span>&nbsp; &nbsp; Шунингдек, замонавий веб дастурлаш тилларидан фойдаланган ҳолда фойдаланувчилар учун қулай, тез ва хавфсизлиги тўлиқ таъминланган электрон таълим платформасини яратиш. Бунда қуйидагилар амалга оширилади:</span></div>
              <div style="text-align: justify;"><span>&nbsp;&nbsp;1.  Ўзбек тилини ўрганиш бўйича рақамли контент яратилади (тақдимот, аудио, видео, анимация ва бошқалар);</span></div>
              <div style="text-align: justify;"><span>&nbsp;2. Онлайн курслар бир неча модулларга ажратилган ҳолда кетма-кетликда ўрганиш имконияти яратилади;</span></div>
              <div style="text-align: justify;"><span>&nbsp;3. Платформа барча қурилмаларга мослашувчан шаклда яратилади (смартфон, планшет ва компьютер);</span></div>
              <div style="text-align: justify;"><span>&nbsp;4. Платформа барча учун очиқ ҳисобланади. Лекин рўйхатдан ўтган фойдаланувчилар учун қўшимча имкониятлар тақдим этилади (курсларни кетма-кетликда ўзлаштирган, топшириқларни бажарган ва онлайн тестдан ўтган фойдаланувчиларга электрон сертификат тақдим этилади);</span></div>
              <div style="text-align: justify;"><span>&nbsp;5. Давлатлар ва бошқа маълумотлар кесимида статистик маълумотлар тайёрлаш имконияти яратилади;</span></div>
              <div style="text-align: justify;"><span>&nbsp;&nbsp;6. Тизим бўйича мукаммал қидириш (Advanced searching) имкони яратилади; </span></div>
              <div style="text-align: justify;"><span>&nbsp;&nbsp;7. Ҳар бир ўзлаштирилган курсларни элементлар билан бойитиш;</span></div>
              <div style="text-align: justify;"><span>&nbsp;Шу билан бирга, интерфаол усуллардан фойдаланиш орқали фойдаланувчиларни ушбу платформадан доимий иштирокини ошириб бориш чоралари кўриб борилади.</span></div>
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
