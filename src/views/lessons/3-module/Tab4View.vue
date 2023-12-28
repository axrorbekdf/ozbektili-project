<template>
    <div class="container">
        <div class="row mt-5">
            
            <div class="col-6">
                <h3 class="fw-bold text-primary">O'ylang va toping. Yozing.</h3>
                <p class="text">Diqqat qiling!</p>

                <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            </div>
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab3View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab5View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
            
            <div class="col-6 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/3bolim/images/161.jpg" class="img-fluid" alt="...">
                <h5>
                    15:00

                </h5>
                <p>
                    Soat uch___.
                </p>
                
            </div>

            <div class="col-6 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/3bolim/images/162.jpg" class="img-fluid" alt="...">
                <h5>
                    14:50

                </h5>
                <p>
                    Soat o‘n __ ____ uch.
                </p>
                
            </div>

            <div class="col-6 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/3bolim/images/163.jpg" class="img-fluid" alt="...">
                <h5>
                    09:40

                </h5>
                <p>
                    Soat yigirma __ ____ o‘n
                </p>
                
            </div>

            <div class="col-6 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/3bolim/images/164.jpg" class="img-fluid" alt="...">
                <h5>
                    07:05

                </h5>
                <p>
                    Soat yetti __ besh __ _____.
                </p>
                
            </div>
            


            
            <!-- <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('b')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: orange;"></i> 
                        </button>
                        <audio id="b">
                            <source src="@/assets/ovoz/ovoz_qiz/b.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/banan.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: orange;">Bb</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: orange;">n a b a n</p>
    
                    <Word :id="24" :current_latter="'banan'" :incomplete="''"/>
                </div>
            </div>
            </div> -->

            
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab3View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab5View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
        </div>
    </div>
</template>
<script>
// import Word from '../../../components/Word.vue'
// import Card from 'primevue/card';
export default {
    // components:{Word,Card},
    props:{
        error: {
            type: String
        }
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
        chengeTabView(tab){
            this.$emit('chengeTabView', tab);
        }
    }
}
</script>
<style scoped>
</style>