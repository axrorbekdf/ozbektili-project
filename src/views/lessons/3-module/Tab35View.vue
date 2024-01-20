<template>
    <div class="container">
        <div class="row mt-5">

        <h3 class="fw-bold text-primary my-3">O‘ylang va toping.</h3>

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab34View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab36View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>
        
        <p class="mt-4 mb-0 text-danger fw-bold">Pastdagi so'zlardan mosini kerakli o'ringa joylashtiring.</p>
        <div class="col-12 my-2" v-for="(item,index) in data" :key="index">
            <draggable clas :list="item" @change="log">
                <span v-for="element in item" :key="element.name" class="fs-5 badge bg-info mx-2">{{ element.name }}</span>
            </draggable>
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
            <button @click="chengeTabView('Tab34View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab36View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>

        </div>
    </div>
</template>
<script>
import { VueDraggableNext } from 'vue-draggable-next'
export default {
    components: {
      draggable: VueDraggableNext,
    },
    data() {        
      return {
        enabled: true,
        data:[
            [
                { name: 'to‘rtta', id: 1 },
                { name: 'O‘zbekistonda', id: 2 },
                { name: 'bor', id: 3 },
                { name: 'fasl', id: 4 },
            ],
            [
                { name: 'Yakshanba', id: 1 },
                { name: 'dam olish kuni', id: 2 },
                { name: 'O‘zbekistonda', id: 3 },
            ],
            [
                { name: 'o‘qish', id: 1 },
                { name: 'kuzda', id: 2 },
                { name: 'boshlanadi', id: 3 },
                { name: 'Maktablarda', id: 4 },
            ],
            [
                { name: 'pishiriladi', id: 1 },
                { name: 'sumalak', id: 2 },
                { name: 'Bahorda', id: 3 },
            ]
        ],
        dragging: false,
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