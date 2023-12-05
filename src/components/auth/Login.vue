<template>
    <!-- Section: Design Block -->
    <section class="">
      <!-- Jumbotron -->
      <div class="text-center text-lg-start bg-naqsh" style="min-height: 100vh">
        <div class="container-fluid d-inline-block" style="height: 100vh!important;">
          <div class="row align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0 d-none d-md-block">
                <div class="col-lg-6 mb-5">
                  <img src="@/assets/login-in-background.png" alt="" style="width: 100vh;">
                </div>
            </div>
    
            <div class="col-lg-6 col-12 align-self-center mb-5 mb-lg-0" style="padding: 0;">
              <div class="card w-100 " style="height: 100vh!important;  border-radius: 0; border: 0;">
                <div class="card-body py-5 px-md-5 d-flex align-items-center">
                  <form class="col-md-6 col-12">

                    <div class="col-md-12 mb-4">
                        <div class="form-outline">
                            <h2 class="fw-bold">Tizimga kirish</h2> 
                            <div class="text-center text-lg-start">
                              <p class="fw-medium">
                                Hali ro‘yxatdan o‘tmadingizmi? Unda <RouterLink to="/register" class="link-underline-light"> ro‘yxatdan o‘ting.</RouterLink>
                              </p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Email input -->
                    <div class="form-outline mt-2">
                        <label class="form-label fw-medium" for="form3Example7">Elektron pochta manzili (login) *</label>
                        <input type="email" v-model="email" id="form3Example7" class="form-control" />
                        <ValidationError v-if="validationErrors" :item="'email'" :errors="validationErrors" placeholder="Elektron pochta manzili kiriting" />
                    </div>

                    <!-- Email input -->
                    <div class="form-outline mt-2">
                        <label class="form-label fw-medium" for="form3Example8">Parol *</label>
                        <input type="password" v-model="password" id="form3Example8" class="form-control" />
                        <ValidationError v-if="validationErrors" :item="'password'" :errors="validationErrors" placeholder="Parolni kiriting" />
                    </div>
    
                    <!-- Checkbox -->
                    <div class="form-check d-flex mb-4 mt-2">
                      <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                      <label class="form-check-label" for="form2Example33">
                        Eslab qolish
                      </label>
                    </div>
    
                    <!-- Submit button -->
                    
                    <button type="button" @click="loginHandler" class="btn btn-primary btn-block mb-4 px-5 w-100" :disabled="isLoading">
                        <span v-if="isLoading" class="spinner-border spinner-border-sm mx-2" aria-hidden="true"></span> 
                        Kirish 
                    </button>

                    
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
import { RouterLink } from 'vue-router'
import ValidationError from './../validationerror.vue';
import { mapState } from 'vuex';
import {gettersTypes} from '@/modules/types'

 export default {
    name: 'Login',
    components:{ValidationError},
    data() {
        return {
            email: null,
            password: null,
        };
    },
    created(){
        if(this.isLoggedIn){
            return this.$router.push({name: "home"})
        }
    },
    computed:{
        ...mapState({
            isLoggedIn: (state) => state.auth.isLoggedIn,
            validationErrors: (state) => state.auth.errors,
            isLoading: (state) => state.auth.isLoading
        })
    },
    methods: {
        loginHandler(e){
            e.preventDefault();

            const user = {
                email: this.email,
                password: this.password
            }

            this.$store.dispatch('login', user)
            .then(data => {
                this.$router.push({name:"profile"})
            })
            .catch(data => {
                console.log(data.errors);
            })
        }
    }
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