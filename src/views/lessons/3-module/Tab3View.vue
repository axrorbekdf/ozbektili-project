<template>
    <div class="container">
        <div class="row mt-5">
            
            <div class="col-6">
                <h3 class="fw-bold text-primary">Grammatika</h3>
                <p class="text">Tinglang! Takrorlang!</p>
            </div>
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab2View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab4View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
             
            <div class="col-12 col-md-12">
                <div class="card mb-3" style="max-width: 100%;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="@/assets/3bolim/images/151.jpg" class="img-fluid rounded-start border-0" alt="...">
                        </div>
                        <div class="col-md-8 d-flex align-items-center">
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">- Restoran soat <span class="fw-bold">nechada</span> ochiladi?</li>
                                    <li class="list-group-item">- <span class="fw-bold">O‘ndan yigirmata o‘tganda</span> ochiladi.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-12 col-md-12">
                <div class="card mb-3" style="max-width: 100%;">
                    <div class="row g-0">
                        
                        <div class="col-md-8 d-flex align-items-center">
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">- Kechirasiz, soat <span class="fw-bold">necha</span> bo‘ldi?</li>
                                    <li class="list-group-item">- <span class="fw-bold">O‘n beshta kam olti.</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4 d-flex justify-content-end">
                            <img src="@/assets/3bolim/images/152.jpg" class="img-fluid rounded-end border-0" alt="...">
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-12">
                <div class="card mb-3" style="max-width: 100%;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="@/assets/3bolim/images/153.jpg" class="img-fluid rounded-start border-0" alt="...">
                        </div>
                        <div class="col-md-8 d-flex align-items-center">
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">- Buyurtmamiz <span class="fw-bold">qachon</span> yetib keladi?</li>
                                    <li class="list-group-item">- <span class="fw-bold">Yetti yarimda.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-12 col-md-12">
                <div class="card mb-3" style="max-width: 100%;">
                    <div class="row g-0">
                        
                        <div class="col-md-8 d-flex align-items-center">
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">- Hozir Turkiyada soat <span class="fw-bold">nechchi?</span></li>
                                    <li class="list-group-item">- <span class="fw-bold">Oltidan o‘nta o‘tdi.</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4 d-flex justify-content-end">
                            <img src="@/assets/3bolim/images/154.jpg" class="img-fluid rounded-end border-0" alt="...">
                        </div>
                    </div>
                </div>
            </div>


            <!-- <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('a')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: blueviolet;"></i> 
                        </button>
                        <audio id="a">
                            <source src="@/assets/ovoz/ovoz_qiz/a.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/ayiq.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: blueviolet;">Aa</p>
                    </div>
                    <Latter :id="6" :current_latter="'A'" :incomplete="'yiq'"/>
                </div>
            </div>
            </div> -->

            
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab2View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab4View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
        </div>
    </div>
</template>
<script>
import Latter from '../../../components/Latter.vue'
export default {
    components:{Latter},
    computed(){
        
    },
    methods:{
        toggleAudio(item) {
            var audio = document.getElementById(`${item}`);
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        },

        getcheckWork(){
            this.$store.dispatch('getExercises', {
                module_id: 1, 
                unit_id: 1, 
            });
        },

        chengeTabView(tab){
            this.$emit('chengeTabView', tab);
        },

        
    },

    created(){
        // this.getcheckWork()
        // this.checkAnswerByStatus();
    }
}
</script>
<style scoped>
</style>