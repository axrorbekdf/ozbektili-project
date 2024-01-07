<template>
    <div class="container">
        <div class="row mt-5">

        <h3 class="fw-bold text-primary my-3">O‘ylang va toping.</h3>

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab26View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab28View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>
            
<!-- 
        <div class="col-12 my-4">
            <img src="@/assets/3bolim/images/321.jpg" class="img-fluid mx-3" alt="..." style="width: 150px;" align="left">
            <h6>1. (Men) Bozordan 2 … ko'kat … .</h6>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="kilo / oldik">
                <label class="form-check-label" for="inlineRadio1">A) kilo / oldik</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="dona / olding">
                <label class="form-check-label" for="inlineRadio2">B) dona / olding</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="bog‘ / oldim">
                <label class="form-check-label" for="inlineRadio2">D) bog‘ / oldim</label>
            </div>
        </div>
        <div class="col-12 my-4">
            <img src="@/assets/3bolim/images/322.jpg" class="img-fluid mx-3" alt="..." style="width: 150px;" align="left">
            <h6>2. Lola universitetga metro__  bordi.</h6>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="-da">
                <label class="form-check-label" for="inlineRadio1">A) da</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="bilan">
                <label class="form-check-label" for="inlineRadio2">B) bilan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="va">
                <label class="form-check-label" for="inlineRadio2">D) va</label>
            </div>
        </div>
        <div class="col-12 my-4">
            <img src="@/assets/3bolim/images/323.jpg" class="img-fluid mx-3" alt="..." style="width: 150px;" align="left">
            <h6>3. Soat necha bo‘ldi?</h6>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="o‘nta kam uch">
                <label class="form-check-label" for="inlineRadio1">A) o‘nta kam uch</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="14:50">
                <label class="form-check-label" for="inlineRadio2">B) 14:50</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="uchdan o‘nta o‘tdi">
                <label class="form-check-label" for="inlineRadio2">D) uchdan o‘nta o‘tdi</label>
            </div>
        </div> -->

        <div class="col-12"  v-for="item,index in items" :key="index">
            <img :src="item.image" class="img-fluid mx-3" alt="..." style="width: 150px;" align="left">
            <div class="list-group mb-3">
                <TextChecked :data="item" />
            </div>
        </div>

        <!-- <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/ikkidost.png" class="card-img-top mx-auto" alt="..." style="width:120px">
                <div class="card-body text-center">
                    <h5 class="card-title">Sog' bo'ling !</h5>
                    <button @click="toggleAudio('sog boling')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                    <audio id="sog boling">
                        <source src="@/assets/2dars/qiz/sog boling.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>
        </div> -->

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab26View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab28View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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
                    id: 153,
                    image: "/assets/3bolim/images/321.jpg",
                    question: "1. Men bozordan 2 … ko'kat oldim.",
                    variants: [
                        "kilo",
                        "dona",
                        "bog‘"
                    ]
                },
                {
                    id: 154,
                    image: "/assets/3bolim/images/322.jpg",
                    question: "2. Lola universitetga metro__ bordi.",
                    variants: [
                        "da",
                        "bilan",
                        "va"
                    ]
                },
                {
                    id: 155,
                    image: "/assets/3bolim/images/323.jpg",
                    question: "3. Soat necha bo‘ldi?",
                    variants: [
                        "o‘nta kam uch",
                        "14:50",
                        "uchdan o‘nta o‘tdi"
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
        }
    }
}
</script>
<style>
    
</style>