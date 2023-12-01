<template>
    <div class="w-100">
        <h2 class="fw-bold">Ro'yhatdan o'tish</h2> 
        
        <FormWizard @on-complete="submitHandler" color="#307AD5" nextButtonText="Keyingi" backButtonText="Oldingi" finishButtonText="Ro'yhatdan o'tish">
            <TabContent 
            title="Umumiy ma'lumotlar" 
            customIcon="<i class='fa-regular fa-user'></i>">

                <div style="padding: 2vh 0;">
                    <div class="row">
                    <div class="col-md-6">
                        <div class="form-outline mt-2">
                            <label class="form-label fw-medium" for="form3Example1">Familiyasi *</label>
                            <input v-model="surname" type="text" id="form3Example1" class="form-control" />
                        
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-outline mt-2">
                            <label class="form-label fw-medium" for="form3Example2">Ismi *</label>
                            <input v-model="name" type="text" id="form3Example2" class="form-control" />
                        
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-12">
                        <div class="form-outline mt-2">
                            <label class="form-label fw-medium" for="form3Example3">Otasining ismi</label>
                            <input v-model="lastname" type="text" id="form3Example3" class="form-control" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-outline mt-3">
                            <label class="form-label fw-medium">Jinsi *</label><br>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" selected id="inlineRadio1" value="option1">
                                <label class="form-check-label" for="inlineRadio1">Erkak</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                                <label class="form-check-label" for="inlineRadio2">Ayol</label>
                            </div>
                        
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="form-outline mt-3">
                            <label class="form-label fw-medium" for="form3Example4">Tugʼilgan sanasi *</label>
                            <input v-model="date_of_birth" type="date" id="form3Example4" defaultValue="12.12.1212" class="form-control" />
                        
                        </div>
                    </div>
                    </div>
                </div>
            </TabContent>
            <TabContent
            title="Qo'shimcha ma'lumotlar"  
            customIcon="<i class='fa-solid fa-lightbulb'></i>" > 
                <div style="padding: 2vh 0;">
                    <div class="row">
                        
                        <div class="col-md-6">
                            <label class="form-label fw-medium" for="form3Example5">Bandlik maqomi</label><br>
                            <select class="form-select" aria-label="Default select example" id="form3Example5">
                                <option selected>o'quvchi</option>
                                <option value="1">talaba</option>
                                <option value="2">ishchi</option>
                                <option value="3">ishsiz</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label fw-medium" for="form3Example6">Xorijiy davlat *</label><br>
                            <select class="form-select" aria-label="Default select example" id="form3Example6">
                                <option selected>Davlatni tanlang</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    


                    </div>
                </div>
            </TabContent>
            <TabContent title="Login va parol" customIcon="<i class='fa-solid fa-passport'></i>">
                <div style="padding: 2vh 0;">
                    <!-- Email input -->
                    <div class="form-outline mt-2">
                        <label class="form-label fw-medium" for="form3Example7">Elektron pochta manzili (login) *</label>
                        <input v-model="email" type="email" id="form3Example7" class="form-control" />
                    </div>

                    <!-- Email input -->
                    <div class="form-outline mt-2">
                        <label class="form-label fw-medium" for="form3Example8">Parol *</label>
                        <input v-model="password" type="password" id="form3Example8" class="form-control" />
                    </div>

                    <!-- Email input -->
                    <div class="form-outline mt-2">
                        <label class="form-label fw-medium" for="form3Example9">Qaytadan parol *</label>
                        <input  type="password" id="form3Example9" class="form-control" />
                    </div>

                    <ReCaptcha  class="mt-4"/>
                </div>
            </TabContent>

        </FormWizard>
    </div>
</template>
<script>
import {FormWizard, TabContent} from 'vue3-form-wizard'
import 'vue3-form-wizard/dist/style.css'
import { mapGetters } from 'vuex';
import {gettersTypes} from '@/modules/types'

 export default {
    name: "MyFormWizard",
    components: {
        FormWizard,
        TabContent
    },
    data() {
            return {
                name: '',
                surname: '',
                lastname: '',
                date_of_birth: '',
                gender: 'f',
                employment_status: 1,
                country_id: 1,
                email: '',
                password: '',

            }
    },
    created(){
        if(this.isLoggedIn){
            return this.$router.push('/')
        }
    },
    computed:{
        // validationErrors(){
        //     return this.$store.state.auth.errors;
        // }
        ...mapGetters({
            isLoggedIn: gettersTypes.isLoggedIn,
            validationErrors: gettersTypes.validationError
        })
    },
    methods: {
        submitHandler(e){
            // e.preventDefault();
            
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                password: this.password,
                date_of_birth: this.date_of_birth,
                country_id: this.country_id,
                gender: this.gender,
                employment_status: this.employment_status
            }

            this.$store.dispatch('register', data)
            .then(data => {
                this.$router.push({name: 'home'})
            })
            .catch(data => {
                console.log(data.errors)
            });
        }
    },
 }
</script>

<style>

</style>