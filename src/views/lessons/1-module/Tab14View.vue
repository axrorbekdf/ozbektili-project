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
            <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/ikkidost.png" class="card-img-top mx-auto" alt="..." style="width: 120px">
                <div class="card-body text-center">
                    <p class="card-title">Biz  ______ dan <i class="fa-solid fa-pencil"></i></p>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/ikkidost.png" class="card-img-top mx-auto" alt="..." style="width: 120px">
                <div class="card-body text-center">
                    <p class="card-title">Yujin ____ lik <i class="fa-solid fa-pencil"></i></p>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/ikkidost.png" class="card-img-top mx-auto" alt="..." style="width: 120px">
                <div class="card-body text-center">
                    <p class="card-title">Ular ________ lik <i class="fa-solid fa-pencil"></i></p>
                </div>
            </div>
        </div>
        <div class="col-md-12 d-md-block d-none"></div>
        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/ikkidost.png" class="card-img-top mx-auto" alt="..." style="width: 120px">
                <div class="card-body text-center">
                    <p class="card-title">Siz Sen ______ dan  <i class="fa-solid fa-pencil"></i></p>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/ikkidost.png" class="card-img-top mx-auto" alt="..." style="width: 120px">
                <div class="card-body text-center">
                    <p class="card-title">Anna ________ lik<i class="fa-solid fa-pencil"></i></p>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/ikkidost.png" class="card-img-top mx-auto" alt="..." style="width: 120px">
                <div class="card-body text-center">
                    <p class="card-title">Aleks  _________ dan<i class="fa-solid fa-pencil"></i></p>
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
export default {
    methods:{
        chengeTabView(tab){
            this.$emit('chengeTabView', tab);
        }
    }
}
</script>
<style>
    
</style>