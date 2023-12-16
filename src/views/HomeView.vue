<template>
    <header class="position-relative overflow-hidden p-3 text-center video-opacity">
          <Navbar />

          <div class="col-md-6 p-lg-5 mx-auto my-md-5 video-old-block">
            <h1 class="display-3 fw-bold">O'zbek tilini o'qitish bo'yicha <span class="innovation d-none">innovatsion</span> ta'lim platformasi</h1>
            <p class="fw-10 mb-3 text-white d-none">Build anything you want with Aperture anything you want with Aperture</p>
            <div v-if="!isLoggedIn" class="d-flex gap-3 justify-content-center lead fw-normal kirish-button" style="margin-top: 3vw;">
              <RouterLink to="/login" class="btn btn-primary py-md-2 px-md-5 py-sm-1 px-sm-2">Kirish</RouterLink>
              <RouterLink to="/register" class="btn btn-light py-md-2 px-md-5 py-sm-1 px-sm-2">Ro'yhatdan o'tish</RouterLink>
            </div>
          </div>

          <div class="video-container">
            <video autoplay loop muted id="video-bg">
              <source src="@/assets/video/header.mp4" type="video/mp4">
            </video>
          </div>

          
    </header>

    <section class="bg-naqsh" style="padding-bottom: 60px;">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-3 col-6" style="display: flex; justify-content: space-around;">
            <div class="header-next-blocks card text-center border-0 p-3" style="background-color: #48D78D;">
              <div class="card-header border-bottom-0 bg-transparent">
                <img src="@/assets/display-solid.svg" class="iconSvg" alt="">
              </div>
              <div class="card-body text-white">
                <h6 class="card-title">Sifatli ta'lim</h6>
                <p class="card-text" style="font-size: 12px;">O'zbek tilini o'rganish imkoniyati</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-6" style="display: flex; justify-content: space-around;">
            <div class="header-next-blocks card text-center border-0 p-3" style="background-color: #1EC1D9;">
              <div class="card-header border-bottom-0 bg-transparent">
                <img src="@/assets/certificate-solid.svg" alt="">
              </div>
              <div class="card-body text-white">
                <h6 class="card-title">Sertifikat</h6>
                <p class="card-text" style="font-size: 12px;">Kurs so’ngida sertifikatga ega bo’lish</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-6" style="display: flex; justify-content: space-around;">
            <div class="header-next-blocks card text-center border-0 p-3" style="background-color: #307AD5;">
              <div class="card-header border-bottom-0 bg-transparent">
                <img src="@/assets/infinity-solid.svg" alt="">
              </div>
              <div class="card-body text-white">
                <h6 class="card-title">Erkin grafik</h6>
                <p class="card-text" style="font-size: 12px;">Siz bo’sh vaqtingizda o’rganasiz</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-6" style="display: flex; justify-content: space-around;">
            <div class="header-next-blocks card text-center border-0 p-3" style="background-color: #EAB830;">
              <div class="card-header border-bottom-0 bg-transparent">
                <img src="@/assets/globe-solid-v2.svg" alt="">
              </div>
              <div class="card-body text-white">
                <h6 class="card-title">24/7 Online</h6>
                <p class="card-text" style="font-size: 12px;">Siz bo’sh vaqtingizda o’rganasiz</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-5 p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold lh-1 text-body-secondary">Millatning  eng bebaho boyligi uning <span class="text-primary">ona tilidir</span>!</h1>
            <p class="lead">Dunyo keng. Odamzodga har yer makon bo‘lishi mumkin. Ammo inson qayerda yashashidan qat’i nazar ota-bobolari tug‘ilgan yurtni, ular so‘zlashgan tilni sevadi, ardoqlaydi. Chunki bu til- uning ona tilidir.</p>
            <p class="lead">Platformamiz dunyoning turli mamlakatlarida yashovchi aziz vatandoshlarimizga mo‘ljallangan.</p>
            <p class="lead">Ushbu platforma orqali Siz o‘zbek tilini o‘rganasiz. O‘zbekistonning boy tarixi, samimiy odamlari, madaniyati, so‘lim tabiati, urf-odatlari va milliy taomlari bilan tanishasiz.</p>
            <p class="lead">Biz bu yo‘lda doim Sizga  ko‘maklashamiz.</p>
            <p class="lead text-primary fw-bold">Sizga omad yor bo‘lsin!</p>
            
          </div>
          <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img class="rounded-lg-3" src="@/assets/section-back.jpg" alt="" width="720">
          </div>
        </div>
      </div>
    </section>

    <section class="text-center container-fluid p-0">
  
      <div class="album py-5 bg-body-secondary  module-back">
        
        <DoppiNaqsh 
          :image="'doppi_ozi.png'" 
          :rotate="45"
          :top="'-20px'"
        />

        <DoppiNaqsh 
          :image="'doppi_light.png'" 
          :rotate="45"
          :top="'-20px'"
        />

        <DoppiNaqsh 
          :image="'doppi_dark.png'" 
          :rotate="45"
          :top="'-20px'"
        />

        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 mx-auto">
                <h1 class="h2 fw-bold">Barcha bo'limlar</h1>
                <p class="fw-10 mb-3">O'zbek tilini o'qitish bo'yicha barcha bo'limlar.</p>

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">

                  <div class="col-lg-4" v-for="item in modules" :key="item.id">
                    <div class="card shadow-sm text-white  bg-opacity-75" style="border: none; border-radius:15px;">
                        <img class="bd-placeholder-img card-img-top" style="border-radius:15px;" :src="filePath+'/storage/'+item.image" alt="">
                        <div class="card-body card-img-overlay for-card-body">
                          <h6 class="card-text text-start">{{ item.info }} "{{ item.name }}"</h6>
                          <div class="d-flex justify-content-between align-items-center">
                            <i class="fa-solid fa-person-chalkboard"></i>
                            <h6 class="mx-3">{{ item.units.length }}</h6>
                          </div>
                        </div>
                      </div>
                  </div>

                </div>
            </div>
            <div class="col-lg-4">
                <Country />
                
            </div>
          </div>          
        </div>
      </div>
    </section>

    <section class="text-center container-fluid p-0 bg-naqsh">

      <div class="container py-4">
        <div class="row justify-content-md-center">
          <div class="col-md-3 col-6" style="display: flex; justify-content: space-around;">
            <div class="module-next-blocks card text-center border-0 p-3 bg-transparent ">
              <div class="card-header border-bottom-0 bg-transparent">
                <h1><Counter :start="4"/></h1>
              </div>
              <div class="card-body">
                <h6 class="card-title">Sifatli ta'lim</h6>
                <p class="card-text" style="font-size: 12px;">O'zbek tilini o'rganish imkoniyati</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-6" style="display: flex; justify-content: space-around;">
            <div class="module-next-blocks card text-center border-0 p-3 bg-transparent ">
              <div class="card-header border-bottom-0 bg-transparent">
                <h1><Counter :start="5"/></h1>
              </div>
              <div class="card-body">
                <h6 class="card-title">Sertifikat</h6>
                <p class="card-text" style="font-size: 12px;">Kurs so’ngida sertifikatga ega bo’lish</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-6" style="display: flex; justify-content: space-around;">
            <div class="module-next-blocks card text-center border-0 p-3 bg-transparent ">
              <div class="card-header border-bottom-0 bg-transparent">
                <h1><Counter :start="5"/></h1>
              </div>
              <div class="card-body">
                <h6 class="card-title">Erkin grafik</h6>
                <p class="card-text" style="font-size: 12px;">Siz bo’sh vaqtingizda o’rganasiz</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-6" style="display: flex; justify-content: space-around;">
            <div class="module-next-blocks card text-center border-0 p-3 bg-transparent ">
              <div class="card-header border-bottom-0 bg-transparent">
                <h1><Counter :start="5"/></h1>
              </div>
              <div class="card-body">
                <h6 class="card-title">24/7 Online</h6>
                <p class="card-text" style="font-size: 12px;">Siz bo’sh vaqtingizda o’rganasiz</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="album py-5 d-none">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 mx-auto">
                <h1 class="h2 fw-bold">Platforma yangiliklari</h1>
                <p class="fw-10 mb-3">Build anything you want with Aperture anything you want with Aperture</p>

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 mt-5">
                  
                  <div v-if="news" class="col-lg-3" v-for="item in news" :key="item.id">
                    <div class="card shadow-sm text-start border-0">
                      <img class="bd-placeholder-img card-img-top" style="border-radius:0" :src="filePath+'/storage/'+item.image" alt="">
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                          <small class="text-body-secondary">
                            <img src="@/assets/calendar-regular.svg" alt="" style="margin-right: 5px;">
                            <!-- 12.12.2002 -->
                            {{ new Date(item.added_date).toLocaleString('us', {year: 'numeric', month: '2-digit',day: '2-digit'}) }}
                          </small>
                          <small class="text-body-secondary">
                            <img src="@/assets/eye-regular.svg" alt="" style="margin-right: 5px;">
                            {{ item.views }}
                          </small>
                        </div>
                        <p class="card-text fw-medium mb-0">{{ item.name }}</p>
                        <span class="card-text" style="font-size: 14px;" v-html="item.description"></span>
                        <div class="d-flex justify-content-between align-items-center">
                            <RouterLink :to="'/news/'+item.id" type="button" class="btn btn-sm bg-body-secondary px-4 py-2 mt-2">Batafsil...</RouterLink>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

            </div>
            
          </div>

          
          
        </div>
      </div>
    </section>

    <Footer />

