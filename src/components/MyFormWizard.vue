<template>
    <div class="w-100">
        <h2>Ro'yhatdan o'tish</h2> 
        
        <FormWizard @on-complete="onComplete" color="#307AD5" nextButtonText="Keyingi" backButtonText="Oldingi" finishButtonText="Ro'yhatdan o'tish">
            <TabContent 
            title="Foydalanuvchi" 
            customIcon="<i class='fa-regular fa-user'></i>">

                <div style="padding: 2vh 0;">
                    <div class="row">
                    <div class="col-md-6">
                        <div class="form-outline">
                            <label class="form-label" for="form3Example1">Familiyasi *</label>
                        <input type="text" id="form3Example1" class="form-control" />
                        
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-outline">
                            <label class="form-label" for="form3Example2">Ismi *</label>
                        <input type="text" id="form3Example2" class="form-control" />
                        
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-8">
                        <div class="form-outline">
                            <label class="form-label" for="form3Example3">Otasining ismi</label>
                        <input type="text" id="form3Example3" class="form-control" />
                        
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-outline">
                            <label class="form-label" for="form3Example4">Tugʼilgan sanasi *</label>
                        <input type="date" id="form3Example4" defaultValue="12.12.1212" class="form-control" />
                        
                        </div>
                    </div>
                    </div>
                </div>
            </TabContent>
            <TabContent
            title="Ma'lumoti"  
            customIcon="<i class='fa-solid fa-lightbulb'></i>" > 
                <div style="padding: 2vh 0;">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-outline">
                                <label class="form-label">Jinsi *</label><br>
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
                        <div class="col-md-4">
                            <label class="form-label" for="form3Example5">Bandlik maqomi</label><br>
                            <select class="form-select" aria-label="Default select example" id="form3Example5">
                                <option selected>o'quvchi</option>
                                <option value="1">talaba</option>
                                <option value="2">ishchi</option>
                                <option value="3">ishsiz</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label class="form-label" for="form3Example6">Xorijiy davlat *</label><br>
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
            <TabContent title="Platforma ma'lumoti" customIcon="<i class='fa-solid fa-passport'></i>">
                <div style="padding: 2vh 0;">
                    <!-- Email input -->
                    <div class="form-outline">
                        <label class="form-label" for="form3Example7">Elektron pochta manzili (login) *</label>
                    <input type="email" id="form3Example7" class="form-control" />
                    </div>

                    <!-- Email input -->
                    <div class="form-outline">
                        <label class="form-label" for="form3Example8">Parol *</label>
                    <input type="text" id="form3Example8" class="form-control" />
                    </div>

                    <!-- Email input -->
                    <div class="form-outline">
                        <label class="form-label" for="form3Example9">Qaytadan parol *</label>
                    <input type="text" id="form3Example9" class="form-control" />
                    </div>
                </div>
            </TabContent>
            <TabContent title="Tasdiqlash" customIcon="<i class='fa-solid fa-check'></i>">
                <div class="form-check mb-4 mt-2" style="padding-left: 0; padding: 2vh 0;">
                  <ReCaptcha />
                 </div>
            </TabContent>
        </FormWizard>
    </div>
</template>
<script>
import {FormWizard, TabContent} from 'vue3-form-wizard'
import 'vue3-form-wizard/dist/style.css'
 export default {
    name: "MyFormWizard",
    components: {
        FormWizard,
        TabContent
    },
    data() {
            return {
                
            }
    },
    methods: {
        onComplete() {
            alert("Ok, Saqlandi!");
        },
    },
 }
</script>
<style>
    
</style>