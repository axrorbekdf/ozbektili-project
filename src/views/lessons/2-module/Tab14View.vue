<template>
    <div class="container">
        <div class="row mt-5">

        <h3 class="fw-bold text-primary my-3">Lug‘at.</h3>

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab13View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab15View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>


        <div class="col-6 my-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
            <img src="@/assets/2bolim/images/211.jpg" class="img-fluid" alt="..." style="width: 350px;">
            <h5 class="btn btn-primary my-2">
                mehmonxona
            </h5>
        </div>

        <div class="col-6 my-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
            <img src="@/assets/2bolim/images/212.png" class="img-fluid" alt="..." style="width: 350px;">
            <h5 class="btn btn-primary my-2">
                bolalar xonasi
            </h5>
        </div>

        <div class="col-6 my-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
            <img src="@/assets/2bolim/images/213.jpg" class="img-fluid" alt="..." style="width: 350px;">
            <h5 class="btn btn-primary my-2">
                yotoqxona
            </h5>
        </div>

        <div class="col-6 my-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
            <img src="@/assets/2bolim/images/214.jpg" class="img-fluid" alt="..." style="width: 350px;">
            <h5 class="btn btn-primary my-2">
                oshxona
            </h5>
        </div>

        

        <!-- <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto py-3" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/2dars/ppt/fransiya.jpg" class="card-img-top mx-auto" alt="..." style="width: 130px">
                <div class="card-body text-center">
                    <div class="card-title d-flex justify-content-center">
                        Biz  <MashqWord :id="50" :current_latter="'fransiya'" :incomplete="''" style="margin: -0.11rem 0 -0.11rem 8px; width: 36%;"/> dan 
                    </div>
                </div>
            </div>
        </div> -->

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab13View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab15View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>

        </div>
    </div>
</template>
<script>
import MashqWord from '../../../components/MashqWord.vue'
export default {
    components:{MashqWord},
    methods:{
        chengeTabView(tab){
            this.$emit('chengeTabView', tab);
        }
    }
}
</script>
<style>
    
</style>