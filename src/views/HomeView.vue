<template>
    <header class="position-relative overflow-hidden p-3 text-center video-opacity">
          <Navbar />

          <div class="col-md-6 p-lg-5 mx-auto my-md-5 video-old-block">
            <h1 class="display-3 fw-bold">O'zbek tilini o'qitish bo'yicha <span class="innovation">innovatsion</span> ta'lim platformasi</h1>
            <p class="fw-10 mb-3 text-white">Build anything you want with Aperture anything you want with Aperture</p>
            <div class="d-flex gap-3 justify-content-center lead fw-normal kirish-button" style="margin-top: 3vw;">
              <a class="btn btn-primary py-md-2 px-md-5 py-sm-1 px-sm-2" href="#">
                Kirish
             </a>
              <a class="btn btn-light py-md-2 px-md-5 py-sm-1 px-sm-2" href="#">
                Ro'yhatdan o'tish
              </a>
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
      </div>
    </section>

    <section class="text-center container-fluid p-0">
  
      <div class="album py-5 bg-body-secondary  module-back">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 mx-auto">
                <h1 class="h2 fw-bold">Barcha modullar</h1>
                <p class="fw-10 mb-3">Build anything you want with Aperture anything you want with Aperture</p>

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                  <div class="col-lg-4">
                    <div class="card shadow-sm text-white  bg-opacity-75" style="border: none; border-radius:15px;">
                        <img class="bd-placeholder-img card-img-top" style="border-radius:15px;" src="@/assets/new-language-01.jpg" alt="">
                        <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                        <div class="card-body card-img-overlay for-card-body">
                          <h4 class="card-text">This is a wider</h4>
                          <div class="d-flex justify-content-between align-items-center my-1">
                            <img src="@/assets/display-solid.svg" style="width: 25px" alt="">
                            <h6 class="mx-3">12 ta modul</h6>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="card shadow-sm text-white  bg-opacity-75" style="border: none; border-radius:15px;">
                        <img class="bd-placeholder-img card-img-top" style="border-radius:15px;" src="@/assets/new-language-01.jpg" alt="">
                        <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                        <div class="card-body card-img-overlay for-card-body">
                          <h4 class="card-text">This is a wider</h4>
                          <div class="d-flex justify-content-between align-items-center my-1">
                            <img src="@/assets/display-solid.svg" style="width: 25px" alt="">
                            <h6 class="mx-3">12 ta modul</h6>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="card shadow-sm text-white  bg-opacity-75" style="border: none; border-radius:15px;">
                        <img class="bd-placeholder-img card-img-top" style="border-radius:15px;" src="@/assets/new-language-01.jpg" alt="">
                        <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                        <div class="card-body card-img-overlay for-card-body">
                          <h4 class="card-text">This is a wider</h4>
                          <div class="d-flex justify-content-between align-items-center my-1">
                            <img src="@/assets/display-solid.svg" style="width: 25px" alt="">
                            <h6 class="mx-3">12 ta modul</h6>
                          </div>
                        </div>
                      </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="card shadow-sm text-white  bg-opacity-75" style="border: none; border-radius:15px;">
                        <img class="bd-placeholder-img card-img-top" style="border-radius:15px;" src="@/assets/new-language-01.jpg" alt="">
                        <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                        <div class="card-body card-img-overlay for-card-body">
                          <h4 class="card-text">This is a wider</h4>
                          <div class="d-flex justify-content-between align-items-center my-1">
                            <img src="@/assets/display-solid.svg" style="width: 25px" alt="">
                            <h6 class="mx-3">12 ta modul</h6>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="card shadow-sm text-white  bg-opacity-75" style="border: none; border-radius:15px;">
                        <img class="bd-placeholder-img card-img-top" style="border-radius:15px;" src="@/assets/new-language-01.jpg" alt="">
                        <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                        <div class="card-body card-img-overlay for-card-body">
                          <h4 class="card-text">This is a wider</h4>
                          <div class="d-flex justify-content-between align-items-center my-1">
                            <img src="@/assets/display-solid.svg" style="width: 25px" alt="">
                            <h6 class="mx-3">12 ta modul</h6>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="card shadow-sm text-white  bg-opacity-75" style="border: none; border-radius:15px;">
                        <img class="bd-placeholder-img card-img-top" style="border-radius:15px;" src="@/assets/new-language-01.jpg" alt="">
                        <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                        <div class="card-body card-img-overlay for-card-body">
                          <h4 class="card-text">This is a wider</h4>
                          <div class="d-flex justify-content-between align-items-center my-1">
                            <img src="@/assets/display-solid.svg" style="width: 25px" alt="">
                            <h6 class="mx-3">12 ta modul</h6>
                          </div>
                        </div>
                      </div>
                  </div>

                  <div class="col-lg-12 mt-4">
                    <a class="btn btn-primary btn-lg py-md-2 px-md-5 py-sm-1 px-sm-2" href="#">
                        Barcha modullar...
                    </a>
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

    <section class="text-center container-fluid p-0 news-back">

      <div class="container py-4">
        <div class="row justify-content-md-center">
          <div class="col-md-3 col-6" style="display: flex; justify-content: space-around;">
            <div class="module-next-blocks card text-center border-0 p-3 bg-transparent ">
              <div class="card-header border-bottom-0 bg-transparent">
                <h1><Counter :start="452"/></h1>
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
                <h1><Counter :start="263"/></h1>
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
                <h1><Counter :start="321"/></h1>
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
                <h1><Counter :start="241"/></h1>
              </div>
              <div class="card-body">
                <h6 class="card-title">24/7 Online</h6>
                <p class="card-text" style="font-size: 12px;">Siz bo’sh vaqtingizda o’rganasiz</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="album py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 mx-auto">
                <h1 class="h2 fw-bold">Platforma yangiliklari</h1>
                <p class="fw-10 mb-3">Build anything you want with Aperture anything you want with Aperture</p>

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 mt-5">
                  
                  <div v-if="news" class="col-lg-3" v-for="item in news" :key="item.id">
                    <div class="card shadow-sm text-start border-0">
                      <img class="bd-placeholder-img card-img-top" style="border-radius:0" src="@/assets/new-language-01.jpg" alt="">
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


  export default{
    components:{
      Navbar,
      Footer,
      Country
    },
    created(){
        if(this.isLoggedIn){
            return this.$router.push('/')
        }
        this.$store.dispatch('getAll');
        this.$store.dispatch('getCountries');
    },
    computed:{
        ...mapGetters({
            isLoggedIn: gettersTypes.isLoggedIn,
            currentUser: gettersTypes.currentUser
        }),

        ...mapState({
            news: (state) => state.news.news,
            isLoading: (state) => state.news.isLoading,
            error: (state) => state.news.errors,
        })
    },
    methods:{
        
        toHomeHandler(){
            return this.$router.push('/')
        },
        logout(){
            this.$store.dispatch('logout')
            this.$router.push('/login')
        }
    }
  }

</script>

<style scoped>

.news-back{
  
  background-image: url('../assets/news-back-left1.png'), url('../assets/news-back-right1.png'), url('../assets/background.png'); 
    background-size: auto, auto, cover; 
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: 0% 40%, 100% 40%, 100%;
}
.module-back{
  background-image: url('../assets/module-left.png'), url('../assets/module-right1.png'); 
  background-size: auto, auto; 
  background-repeat: no-repeat no-repeat;
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
}

.header-next-blocks{
    max-width: 45vw;  
    width: 15vw;
    margin-top: -8vh;
}

.video-old-block{
  /* height: 60vh;  */
  height: 80vh;
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
