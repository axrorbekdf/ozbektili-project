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
                  <div class="profile mr-3 ">
                    <img :src="`https://ui-avatars.com/api/?background=random&name=${currentUser.name}`" alt="..." width="100" class="rounded mb-2">
                  </div>
                  <div class="media-body mb-5 text-white ">
                    <h4 class="mt-0 mb-0">{{ currentUser.name }} {{ currentUser.surname }}</h4>
                    <p class="small mb-4"> <i class="fas fa-map-marker-alt mr-2"></i> Toshkent, {{currentUser.type}}</p>
                  </div>
                </div>
                
              </div>
                
                <div class="row">

                  <div class="col-md-3 col-12">
                    <div class="flex-shrink-0 p-3">
                      <RouterLink to="/profile" class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
                          <span class="fs-5 fw-semibold">Asosiy </span>
                      </RouterLink>
                      <ul class="list-unstyled ps-0">
                        <li class="mb-1">
                          <button @click="currentTab = 'Tab1View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab1View'?'active':'']">
                            <span v-if="chechTabIndex('Tab1View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span> 
                            Men va oilam.
                          </button>
                        </li>
                        <li class="mb-1">
                          <button @click="currentTab = 'Tab2View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab2View'?'active':'']">
                            <span v-if="chechTabIndex('Tab2View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            O'qing.
                          </button>
                        </li>
                        <li class="mb-1">
                          <button @click="currentTab = 'Tab3View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab3View'?'active':'']">
                            <span v-if="chechTabIndex('Tab3View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Grammatika.
                          </button>
                        </li>
                        <li class="mb-1">
                          <button @click="currentTab = 'Tab4View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab4View'?'active':'']">
                            <span v-if="chechTabIndex('Tab4View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            O'ylang va toping. Yozing.
                          </button>
                        </li>
                        <li class="mb-1">
                          <button @click="currentTab = 'Tab5View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab5View'?'active':'']">
                            <span v-if="chechTabIndex('Tab5View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Diqqat qiling.
                          </button>
                        </li>
                        <li class="mb-1">
                          <button @click="currentTab = 'Tab6View'" class="btn btn-toggle d-inline-flex align-items-start fw-medium" :class="[currentTab == 'Tab6View'?'active':'']">
                            <span v-if="chechTabIndex('Tab6View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Bo'sh joylarni ismlar bilan to'ldiring.
                          </button>
                        </li>
                        <li class="mb-1">
                          <button @click="currentTab = 'Tab7View'" class="btn btn-toggle text-start d-inline-flex align-items-start fw-medium" :class="[currentTab == 'Tab7View'?'active':'']">
                            <span v-if="chechTabIndex('Tab7View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            O'ylang va toping. Yozing.
                          </button>
                        </li>
                        <li class="mb-1">
                          <button @click="currentTab = 'Tab8View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab8View'?'active':'']">
                            <span v-if="chechTabIndex('Tab8View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Sonlar.
                          </button>
                        </li>
                        
                        <li class="mb-1">
                          <button @click="currentTab = 'Tab9View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab9View'?'active':'']">
                            <span v-if="chechTabIndex('Tab9View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            O'ylang va toping. Yozing.
                          </button>
                        </li>
                        <li class="mb-1">
                          <button @click="currentTab = 'Tab10View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab10View'?'active':'']">
                            <span v-if="chechTabIndex('Tab10View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            O'ylang va toping.
                          </button>
                        </li>
                        <li class="mb-1">
                          <button @click="currentTab = 'Tab11View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab11View'?'active':'']">
                            <span v-if="chechTabIndex('Tab11View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Tinglang. O'ylang va toping.
                          </button>
                        </li>
                        <li class="mb-1">
                          <button @click="currentTab = 'Tab12View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab12View'?'active':'']">
                            <span v-if="chechTabIndex('Tab12View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Lug'at.
                          </button>
                        </li>
                        <li class="mb-1">
                          <button @click="currentTab = 'Tab13View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab13View'?'active':'']">
                            <span v-if="chechTabIndex('Tab13View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            O'qing. O'ylang va toping.
                          </button>
                        </li>
                        <!-- <li class="mb-1">
                          <button @click="currentTab = 'Tab14View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab14View'?'active':'']">
                            <span v-if="chechTabIndex('Tab14View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            O'ylang va Yozing!
                          </button>
                        </li>
                        <li class="mb-1">
                          <button @click="currentTab = 'Tab15View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab15View'?'active':'']">
                            <span v-if="chechTabIndex('Tab15View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Diqqat qiling
                          </button>
                        </li>
                        <li class="mb-1">
                          <button @click="currentTab = 'Tab16View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab16View'?'active':'']">
                            <span v-if="chechTabIndex('Tab16View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Tinglang! O'qing
                          </button>
                        </li>
                        
                        <li class="mb-1">
                          <button @click="currentTab = 'Tab17View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab17View'?'active':'']">
                            <span v-if="chechTabIndex('Tab17View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Savallarga javob bering
                          </button>
                        </li> -->


                      </ul>
                    </div>
                  </div>
  
                  <div class="col-md-9 col-12">
                  
                    <component :is="currentTab" @chengeTabView="chengeTabViewHandler"></component>
                    
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
import {gettersTypes} from '@/modules/types'

