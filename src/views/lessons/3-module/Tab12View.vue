<template>
    <div class="container">
        <div class="row mt-5">

        <h3 class="fw-bold text-primary my-3">Grammatika.</h3>
        
        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab11View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab13View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>

        <div class="col-12 col-md-12 d-flex align-items-center mt-4">
                <img src="@/assets/3bolim/images/1141.jpg" alt="" width="150">
                <h5 class="mx-4 my-0 d-inline" style="font-size: 10pt;">
                    Nonushtada tuxum va pishloq yedim.
                    Nonushtada tuxum bilan pishloq yedim.
                </h5>
                <h5 class="mx-4 my-0 badge text-bg-success" style="font-size: 18pt;">
                    va = bilan
                </h5>
            </div>

            <div class="col-3 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/3bolim/images/1142.jpg" class="img-fluid" alt="..." style="width: 150px;">
                <h5>
                    Tom va Jerry
                </h5>
                <p>
                    Tom bilan Jerry
                </p>
            </div>

            <div class="col-3 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/3bolim/images/1143.jpg" class="img-fluid" alt="..." style="width: 150px;">
                <h5>
                    Quyosh va oy
                </h5>
                <p>
                    Quyosh bilan oy
                </p>
            </div>

            <div class="col-3 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/3bolim/images/1144.jpg" class="img-fluid" alt="..." style="width: 150px;">
                <h5>
                    Pepsi va Kola
                </h5>
                <p>
                    Pepsi bilan Kola
                </p>
            </div>

            <div class="col-3 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/3bolim/images/1145.png" class="img-fluid" alt="..." style="width: 150px;">
                <h5>
                    Ronaldo va Messi
                </h5>
                <p>
                    Ronaldo bilan Messi
                </p>
            </div>


        <!-- <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto py-3" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/2dars/kasblar/rassom.png" class="card-img-top mx-auto" alt="..." style="width:120px">
                <div class="card-body text-center py-0 mt-3">
                    <div class="card-title d-flex justify-content-center">
                        Men <MashqWord :id="44" :current_latter="'rassom'" :incomplete="''" style="margin: -1px; width: 40%;"/> man 
                    </div>
                </div>
                
            </div>
        </div> -->

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