</template>

<script>
  import { RouterLink } from 'vue-router'
  import { mapGetters } from 'vuex';
  import { mapState } from 'vuex';
  import {gettersTypes} from '@/modules/types'
  import Navbar from '../components/layout/Navbar.vue';
  import Footer from '../components/layout/Footer.vue';
  import Country from '@/components/Country.vue';
  import DoppiNaqsh from '@/components/DoppiNaqsh.vue';
  import { filePath } from '@/constants'

  export default{
    components:{
      Navbar,
      Footer,
      Country,
      DoppiNaqsh
    },
    data(){
    return {
      filePath: filePath
    }
  },
    created(){
        this.$store.dispatch('getAll');
        this.$store.dispatch('getCountriesStat');
        this.$store.dispatch('getModules');
    },
    computed:{
        ...mapGetters({
            isLoggedIn: gettersTypes.isLoggedIn,
            modules: gettersTypes.modules,
        }),

        ...mapState({
            news: (state) => state.news.news,
            isLoading: (state) => state.news.isLoading,
            error: (state) => state.news.errors,
        })
    }
  }

</script>

<style scoped>

/* .news-back{
  
  background-image: url('../assets/news-back-left1.png'), url('../assets/news-back-right1.png'), url('../assets/background.png'); 
    background-size: auto, auto, cover; 
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: 0% 40%, 100% 40%, 100%;
} */

