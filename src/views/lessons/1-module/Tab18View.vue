<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">Bu kim? Bu nima?</h3>


            <div class="alert alert-success w-75" role="alert">
                
                <ul class="list-group">
                    <li class="list-group-item" style="background-color: inherit;"> -  Bu, u, bular, ular, bu yer, u yer</li>
                    <li class="list-group-item" style="background-color: inherit;"> -  Kim? nima? qayer?</li>
                    <li class="list-group-item" style="background-color: inherit;"> -  -mi / emas</li>
                    <li class="list-group-item" style="background-color: inherit;"> -  Ha, yo‘q</li>
                    <li class="list-group-item" style="background-color: inherit;"> -  Bor, yo‘q</li>
                </ul>
            </div>


            <h3 class="fw-bold text-primary my-3">Diqqat qiling.</h3>

            <div class="col-3 d-flex flex-column align-items-center my-4">
                <img src="@/assets/1bolim/images/321.png" class="rounded float-start" alt="..." style="width: 120px;">
                <div class="d-flex justify-content-center">
                    <p class="m-0">olma</p>
                    <button @click="toggleAudio('olma')" class="btn py-0">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                    </button>
                    <audio id="olma">
                        <source src="@/assets/3dars/qiz/olma.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>

            <div class="col-3 d-flex flex-column align-items-center my-4">
                <img src="@/assets/1bolim/images/331.png" class="rounded float-start" alt="...">
                <div class="d-flex justify-content-center">
                    <p class="m-0">ryukzak</p>
                    <button @click="toggleAudio('ryukzak')" class="btn py-0">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                    </button>
                    <audio id="ryukzak">
                        <source src="@/assets/3dars/qiz/ryukzak.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>

            <div class="col-3 d-flex flex-column align-items-center my-4">
                <img src="@/assets/1bolim/images/322.png" class="rounded float-start" alt="..." style="width: 135px;">
                <div class="d-flex justify-content-center">
                    <p class="m-0">it</p>
                    <button @click="toggleAudio('it')" class="btn py-0">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                    </button>
                    <audio id="it">
                        <source src="@/assets/3dars/qiz/it.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>

            <div class="col-3 d-flex flex-column align-items-center my-4">
                <img src="@/assets/1bolim/images/327.png" class="rounded float-start" alt="..." style="width: 100px;">
                <div class="d-flex justify-content-center">
                    <p class="m-0">bog`bon</p>
                    <button @click="toggleAudio('bog`bon')" class="btn py-0">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                    </button>
                    <audio id="bog`bon">
                        <source src="@/assets/3dars/qiz/bog`bon.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>


            <div class="col-3 d-flex flex-column align-items-center my-4">
                <img src="@/assets/1bolim/images/361.jpg" class="rounded float-start" alt="..." style="width: 120px;">
                <div class="d-flex justify-content-center">
                    <p class="m-0">farmasevt</p>
                    <button @click="toggleAudio('farmasevt')" class="btn py-0">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                    </button>
                    <audio id="farmasevt">
                        <source src="@/assets/3dars/qiz/farmasevt.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>

            <div class="col-3 d-flex flex-column align-items-center my-4">
                <img src="@/assets/1bolim/images/3313.jpg" class="rounded float-start" alt="..." style="width: 130px;">
                <div class="d-flex justify-content-center">
                    <p class="m-0">qo`shiqchi</p>
                    <button @click="toggleAudio('qo`shiqchi')" class="btn py-0">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                    </button>
                    <audio id="qo`shiqchi">
                        <source src="@/assets/3dars/qiz/qo`shiqchi.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>

            <div class="col-3 d-flex flex-column align-items-center my-4">
                <img src="@/assets/1bolim/images/333.jpg" class="rounded float-start" alt="..." style="width: 145px;">
                <div class="d-flex justify-content-center">
                    <p class="m-0">maktab</p>
                    <button @click="toggleAudio('maktab')" class="btn py-0">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                    </button>
                    <audio id="maktab">
                        <source src="@/assets/3dars/qiz/maktab.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>

            <div class="col-3 d-flex flex-column align-items-center my-4">
                <img src="@/assets/1bolim/images/335.jpg" class="rounded float-start" alt="..." style="width: 160px;">
                <div class="d-flex justify-content-center">
                    <p class="m-0">supermarket</p>
                    <button @click="toggleAudio('supermarket')" class="btn py-0">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                    </button>
                    <audio id="supermarket">
                        <source src="@/assets/3dars/qiz/supermarket.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab17View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab19View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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