<template>
    <div class="container">
        <div class="row mt-5">

        <h3 class="fw-bold text-primary my-3">Mashqlar </h3>
        
        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab11View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab13View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>

        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto py-3" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/1bolim/images/272.jpg" class="card-img-top mx-auto" alt="..." style="width:135px">
                <div class="card-body text-center py-0 mt-3">
                    <div class="card-title d-flex justify-content-center">
                        Men <MashqWord :id="44" :current_latter="'rassom'" :incomplete="''" style="margin: -1px; width: 40%;"/> man 
                    </div>
                </div>
                
            </div>
        </div>
        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto py-3" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/1bolim/images/273.jpg" class="card-img-top mx-auto" alt="..." style="width:200px">
                <div class="card-body text-center py-0 mt-3">
                    <div class="card-title d-flex justify-content-center">
                        Sen hamshira <MashqWord :id="45" :current_latter="'san'" :incomplete="''" style="margin: -0.15rem; width: 20%;"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto py-3" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/1bolim/images/274.jpg" class="card-img-top mx-auto" alt="..." style="width:200px">
                <div class="card-body text-center py-0 mt-3">
                    <div class="card-title d-flex justify-content-center">
                        <MashqWord :id="46" :current_latter="'Biz tennischi'" :incomplete="''" style="margin: -0.15rem; width: 60%;"/> miz
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12 d-md-block d-none"></div>
        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto py-3" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/1bolim/images/275.jpg" class="card-img-top mx-auto" alt="..." style="width:180px">
                <div class="card-body text-center py-0 mt-3">
                    <div class="card-title d-flex justify-content-center">
                        Siz oshpaz <MashqWord :id="47" :current_latter="'siz'" :incomplete="''" style="margin: -0.18rem; width: 15%;"/> 
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto py-3" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/1bolim/images/276.jpg" class="card-img-top mx-auto" alt="..." style="width:200px">
                <div class="card-body text-center py-0 mt-3">
                    <div class="card-title d-flex justify-content-center">
                        Ular <MashqWord :id="48" :current_latter="'o`quvchilar'" :incomplete="''" style="margin: -0.15rem; width: 55%;"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto py-3" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/1bolim/images/277.jpg" class="card-img-top mx-auto" alt="..." style="width:195px">
                <div class="card-body text-center py-0 mt-3">
                    <div class="card-title d-flex justify-content-center">
                        Siz <MashqWord :id="49" :current_latter="'sartaroshsiz'" :incomplete="''" style="margin: -0.15rem; width: 60%;"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab11View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab13View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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