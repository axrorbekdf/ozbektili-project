<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">Diqqat qiling.</h3>


            <div class="col-md-12 col-12 mt-3">
                <div class="card mx-auto flex-row align-items-center p-2" style="width: 100%; border: none;">
                    
                    <img src="@/assets/1bolim/images/326.png">
                    <img src="@/assets/1bolim/images/321.png" class="card-img-top mx-4" alt="..." style="width:100px">
                    <div class="card-body text-left position-relative">
                        <h6 class="card-title">
                            - Bu nima?
                            <button @click="toggleAudio('buolma')" class="btn py-0">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                            </button>
                            <audio id="buolma">
                                <source src="@/assets/3dars/buolma.mp3" type="audio/mpeg">
                            </audio>
                            
                            <br>
                            - Bu olma.
                        </h6>
                    </div>
                </div>
            </div>

            <div class="col-md-12 col-12 mt-3">
                <div class="card mx-auto flex-row p-2 align-items-center" style="width: 100%; border: none;">
                    
                    <img src="@/assets/1bolim/images/328.png" >
                    <img src="@/assets/1bolim/images/322.png" class="card-img-top mx-4" alt="..." style="width:100px">
                    <div class="card-body text-left position-relative">
                        <h6 class="card-title">
                            - U nima? 
                            <button @click="toggleAudio('uit')" class="btn py-0">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                            </button>
                            <audio id="uit">
                                <source src="@/assets/3dars/uit.mp3" type="audio/mpeg">
                            </audio>
                            
                            <br>
                            - U it.
                            
                        </h6>
                    </div>
                </div>
            </div>

            <div class="col-md-12 col-12 mt-3">
                <div class="card mx-auto flex-row p-2 align-items-center" style="width: 100%; border: none;">
                    
                    <img src="@/assets/1bolim/images/326.png">
                    <img src="@/assets/1bolim/images/327.png" class="card-img-top mx-4" alt="..." style="width:50px">
                    <div class="card-body text-left position-relative">
                        <h6 class="card-title">
                            - Bu kim? 
                            <button @click="toggleAudio('bogbon')" class="btn py-0">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                            </button>
                            <audio id="bogbon">
                                <source src="@/assets/3dars/bogbon.mp3" type="audio/mpeg">
                            </audio>
                            
                            <br>
                            - Bu bog‘bon.
                        </h6>
                    </div>
                </div>
            </div>

            <div class="col-md-12 col-12 mt-3">
                <div class="card mx-auto flex-row p-2 align-items-center" style="width: 100%; border: none;">
                    
                    <img src="@/assets/1bolim/images/328.png">
                    <img src="@/assets/1bolim/images/323.png" class="card-img-top mx-4" alt="..." style="width:50px">
                    <div class="card-body text-left position-relative">
                        <h6 class="card-title">
                            - U kim? 
                            <button @click="toggleAudio('laylo')" class="btn py-0">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                            </button>
                            <audio id="laylo">
                                <source src="@/assets/3dars/laylo.mp3" type="audio/mpeg">
                            </audio>
                            
                            <br>
                            - U Laylo.
                        </h6>
                    </div>
                </div>
            </div>


            <div class="col-md-12 col-12 mt-3">
                <div class="card mx-auto flex-row p-2 align-items-center" style="width: 100%; border: none;">
                    
                    <img src="@/assets/1bolim/images/326.png">
                    <img src="@/assets/1bolim/images/324.png" class="card-img-top mx-4" alt="..." style="width:100px">
                    <div class="card-body text-left position-relative">
                        <h6 class="card-title">
                            - Bu yer qayer?
                            <button @click="toggleAudio('bank')" class="btn py-0">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                            </button>
                            <audio id="bank">
                                <source src="@/assets/3dars/bank.mp3" type="audio/mpeg">
                            </audio>
                            
                            <br>
                            - Bu yer bank.
                        </h6>
                    </div>
                </div>
            </div>

            <div class="col-md-12 col-12 mt-3">
                <div class="card mx-auto flex-row p-2 align-items-center" style="width: 100%; border: none;">
                    
                    <img src="@/assets/1bolim/images/328.png">
                    <img src="@/assets/1bolim/images/325.jpg" class="card-img-top mx-4" alt="..." style="width:100px">
                    <div class="card-body text-left position-relative">
                        <h6 class="card-title">
                            - U yer qayer?
                            <button @click="toggleAudio('bolalarbogchasi')" class="btn py-0">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                            </button>
                            <audio id="bolalarbogchasi">
                                <source src="@/assets/3dars/bolalarbogchasi.mp3" type="audio/mpeg">
                            </audio>
                            
                            <br>
                            - U yer bolalar bog‘chasi.
                        </h6>
                    </div>
                </div>
            </div>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab18View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab20View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
</template>
<script>
import InputText from '../../../components/InputText.vue'
import TextChecked from '@/components/TextChecked.vue'
export default {
    components:{InputText,TextChecked},
    props:{
        error: {
            type: String
        }
    },
    data(){
        return {
            items:[
                {
                    id: 158,
                    question: "3: Zebo o'qituvhi?",
                    variants: [
                        "Ha",
                        "Yo'q",
                    ]
                },
                {
                    id: 159,
                    question: "4: Zuhra talaba?",
                    variants: [
                        "Ha",
                        "Yo'q",
                    ]
                },
            ]
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
<style>
    
</style>