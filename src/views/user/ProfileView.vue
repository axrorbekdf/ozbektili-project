<template>
  

  <section class="container-fluid p-0 bg-naqsh">
    <div class="album py-2">
      <div class="container">

        <div class="row ">
          <div class="col-md-12 mx-auto"> <!-- Profile widget -->
            <div class="bg-white shadow rounded overflow-hidden">
              <div class="row px-4 pt-0 pb-5 cover">
                <div class="d-flex align-items-center col-7" style="transform: translateY(3rem)">
                  
                  <RouterLink to="/" class="d-inline-flex link-body-emphasis text-decoration-none row">
                    <img src="@/assets/logo-white.svg" alt="" style="width: 280px" class="col-md-6">  
                    
                    <img src="https://piima.uz/images/footer-logo-new.svg" alt="" style="width: 280px" class="col-md-6">  
                  </RouterLink>
                </div>
                <div class="profile-head col-5 text-end">
                  <div class="profile mr-3">
                    <img :src="`https://ui-avatars.com/api/?background=random&name=${currentUser.name}`" alt="..." width="100" class="rounded mb-2">
                  </div>
                  <div class="media-body mb-5 text-white ">
                    <h4 class="mt-0 mb-0">{{ currentUser.name }} {{ currentUser.surname }}</h4>
                    <p class="small mb-4"> <i class="fas fa-map-marker-alt mr-2"></i> Toshkent, {{currentUser.type}}</p>
                  </div>
                </div>
                
              </div>
              

              <div class="row">
                <div class="col-lg-3 col-md-2">
                  <div class="flex-shrink-0 p-3">
                    <a href="#"
                      class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
                      <span class="fs-5 fw-semibold">Asosiy</span>
                    </a>
                    <ul class="list-unstyled ps-0">
                      <li class="mb-1">
                        <button class="btn btn-toggle d-inline-flex align-items-center fw-medium">
                          Tahrirlash
                        </button>
                      </li>
                      <li class="mb-1">
                        <button class="btn btn-toggle d-inline-flex align-items-center fw-medium">
                          Parolni o'zgartirish
                        </button>
                      </li>
                      <li class="mb-1">
                        <button class="btn btn-toggle d-inline-flex align-items-center fw-medium">
                          Bajarilgan topshiriqlar
                        </button>
                      </li>
                      <li class="mb-1">
                        <button class="btn btn-toggle d-inline-flex align-items-center fw-medium">
                          Sertifikatlar
                        </button>
                      </li>
                      <li>
                        <hr>
                      </li>
                      <li class="mb-1">
                        <button @click="logout" class="btn btn-toggle d-inline-flex align-items-center fw-medium">
                          Chiqish
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="col-lg-9">
                  <div class="py-4 px-4">
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <h5 class="mb-0">Mundarija</h5><a href="#" class="btn btn-link text-muted">Barchasi</a>
                      </div>
                      <div class="row">
                        <div class="row" v-if="isLoading">
                          <div class="col-12 text-center d-flex align-items-center justify-content-center">
                            <Loader class="mx-2"/> Yuklanmoqda...!
                          </div>
                        </div>
                        <div v-else class="col-md-12">
                          <div class="card mb-3">
                            <div class="row g-0" v-for="item,moduleIndex in studentModules" :key="item.id">
                              <div class="col-md-4 d-flex flex-direction-column p-2">
                                <img :src="filePath+'/storage/'+item.image" class="img-fluid rounded mx-auto" alt="..." style="width: 100%;">
                                <div class="d-flex w-100 justify-content-between align-items-center">
                                  <span class="p-1 mx-2 bg-warning-subtle text-warning fw-bold" style="font-size: 12px;" >{{ item.info }}</span>
                                  <span class="p-1 mx-2">
                                    <img src="@/assets/eye-regular.svg"  style="margin-right: 5px;"> {{ item.id }}
                                  </span>
                                </div>
                              </div>
                              <div class="col-md-8 d-flex align-items-center">
                                <div class="card-body">
                                  <h3 class="card-title">{{ item.name }}</h3>
                                  <p class="card-text">
                                      <span v-for="unit, index in item.units" :key="unit.id">
                                        {{ index+1 }}: {{ unit.name }}  
                                        <span v-if="item.units.length != index+1" class="mx-2">|</span> 
                                      </span>      
                                  </p>
                                  
                                  <div v-if="item.status == 'f'">
                                    <span class="fw-bold text-secondary" style="font-size: 14px;">
                                      <i class="fa-regular fa-circle-check"></i>
                                      Tugatildi
                                    </span>
                                    <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                      <div class="progress-bar bg-magenta" :style="`width: ${progress_value[`m`+item.id]}%;`" style ="background-color: hsl(264, 88%, 55%);" ></div>
                                    </div>
                                  
                                  
                                    <RouterLink :to="`/module/lesson/${moduleIndex+1}`" aria-disabled="true" class="btn mt-4" style="background-color: hsla(282, 85%, 42%, 0.275); color: hsl(264, 83%, 60%);">
                                      <p class="card-text fw-medium">
                                        <i class="fa-solid fa-arrow-rotate-right"></i>
                                        Qaytadan o'qish  
                                      </p> 
                                    </RouterLink>
                                  </div>

                                  <div v-if="item.status == 'n'">
                                    <span class="fw-bold text-secondary" style="font-size: 14px;">
                                      <i class="fa-regular fa-clock"></i>
                                      O'qilmoqda
                                    </span>
                                    <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                      <div class="progress-bar bg-magenta" :style="`width: ${progress_value[`m`+item.id]}%;`" style ="background-color: hsl(264, 88%, 55%);" ></div>
                                    </div>
                                  
                                  
                                    <RouterLink :to="`/module/lesson/${moduleIndex+1}`" aria-disabled="true" class="btn mt-4" style="background-color: hsla(159, 85%, 42%, 0.275); color: hsla(166, 88%, 32%, 0.986);">
                                      <p class="card-text fw-medium">
                                        
                                        Davom ettirish  
                                        <i class="fa-solid fa-arrow-right"></i>
                                      </p> 
                                    </RouterLink>
                                  </div>

                                  <div v-if="item.status == null">
                                    <span class="fw-bold text-secondary" style="font-size: 14px;">
                                      <i class="fa-solid fa-lock"></i>
                                      Oldingi bo'lim yakunlanmagan
                                    </span>
                                    <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                      <div class="progress-bar bg-magenta" style="width: 0%; background-color: hsl(264, 88%, 55%);" ></div>
                                    </div>
                                  
                                  
                                    <RouterLink :to="`/module/lesson/${moduleIndex+1}`" aria-disabled="true" class="btn mt-4" style="background-color: hsla(0, 0%, 70%, 0.275); color: hsla(0, 0%, 56%, 0.986);">
                                      <p class="card-text fw-medium">
                                        <i class="fa-solid fa-lock"></i>
                                        Boshlash
                                      </p> 
                                    </RouterLink>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- <div class="col-md-12">
                          <div class="card mb-3">
                            <div class="row g-0">
                              <div class="col-md-4 d-flex flex-direction-column p-2">
                                <img src="@/assets/bolim/bolim-back-2.jpg" class="img-fluid rounded mx-auto" alt="..." style="width: 100%;">
                                <div class="d-flex w-100 justify-content-between align-items-center">
                                  <span class="p-1 mx-2 bg-warning-subtle text-warning fw-bold" style="font-size: 12px;" >2-Bo'lim</span>
                                  <span class="p-1 mx-2">
                                    <img src="@/assets/eye-regular.svg"  style="margin-right: 5px;"> 4521
                                  </span>
                                </div>
                              </div>
                              <div class="col-md-8 d-flex align-items-center">
                                <div class="card-body">
                                  <h3 class="card-title">Katta hovli</h3>
                                  <p class="card-text">A) Men va oilam | B) Uyimiz | D) O‘zbekistonda </p>
                                  
                                  <span class="fw-bold text-success" style="font-size: 14px;">
                                    <i class="fa-solid fa-check-double"></i>
                                    O'qib bo'lindi
                                  </span>
                                  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-magenta" style="width: 100%; background-color: hsl(264, 88%, 55%);" ></div>
                                  </div>
                                  
                                  <RouterLink to="/module/lesson/1" class="btn mt-4" style="background-color: hsla(264, 88%, 55%, 0.275); color: hsl(264, 81%, 43%);">
                                    <p class="card-text fw-medium">
                                      <i class="fa-solid fa-rotate-right"></i>
                                      Qaytadan o'qish
                                    </p> 
                                  </RouterLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-12">
                          <div class="card mb-3">
                            <div class="row g-0">
                              <div class="col-md-4 d-flex flex-direction-column p-2">
                                <img src="@/assets/bolim/bolim-back-3.jpg" class="img-fluid rounded mx-auto" alt="..." style="width: 100%;">
                                <div class="d-flex w-100 justify-content-between align-items-center">
                                  <span class="p-1 mx-2 bg-warning-subtle text-warning fw-bold" style="font-size: 12px;" >3-Bo'lim</span>
                                  <span class="p-1 mx-2">
                                    <img src="@/assets/eye-regular.svg"  style="margin-right: 5px;"> 4521
                                  </span>
                                </div>
                              </div>
                              <div class="col-md-8 d-flex align-items-center">
                                <div class="card-body">
                                  <h3 class="card-title">O‘lchov</h3>
                                  <p class="card-text">A) Qachon? | B) Qancha? | D) Qayerda? </p>
                                  
                                  <span class="fw-bold text-success" style="font-size: 14px;">
                                    <i class="fa-solid fa-check-double"></i>
                                    O'qib bo'lindi
                                  </span>
                                  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-magenta" style="width: 100%; background-color: hsl(264, 88%, 55%);" ></div>
                                  </div>
                                  
                                  <RouterLink to="/module/lesson/1" class="btn mt-4" style="background-color: hsla(264, 88%, 55%, 0.275); color: hsl(264, 81%, 43%);">
                                    <p class="card-text fw-medium">
                                      <i class="fa-solid fa-rotate-right"></i>
                                      Qaytadan o'qish
                                    </p> 
                                  </RouterLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-12">
                          <div class="card mb-3">
                            <div class="row g-0">
                              <div class="col-md-4 d-flex flex-direction-column p-2">
                                <img src="@/assets/bolim/bolim-back-4.jpg" class="img-fluid rounded mx-auto" alt="..." style="width: 100%;">
                                <div class="d-flex w-100 justify-content-between align-items-center">
                                  <span class="p-1 mx-2 bg-warning-subtle text-warning fw-bold" style="font-size: 12px;" >4-Bo'lim</span>
                                  <span class="p-1 mx-2">
                                    <img src="@/assets/eye-regular.svg"  style="margin-right: 5px;"> 4521
                                  </span>
                                </div>
                              </div>
                              <div class="col-md-8 d-flex align-items-center">
                                <div class="card-body">
                                  <h3 class="card-title">Geolokatsiya</h3>
                                  <p class="card-text">A) Mahallamizda | B) … qayerda? | C)	Rejalarimiz </p>
                                  
                                  <span class="fw-bold text-success" style="font-size: 14px;">
                                    <i class="fa-solid fa-check-double"></i>
                                    O'qib bo'lindi
                                  </span>
                                  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-magenta" style="width: 100%; background-color: hsl(264, 88%, 55%);" ></div>
                                  </div>
                                  
                                  <RouterLink to="/module/lesson/1" class="btn mt-4" style="background-color: hsla(264, 88%, 55%, 0.275); color: hsl(264, 81%, 43%);">
                                    <p class="card-text fw-medium">
                                      <i class="fa-solid fa-rotate-right"></i>
                                      Qaytadan o'qish
                                    </p> 
                                  </RouterLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>  

                        <div class="col-md-12">
                          <div class="card mb-3">
                            <div class="row g-0">
                              <div class="col-md-4 d-flex flex-direction-column p-2">
                                <img src="@/assets/bolim/bolim-back-5.jpg" class="img-fluid rounded mx-auto" alt="..." style="width: 100%;">
                                <div class="d-flex w-100 justify-content-between align-items-center">
                                  <span class="p-1 mx-2 bg-warning-subtle text-warning fw-bold" style="font-size: 12px;" >5-Bo'lim</span>
                                  <span class="p-1 mx-2">
                                    <img src="@/assets/eye-regular.svg"  style="margin-right: 5px;"> 4521
                                  </span>
                                </div>
                              </div>
                              <div class="col-md-8 d-flex align-items-center">
                                <div class="card-body">
                                  <h3 class="card-title">Kasblar</h3>
                                  <p class="card-text">A) Qanday kasblar bor? | B) Kim bo‘lsam ekan? | D) Qiziqishlarim </p>
                                  
                                  <span class="fw-bold text-success" style="font-size: 14px;">
                                    <i class="fa-solid fa-check-double"></i>
                                    O'qib bo'lindi
                                  </span>
                                  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-magenta" style="width: 100%; background-color: hsl(264, 88%, 55%);" ></div>
                                  </div>
                                  
                                  <RouterLink to="/module/lesson/1" class="btn mt-4" style="background-color: hsla(264, 88%, 55%, 0.275); color: hsl(264, 81%, 43%);">
                                    <p class="card-text fw-medium">
                                      <i class="fa-solid fa-rotate-right"></i>
                                      Qaytadan o'qish
                                    </p> 
                                  </RouterLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>  

                        <div class="col-md-12">
                          <div class="card mb-3">
                            <div class="row g-0">
                              <div class="col-md-4 d-flex flex-direction-column p-2">
                                <img src="@/assets/bolim/bolim-back-6.jpg" class="img-fluid rounded mx-auto" alt="..." style="width: 100%;">
                                <div class="d-flex w-100 justify-content-between align-items-center">
                                  <span class="p-1 mx-2 bg-warning-subtle text-warning fw-bold" style="font-size: 12px;" >6-Bo'lim</span>
                                  <span class="p-1 mx-2">
                                    <img src="@/assets/eye-regular.svg"  style="margin-right: 5px;"> 4521
                                  </span>
                                </div>
                              </div>
                              <div class="col-md-8 d-flex align-items-center">
                                <div class="card-body">
                                  <h3 class="card-title">Yo‘l bo‘lsin?</h3>
                                  <p class="card-text">A) Oq yo‘l! | B) Bekatda | D) Ob-havo</p>
                                  
                                  <span class="fw-bold text-success" style="font-size: 14px;">
                                    <i class="fa-solid fa-check-double"></i>
                                    O'qib bo'lindi
                                  </span>
                                  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-magenta" style="width: 100%; background-color: hsl(264, 88%, 55%);" ></div>
                                  </div>
                                  
                                  <RouterLink to="/module/lesson/1" class="btn mt-4" style="background-color: hsla(264, 88%, 55%, 0.275); color: hsl(264, 81%, 43%);">
                                    <p class="card-text fw-medium">
                                      <i class="fa-solid fa-rotate-right"></i>
                                      Qaytadan o'qish
                                    </p> 
                                  </RouterLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-12">
                          <div class="card mb-3">
                            <div class="row g-0">
                              <div class="col-md-4 d-flex flex-direction-column p-2">
                                <img src="@/assets/bolim/bolim-back-7.jpg" class="img-fluid rounded mx-auto" alt="..." style="width: 100%;">
                                <div class="d-flex w-100 justify-content-between align-items-center">
                                  <span class="p-1 mx-2 bg-warning-subtle text-warning fw-bold" style="font-size: 12px;" >7-Bo'lim</span>
                                  <span class="p-1 mx-2">
                                    <img src="@/assets/eye-regular.svg"  style="margin-right: 5px;"> 4521
                                  </span>
                                </div>
                              </div>
                              <div class="col-md-8 d-flex align-items-center">
                                <div class="card-body">
                                  <h3 class="card-title">Yangiliklar</h3>
                                  <p class="card-text">A) Telefonda | B) Internet xabarlari | D) Bir piyola choy ustida </p>
                                  
                                  <span class="fw-bold text-success" style="font-size: 14px;">
                                    <i class="fa-solid fa-check-double"></i>
                                    O'qib bo'lindi
                                  </span>
                                  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-magenta" style="width: 100%; background-color: hsl(264, 88%, 55%);" ></div>
                                  </div>
                                  
                                  <RouterLink to="/module/lesson/1" class="btn mt-4" style="background-color: hsla(264, 88%, 55%, 0.275); color: hsl(264, 81%, 43%);">
                                    <p class="card-text fw-medium">
                                      <i class="fa-solid fa-rotate-right"></i>
                                      Qaytadan o'qish
                                    </p> 
                                  </RouterLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-12">
                          <div class="card mb-3">
                            <div class="row g-0">
                              <div class="col-md-4 d-flex flex-direction-column p-2">
                                <img src="@/assets/bolim/bolim-back-8.jpg" class="img-fluid rounded mx-auto" alt="..." style="width: 100%;">
                                <div class="d-flex w-100 justify-content-between align-items-center">
                                  <span class="p-1 mx-2 bg-warning-subtle text-warning fw-bold" style="font-size: 12px;" >8-Bo'lim</span>
                                  <span class="p-1 mx-2">
                                    <img src="@/assets/eye-regular.svg"  style="margin-right: 5px;"> 4521
                                  </span>
                                </div>
                              </div>
                              <div class="col-md-8 d-flex align-items-center">
                                <div class="card-body">
                                  <h3 class="card-title">Dam olish</h3>
                                  <p class="card-text">A) Yakshanba | B) Ta‘til | D) Bayramlar </p>
                                  
                                  <span class="fw-bold text-success" style="font-size: 14px;">
                                    <i class="fa-solid fa-check-double"></i>
                                    O'qib bo'lindi
                                  </span>
                                  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-magenta" style="width: 100%; background-color: hsl(264, 88%, 55%);" ></div>
                                  </div>
                                  
                                  <RouterLink to="/module/lesson/1" class="btn mt-4" style="background-color: hsla(264, 88%, 55%, 0.275); color: hsl(264, 81%, 43%);">
                                    <p class="card-text fw-medium">
                                      <i class="fa-solid fa-rotate-right"></i>
                                      Qaytadan o'qish
                                    </p> 
                                  </RouterLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> -->
                        
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
import { mapGetters } from 'vuex';
import { mapState } from 'vuex';
import {gettersTypes} from '@/modules/types'
import { RouterLink } from 'vue-router'
import Footer from '@/components/layout/Footer.vue';
import { filePath } from '@/constants'
import { getItem } from "@/helpers/persistaneStorage";

