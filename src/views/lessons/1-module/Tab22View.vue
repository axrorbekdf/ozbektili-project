<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">Grammatika</h3>


            <div class="col-12">
                <div class="card mb-3" style="max-width: 100%; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                    <div class="row g-0 py-4">
                        <div class="col-md-12">
                            <div class="card-body">
                                <h2 class="card-text">-mi?</h2>
                                <div class="card-text">
                                    <h3 class="m-2">
                                        Ha, ______. 
                                    </h3>
                                    <h3 class="m-2">
                                        Yo‘q, ______ emas.
                                    </h3>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-12 col-12 mt-3">
                <div class="card mx-auto flex-row p-2" style="width: 100%;">
                    <div class="card-body text-left position-relative border">
                        <h6 class="card-title">
                            - Bu itmi? 
                            <button @click="toggleAudio('buitmi1')" class="btn py-0">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                            </button>
                            <audio id="buitmi1">
                                <source src="@/assets/3dars/buitmi1.mp3" type="audio/mpeg">
                            </audio>
                            
                            <br>
                            - Ha, bu it.

                            <i class="fa-solid fa-circle-check text-success position-absolute top-0 start-0"></i>
                        </h6>
                    </div>
                    <img src="@/assets/1bolim/images/351.png" class="card-img-top mx-4" alt="..." style="width:100px">
                    <div class="card-body text-left position-relative border">
                        <h6 class="card-title">
                            - Bu mushukmi? 
                            <button @click="toggleAudio('buitmi2')" class="btn py-0">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                            </button>
                            <audio id="buitmi2">
                                <source src="@/assets/3dars/buitmi2.mp3" type="audio/mpeg">
                            </audio>
                            
                            <br>
                            - Yo‘q, bu mushuk emas.
                            <i class="fa-solid fa-circle-xmark text-danger position-absolute top-0 start-0"></i>
                        </h6>
                    </div>
                </div>
            </div>

            <div class="col-md-12 col-12 mt-3">
                <div class="card mx-auto flex-row p-2" style="width: 100%;">
                    
                    <div class="card-body text-left position-relative border">
                        <h6 class="card-title">
                            - Bu mushukmi?
                            <button @click="toggleAudio('buitmi3')" class="btn py-0">
                                <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                            </button>
                            <audio id="buitmi3">
                                <source src="@/assets/3dars/buitmi3.mp3" type="audio/mpeg">
                            </audio>
                            
                            <br>
                            - Yo‘q, bu mushuk emas. <br>
                            - Bu it.
                            <i class="fa-solid fa-circle-xmark text-danger position-absolute top-0 start-0"></i>
                        </h6>
                    </div>
                </div>
            </div>

            <h3 class="fw-bold text-primary my-3">O‘ylang va toping. Yozing.</h3>

            <div class="col-md-12 col-12 mt-3">
                <div class="card mx-auto flex-row p-2" style="width: 100%;">
                    <div class="card-body text-left position-relative border">
                        <h6 class="card-title">
                            - Bu <InputText :id="157"/>mi? <br>
                            - Ha, bu <InputText :id="157"/>. 

                            <i class="fa-solid fa-circle-check text-success position-absolute top-0 start-0"></i>
                        </h6>
                    </div>
                    <img src="@/assets/1bolim/images/352.png" class="card-img-top mx-4" alt="..." style="width:100px">
                    <div class="card-body text-left position-relative border">
                        <h6 class="card-title">
                            - U kitobmi? <br>
                            - Yo‘q, u <InputText :id="157"/> emas.
                            <i class="fa-solid fa-circle-xmark text-danger position-absolute top-0 start-0"></i>
                        </h6>
                    </div>
                </div>
            </div>


            <div class="col-md-12 col-12 mt-3">
                <div class="card mx-auto flex-row p-2" style="width: 100%;">
                    <div class="card-body text-left position-relative border">
                        <h6 class="card-title">
                            - Bu yer <InputText :id="157"/>mi? <br>
                            - Ha, <InputText :id="157"/>. 

                            <i class="fa-solid fa-circle-check text-success position-absolute top-0 start-0"></i>
                        </h6>
                    </div>
                    <img src="@/assets/1bolim/images/353.jpg" class="card-img-top mx-4" alt="..." style="width:100px">
                    <div class="card-body text-left position-relative border">
                        <h6 class="card-title">
                            - Bu yer uymi? <br>
                            - Yo‘q, bu yer <InputText :id="157"/>, bu yer<InputText :id="157"/>.
                            <i class="fa-solid fa-circle-xmark text-danger position-absolute top-0 start-0"></i>
                        </h6>
                    </div>
                </div>
            </div>

            <div class="col-md-12 col-12 mt-3">
                <div class="card mx-auto flex-row p-2" style="width: 100%;">
                    <div class="card-body text-left position-relative border">
                        <h6 class="card-title">
                            - U koptokmi? <br>
                            - <InputText :id="157"/>, <InputText :id="157"/>.

                            <i class="fa-solid fa-circle-check text-success position-absolute top-0 start-0"></i>
                        </h6>
                    </div>
                    <img src="@/assets/1bolim/images/354.jpg" class="card-img-top mx-4" alt="..." style="width:100px">
                    <div class="card-body text-left position-relative border">
                        <h6 class="card-title">
                            - Bu <InputText :id="157"/>? <br>
                            - <InputText :id="157"/>, <InputText :id="157"/> ruchka <InputText :id="157"/>.
                            <i class="fa-solid fa-circle-xmark text-danger position-absolute top-0 start-0"></i>
                        </h6>
                    </div>
                </div>
            </div>

            <div class="col-md-12 col-12 mt-3">
                <div class="card mx-auto flex-row p-2" style="width: 100%;">
                    <div class="card-body text-left position-relative border">
                        <h6 class="card-title">
                            - U <InputText :id="157"/>mi? <br>
                            - Ha, <InputText :id="157"/>.
                        </h6>

                        <i class="fa-solid fa-circle-check text-success position-absolute top-0 start-0"></i>
                    </div>
                    <img src="@/assets/1bolim/images/355.jpg" class="card-img-top mx-4" alt="..." style="width:100px">
                    <div class="card-body text-left position-relative border">
                        <h6 class="card-title">
                            - <InputText :id="157"/>? <br>
                            - <InputText :id="157"/>, U stomotolog <InputText :id="157"/>, u <InputText :id="157"/>.
                            <i class="fa-solid fa-circle-xmark text-danger position-absolute top-0 start-0"></i>
                        </h6>
                    </div>
                </div>
            </div>

            <div class="col-md-12 col-12 mt-3">
                <div class="card mx-auto flex-row p-2" style="width: 100%;">
                    <div class="card-body text-left position-relative border">
                        <h6 class="card-title">
                            - <InputText :id="157"/>? <br>
                            - <InputText :id="157"/>, U  <InputText :id="157"/>. 
                        </h6>
                        <i class="fa-solid fa-circle-check text-success position-absolute top-0 start-0"></i>
                    </div>
                    <img src="@/assets/1bolim/images/356.jpg" class="card-img-top mx-4" alt="..." style="width:100px">
                    <div class="card-body text-left position-relative border">
                        <h6 class="card-title">
                            - U telefonmi? <br>
                            - <InputText :id="157"/>, <InputText :id="157"/>.
                        </h6>
                        <i class="fa-solid fa-circle-xmark text-danger position-absolute top-0 start-0"></i>
                    </div>
                </div>
            </div>


            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab21View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab23View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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