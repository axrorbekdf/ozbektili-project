<template>
    <div class="container">
        <div class="row mt-5">

        <h3 class="fw-bold text-primary my-3">O'ylang va Yozing! </h3>

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab13View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab15View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>

        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto py-3" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/1bolim/images/281.png" class="card-img-top mx-auto" alt="..." style="width: 130px">
                <div class="card-body text-center">
                    <div class="card-title d-flex justify-content-center">
                        Biz  <MashqWord :id="50" :current_latter="'fransiya'" :incomplete="''" style="margin: -0.11rem 0 -0.11rem 8px; width: 36%;"/> dan 
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto py-3" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/1bolim/images/282.png" class="card-img-top mx-auto" alt="..." style="width: 140px">
                <div class="card-body text-center">
                    <div class="card-title d-flex justify-content-center">
                        Yujin <MashqWord :id="51" :current_latter="'korea'" :incomplete="''" style="margin: -0.11rem 0 -0.11rem 8px; width: 26%;"/> lik 
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto py-3" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/1bolim/images/283.png" class="card-img-top mx-auto" alt="..." style="width: 120px">
                <div class="card-body text-center">
                    <div class="card-title d-flex justify-content-center">
                        Ular <MashqWord :id="52" :current_latter="'misr'" :incomplete="''" style="margin: -0.18rem 0 -0.11rem 8px; width: 21%;"/>lik 
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12 d-md-block d-none"></div>
        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto py-3" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/1bolim/images/284.png" class="card-img-top mx-auto" alt="..." style="width: 140px">
                <div class="card-body text-center">
                    <div class="card-title d-flex justify-content-center">
                        Sen <MashqWord :id="53" :current_latter="'hindiston'" :incomplete="''" style="margin: -0.11rem 0 -0.11rem 8px; width: 45%;"/> dan  
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto py-3" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/1bolim/images/285.png" class="card-img-top mx-auto" alt="..." style="width: 150px">
                <div class="card-body text-center">
                    <div class="card-title d-flex justify-content-center">
                        Anna <MashqWord :id="54" :current_latter="'rossiya'" :incomplete="''" style="margin: -0.11rem 0 -0.11rem 8px; width: 32%;"/>lik
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto py-3" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/1bolim/images/286.png" class="card-img-top mx-auto" alt="..." style="width: 120px">
                <div class="card-body text-center">
                    <div class="card-title d-flex justify-content-center">
                        Aleks  <MashqWord :id="55" :current_latter="'amerika'" :incomplete="''" style="margin: -0.11rem 0 -0.11rem 8px; width: 39%;"/> dan
                    </div>
                </div>
            </div>
        </div>

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