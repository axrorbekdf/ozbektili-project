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
                          <span class="fs-5 fw-semibold">Asosiy</span>
                      </RouterLink>
                      <ul class="list-unstyled ps-0">
                        <li class="mb-1">
                          <button :disabled="!unitStatusTabs.Tab1View" @click="currentTab = 'Tab1View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab.includes('Tab1View')?'active':'']" style="border: none;">
                            <span v-if="chechTabIndex('Tab1View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span> 
                            Alifbo.
                          </button>
                        </li>
                        <li class="mb-1">
                          <button :disabled="!unitStatusTabs.Tab2View" @click="currentTab = 'Tab2View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab2View'?'active':'']" style="border: none;">
                            <span v-if="chechTabIndex('Tab2View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Diqqat qiling!
                          </button>
                        </li>
                        <li class="mb-1">
                          <button :disabled="!unitStatusTabs.Tab3View" @click="currentTab = 'Tab3View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab3View'?'active':'']" style="border: none;">
                            <span v-if="chechTabIndex('Tab3View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Yozing.
                          </button>
                        </li>
                        <li class="mb-1">
                          <button :disabled="!unitStatusTabs.Tab4View" @click="currentTab = 'Tab4View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab4View'?'active':'']" style="border: none;">
                            <span v-if="chechTabIndex('Tab4View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            So'zlarni toping va yozing
                          </button>
                        </li>
                        <li class="mb-1">
                          <button :disabled="!unitStatusTabs.Tab5View" @click="currentTab = 'Tab5View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab5View'?'active':'']" style="border: none;">
                            <span v-if="chechTabIndex('Tab5View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Kelishik olmoshlari
                          </button>
                        </li>
                        <li class="mb-1">
                          <button :disabled="!unitStatusTabs.Tab6View" @click="currentTab = 'Tab6View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab6View'?'active':'']" style="border: none;">
                            <span v-if="chechTabIndex('Tab6View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Mashqlar.
                          </button>
                        </li>
                        <li class="mb-1">
                          <button :disabled="!unitStatusTabs.Tab7View" @click="currentTab = 'Tab7View'" class="btn btn-toggle text-start d-inline-flex align-items-start fw-medium" :class="[currentTab == 'Tab7View'?'active':'']" style="border: none;">
                            <span v-if="chechTabIndex('Tab7View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Mashqlar. O'ylang va Yozing. Salomlashish!
                          </button>
                        </li>
                        <li class="mb-1">
                          <button :disabled="!unitStatusTabs.Tab8View" @click="currentTab = 'Tab8View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab8View'?'active':'']" style="border: none;">
                            <span v-if="chechTabIndex('Tab8View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Tinglang, Takrorlang!
                          </button>
                        </li>
                        
                        <li class="mb-1">
                          <button :disabled="!unitStatusTabs.Tab9View" @click="currentTab = 'Tab9View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab9View'?'active':'']" style="border: none;">
                            <span v-if="chechTabIndex('Tab9View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Mashqlar.
                          </button>
                        </li>
                        <li class="mb-1">
                          <button :disabled="!unitStatusTabs.Tab10View" @click="currentTab = 'Tab10View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab10View'?'active':'']" style="border: none;">
                            <span v-if="chechTabIndex('Tab10View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Rasmli lug'at.
                          </button>
                        </li>
                        <li class="mb-1">
                          <button :disabled="!unitStatusTabs.Tab11View" @click="currentTab = 'Tab11View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab11View'?'active':'']" style="border: none;">
                            <span v-if="chechTabIndex('Tab11View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Grammatika.
                          </button>
                        </li>
                        <li class="mb-1">
                          <button :disabled="!unitStatusTabs.Tab12View" @click="currentTab = 'Tab12View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab12View'?'active':'']" style="border: none;">
                            <span v-if="chechTabIndex('Tab12View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Mashqlar.
                          </button>
                        </li>
                        <li class="mb-1">
                          <button :disabled="!unitStatusTabs.Tab13View" @click="currentTab = 'Tab13View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab13View'?'active':'']" style="border: none;">
                            <span v-if="chechTabIndex('Tab13View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Grammatika.
                          </button>
                        </li>
                        <li class="mb-1">
                          <button :disabled="!unitStatusTabs.Tab14View" @click="currentTab = 'Tab14View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab14View'?'active':'']" style="border: none;">
                            <span v-if="chechTabIndex('Tab14View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            O'ylang va Yozing!
                          </button>
                        </li>
                        <li class="mb-1">
                          <button :disabled="!unitStatusTabs.Tab15View" @click="currentTab = 'Tab15View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab15View'?'active':'']" style="border: none;">
                            <span v-if="chechTabIndex('Tab15View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Diqqat qiling!
                          </button>
                        </li>
                        <li class="mb-1">
                          <button :disabled="!unitStatusTabs.Tab16View" @click="currentTab = 'Tab16View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab16View'?'active':'']" style="border: none;">
                            <span v-if="chechTabIndex('Tab16View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Tinglang! O'qing!
                          </button>
                        </li>
                        
                        <li class="mb-1">
                          <button :disabled="!unitStatusTabs.Tab17View" @click="currentTab = 'Tab17View'" class="btn btn-toggle d-inline-flex align-items-center fw-medium" :class="[currentTab == 'Tab17View'?'active':'']" style="border: none;">
                            <span v-if="chechTabIndex('Tab17View')" class="badge rounded-pill text-bg-success" style="margin-right: 10px;">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Savollarga javob bering.
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
  
                  <div class="col-md-9 col-12">

                    <component :is="currentTab" @chengeTabView="chengeTabViewHandler" :error="tabError"></component>
                    
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
import { setItem, getItem, removeItem } from "@/helpers/persistaneStorage";
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
      // 1-u
      Tab1View,
      Tab2View,
      Tab3View,
      Tab4View,
      // 2-u
      Tab5View,
      Tab6View,
      Tab7View,
      Tab8View,
      // 3-u
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
        unitStatusTabs: {},
        tabError: '',
      }
    },
    created(){
      this.currentTabArray = getItem('user_step')?getItem('user_step'):[];
      this.generalHandler();
    },
    computed:{
        ...mapGetters({
            isLoggedIn: gettersTypes.isLoggedIn,
            currentUser: gettersTypes.currentUser,
            userUnits: gettersTypes.student_units
        }),
    },
    methods:{
      chengeTabViewHandler(tab){
        this.generalHandler();

        if(!this.unitStatusTabs[tab]){
          this.tabError = "Yuqoridagi topshiriqlar to'liq bajarilmagan! To'liq bajaring.";
          return false;
        }

        if(this.currentTabArray.indexOf(this.currentTab) === -1) {
          this.currentTabArray.push(this.currentTab);
        }
        this.currentTab = tab;
        setItem("user_step", this.currentTabArray); 
      },

      chechTabIndex(tab = 'Tab1View'){
        // if(Array.isArray(this.currentTabArray)){
          return !(this.currentTabArray.indexOf(tab) === -1);
        // }
        // return false;
      },

      generalHandler(){
        const module_id = this.$route.params.id;
        this.$store.dispatch('getStudentUnits', module_id)
        .then(response => {
          let data = response.data;
          let isAccess = {};
          for(let i = 0; i < data.length; i++){
            if(data[i].status == 0){
              isAccess[`unit${data[i].id}`] = true; 
            }
            if(data[i].status == 1){
              isAccess[`unit${data[i].id}`] = true; 
            }
            if(data[i].status == -1){
              isAccess[`unit${data[i].id}`] = false; 
            }
          }

          this.unitStatusTabs = {
            Tab1View: isAccess.unit1,
            Tab2View: isAccess.unit1,
            Tab3View: isAccess.unit1,
            Tab4View: isAccess.unit1,
            Tab5View: isAccess.unit2,
            Tab6View: isAccess.unit2,
            Tab7View: isAccess.unit2,
            Tab8View: isAccess.unit2,
            Tab9View: isAccess.unit3,
            Tab10View: isAccess.unit3,
            Tab11View: isAccess.unit3,
            Tab12View: isAccess.unit3,
            Tab13View: isAccess.unit3,
            Tab14View: isAccess.unit3,
            Tab15View: isAccess.unit3,
            Tab16View: isAccess.unit3,
            Tab17View: isAccess.unit3,
          };
        });
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
  