import { RouterLink } from 'vue-router'
import Footer from '@/components/layout/Footer.vue';
import Tab1View from './Tab1View.vue';
import Tab2View from './Tab2View.vue';
import Tab3View from './Tab3View.vue';
import Tab4View from './Tab4View.vue';
import Tab5View from './Tab5View.vue';
import Tab6View from './Tab6View.vue';
import Tab7View from './Tab7View.vue';
import Tab8View from './Tab8View.vue';
import Tab9View from './Tab9View.vue';
import Tab10View from './Tab10View.vue';
import Tab11View from './Tab11View.vue';
import Tab12View from './Tab12View.vue';
import Tab13View from './Tab13View.vue';
import Tab14View from './Tab14View.vue';
import Tab15View from './Tab15View.vue';
import Tab16View from './Tab16View.vue';
import Tab17View from './Tab17View.vue';
  
  export default {
    components: { 
      Footer,
      Tab1View,
      Tab2View,
      Tab3View,
      Tab4View,
      Tab5View,
      Tab6View,
      Tab7View,
      Tab8View,
      Tab9View,
      Tab10View,
      Tab11View,
      Tab12View,
      Tab13View,
      Tab14View,
      Tab15View,
      Tab16View,
      Tab17View,
    },
    data() {
      return {
        currentTab: 'Tab1View',
        currentTabArray: [],
      }
    },
    mounted(){
      const module_id = this.$route.params.id;
      this.$store.dispatch('getStudentUnits', module_id);
    },
    computed:{
        ...mapGetters({
            isLoggedIn: gettersTypes.isLoggedIn,
            currentUser: gettersTypes.currentUser
        }),
    },
    methods:{
      chengeTabViewHandler(tab){
        this.currentTab = tab;
        

        if(this.currentTabArray.indexOf(tab) === -1) {
          this.currentTabArray.push(tab);
        }
      },

      chechTabIndex(tab){
        return !(this.currentTabArray.indexOf(tab) === -1);
      }
    }
  }
  
  </script>
  
  <style scoped>

  td{
    text-align:center;
    vertical-align:center
  }
  .profile-head {
      transform: translateY(5rem)
  }
  
  /* .cover {
      background-image: url(https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80);
      background-size: cover;
      background-repeat: no-repeat
  } */
  
  .active{
    color:rgb(35, 35, 240);
    border: none;
  }

  .cover {
    /* background-image: linear-gradient(to bottom, #062A49, #062A49); */
    background-image: url('../../../assets/profile-back.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
}
  .bg-naqsh-none {
    background-image: url('../../../assets/background.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 100%;
  }

  /* Style the tab */
.tab {
  float: left;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  width: 20%;
  height: 300px; 
}

/* Style the buttons inside the tab */
.tab button {
  display: block;
  background-color: inherit;
  color: black;
  padding: 10px 16px;
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current "tab button" class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  float: left;
  padding: 0px 12px;
  border: 1px solid #ccc;
  width: 70%;
  border-left: none;
  height: 300px;
}
  
  </style>
  