.module-back{
  position: relative;
  background-image: 
    url('../assets/module-left.png'), 
    url('../assets/module-right1.png'); 
  background-size: auto, auto; 
  background-repeat: no-repeat;
  background-position: 0% 100%, 100% 0%;
}

.bg-naqsh{
    background-image: url('../assets/background.png'); 
    background-size: cover; 
    background-repeat: no-repeat;
}

.for-card-body{
  display: flex;
  align-items: baseline;
  flex-direction: column;
  justify-content: flex-end;
  background: #2c2c2c95;
}

.header-next-blocks{
    max-width: 45vw;  
    width: 15vw;
    margin-top: -8vh;
}

.video-old-block{
  /* height: 60vh;  */
  height: 70vh;
  color: white;
}


@media (max-width: 768px) {
  .header-next-blocks{
    width: 100%;
    margin-top: 2vh;
  }

  .header-next-blocks .card-header img{
    width: 35px;
  }

  .kirish-button a{
    /* flex-direction: column; */
    font-size: 8px;
  }

  .video-old-block{
    height: 0;
    margin-bottom: 15vh;
  }
  .video-old-block h1{
    font-size: 18px;
  }

  .video-old-block p{
    font-size: 10px;
  }
}


.innovation{
  color: #EED468;
  border-bottom: 2px solid #EED468;
}

.video-opacity{
  background-color: #00000087;
}

.video-container {
  z-index: -100;
  width:100%;
  height:100%;
  overflow:hidden;
  position:absolute;
  top:0;
  left:0;
  bottom: 0;
}

#video-bg{
  width:100%;
}
</style>
