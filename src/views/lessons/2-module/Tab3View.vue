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
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th></th>
                            <th colspan="2">Birlik</th>
                            <th colspan="2">Ko'plik</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="fw-bold">I shaxs</td>
                            <td>Men + ning</td>
                            <td>... -im/ -m</td>
                            <td>Biz + ning</td>
                            <td>... -imiz/ -miz</td>
                        </tr>
                        <tr>
                            <td class="fw-bold">II shaxs</td>
                            <td>Sen + ning</td>
                            <td>... -ing/ -ng</td>
                            <td>Siz + ning</td>
                            <td>... -ingiz/ -ngiz</td>
                        </tr>
                        <tr>
                            <td class="fw-bold">III shaxs</td>
                            <td>U + ninig</td>
                            <td>... -i/ -si</td>
                            <td>Ular + ning</td>
                            <td>... lari</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="col-8 col-md-8">
                <div class="row">
                    <div class="col-4 col-md-4">
                        <div class="card mb-2" style="width: 12rem;">
                            <img src="@/assets/2bolim/images/131.png" class="card-img-top" alt="...">
                            <div class="card-body text-center">
                                <h6 class="card-text">Bu men. Bu me<span class="text-danger">ning</span>    velosiped<span class="text-danger">im</span>.</h6>
                            </div>
                        </div>
                    </div>

                    <div class="col-4 col-md-4">
                        <div class="card mb-2" style="width: 12rem;">
                            <img src="@/assets/2bolim/images/132.jpg" class="card-img-top" alt="...">
                            <div class="card-body text-center">
                                <h6 class="card-text">Bu sen. Bu sen<span class="text-danger">ing</span>    it<span class="text-danger">ing</span>.</h6>
                            </div>
                        </div>
                    </div>

                    <div class="col-4 col-md-4">
                        <div class="card mb-2" style="width: 12rem;">
                            <img src="@/assets/2bolim/images/133.png" class="card-img-top" alt="...">
                            <div class="card-body text-center">
                                <h6 class="card-text">Bu kuchuk. Bu u<span class="text-danger">ning</span>    uya<span class="text-danger">si</span>.</h6>
                            </div>
                        </div>
                    </div>

                    <div class="col-4 col-md-4">
                        <div class="card mb-2" style="width: 12rem;">
                            <img src="@/assets/2bolim/images/134.png" class="card-img-top" alt="...">
                            <div class="card-body text-center">
                                <h6 class="card-text">Bu biz. Bu biz<span class="text-danger">ning</span>    quyon<span class="text-danger">imiz</span>.</h6>
                            </div>
                        </div>
                    </div>

                    <div class="col-4 col-md-4">
                        <div class="card mb-2" style="width: 12rem;">
                            <img src="@/assets/2bolim/images/135.png" class="card-img-top" alt="...">
                            <div class="card-body text-center">
                                <h6 class="card-text">Bu siz. Bu siz<span class="text-danger">ning</span>    to'ti<span class="text-danger">ngiz</span>.</h6>
                            </div>
                        </div>
                    </div>
 
                    <div class="col-4 col-md-4">
                        <div class="card mb-2" style="width: 12rem;">
                            <img src="@/assets/2bolim/images/136.jpg" class="card-img-top" alt="...">
                            <div class="card-body text-center">
                                <h6 class="card-text">Bular Aliyevlar oilasi. Bu ular<span class="text-danger">ning</span>    hovli<span class="text-danger">si</span>.</h6>
                            </div>
                        </div>
                    </div>

                </div>
            
            </div>
            <div class="col-4 col-md-4 d-flex justify-content-center align-items-center">
                <button type="button" class="btn btn-primary">
                    <h3 class="mb-5" style="display: flex; flex-direction: column;">
                        Men + ning 
                        <i class="fa-solid fa-arrow-down"></i>
                        <span class="badge text-bg-success">Mening</span>
                    </h3>

                    <h3 style="display: flex; flex-direction: column;">
                        Sen + ninig
                        <i class="fa-solid fa-arrow-down"></i>
                        <span class="badge text-bg-success">Sening</span>
                    </h3>
                </button>
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