export default {
  components: {Footer },
  data(){
    return {
      filePath: filePath,
      progress_value: {}
    }
  },
  created(){
    this.progress_value = {
      m1: getItem('progross_modul1')?getItem('progross_modul1'):0,
      m2: getItem('progross_modul2')?getItem('progross_modul2'):0,
      m3: getItem('progross_modul3')?getItem('progross_modul3'):0,
    };
  },
  mounted(){
    this.$store.dispatch('getModules');
    this.$store.dispatch('getStudentModules');
  },
  computed:{
      ...mapGetters({
          modules: gettersTypes.modules,
          studentModules: gettersTypes.student_modules,
          isLoggedIn: gettersTypes.isLoggedIn,
          currentUser: gettersTypes.currentUser
      }),
      ...mapState({
            isLoading: (state) => state.module.isLoading,
      })
  },
  methods:{
    async calculateProgress(module_id){
      await this.$store.dispatch('getStudentUnits', module_id);
    },

    logout(){
        this.$store.dispatch('logout')
        this.$router.push('/')
    }
  }
}

</script>

<style scoped>
@keyframes slidedown-icon {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(20px);
    }

    100% {
        transform: translateY(0);
    }
}

.slidedown-icon {
    animation: slidedown-icon;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}

.box {
    background-image: radial-gradient(var(--primary-300), var(--primary-600));
    border-radius: 50% !important;
    color: var(--primary-color-text);
}





.profile-head {
    transform: translateY(5rem)
}

.cover {
    /* background-image: url('../../assets/profile-back.png'); */
    background-image: url('../../assets/9264122.jpg');
    background-size: auto;
    background-repeat: no-repeat;
    background-position-x: center;
}

.bg-naqsh {
  background-image: url('../../assets/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100%;
}


@media (max-width: 992px) {
  .nav-menu {
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

  .btn-group {
    margin-bottom: 15px;
  }
}

@media (max-width: 768px) {
  .kirish-button a {
    /* flex-direction: column; */
    font-size: 8px;
  }

}

.dropdown-menu .dropdown-item {
  color: white;
}

.dropdown-menu .dropdown-item:hover {
  background: #0a58ca;
  color: white;
}

.innovation {
  color: #EED468;
  border-bottom: 2px solid #EED468;
}


.header-image-container {
  z-index: -100;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-image: url('../../assets/image1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100%;
}

#header-bg {
  height: 50vh;
  background-color: rgb(0 0 0 / 70%);
}</style>
