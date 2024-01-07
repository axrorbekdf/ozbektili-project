<template>
    <div class="container">
        <div class="row mt-5">

        <h3 class="fw-bold text-primary my-3">Rasmli lug'at? </h3>

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab9View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab11View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>

        <div class="col-12 col-md-6" v-for="item,index in items" :key="index">
            <TextChecked :data="item" />
        </div>

        <!-- <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/2dars/kasblar/hamshira.png" class="card-img-top mx-auto" alt="..." style="width:120px">
                <div class="card-body text-center">
                    <h3 class="card-title">Hamshira</h3>
                    <button @click="toggleAudio('hamshira')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                    <audio id="hamshira">
                        <source src="@/assets/2dars/qiz/hamshira.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>
        </div> -->
       

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab9View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab11View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>

        </div>
    </div>
</template>
<script>
import TextChecked from '@/components/TextChecked.vue'
export default {
    components:{TextChecked},
    data(){
        return {
            items:[
                {
                    id: 85,
                    question: "1. 365 - …?",
                    variants: [
                        "Uch yuz olti besh",
                        "Uch yuz oltmish besh",
                        "Uch oltmish besh"
                    ]
                },
                {
                    id: 86,
                    question: "2. Ikki ming o'n sakkiz - …?",
                    variants: [
                        "218",
                        "2108",
                        "2018"
                    ]
                }
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
        },
    }
}
</script>
<style>
    
</style>