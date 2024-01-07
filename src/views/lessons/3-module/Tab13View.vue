<template>
    <div class="container">
        <div class="row mt-5">                      
            <div class="col-12">

            <h3 class="fw-bold text-primary my-3">O'ylang va toping. </h3>

            <!-- <ol class="list-group list-group-numbered col-md-12 col-12">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-medium">Men O'zbekiston<span class="text-success fw-bold">LIK</span>man </div>
                </div>
                <span @click="toggleAudio('men lik')" class="badge bg-primary rounded-pill"  style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span>
                <audio id="men lik">
                    <source src="@/assets/2dars/qiz/men lik.mp3" type="audio/mpeg">
                </audio>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-medium">Men O'zbekiston<span class="text-success fw-bold">DAN</span>man </div>
                </div>
                <span @click="toggleAudio('men dan')" class="badge bg-primary rounded-pill"  style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span>
                <audio id="men dan">
                    <source src="@/assets/2dars/qiz/men dan.mp3" type="audio/mpeg">
                </audio>
                </li>
            </ol> -->

            </div>

            <div class="col-12 col-md-12">

            <h3 class="badge text-bg-success fs-3">
                va / -da
            </h3>
            <ol>
                <li>Velosiped bilan / <InputText :id="136"/> keldim.</li>
                <li>Qalam bilan / <InputText :id="136"/> daftar oldim.</li>
                <li>Gilos bilan / <InputText :id="136"/> qulupnay yedim.</li>
                <li>Samolyot bilan / <InputText :id="136"/> bordim.</li>
                <li>Messi bilan / <InputText :id="136"/> Ronaldo to&lsquo;p o&lsquo;ynadilar.</li>
                <li>Rossiyaga poyezd bilan / <InputText :id="136"/> jo&lsquo;nadik.</li>
                <li>Menda Pepsi bilan / <InputText :id="136"/> Kola bor.</li>
            </ol>
            </div>

            <div class="col-12 text-center my-4">
            <h3>
                Chorsu bozori
                <span class="badge text-bg-success fs-3">
                    oldin ≠ keyin
                </span>
            </h3>

            </div>
            <div class="col-6 text-center" style="display:flex; flex-direction:column; align-items:center;">
            <img src="@/assets/3bolim/images/1161.jpg" class="img-fluid" alt="...">
            <h5>
                oldin
            </h5>
            </div>
            <div class="col-6 text-center" style="display:flex; flex-direction:column; align-items:center;">
            <img src="@/assets/3bolim/images/1162.jpg" class="img-fluid" alt="...">
            <h5>
                keyin
            </h5>
            </div>

            <div class="col-12 text-center  mt-4">
            <h3>
                Televizorlar
            </h3>
            </div>
            <div class="col-6 text-center" style="display:flex; flex-direction:column; align-items:center;">
            <img src="@/assets/3bolim/images/1163.png" class="img-fluid" alt="...">
            <h5>
                oldin
            </h5>
            </div>
            <div class="col-6 text-center" style="display:flex; flex-direction:column; align-items:center;">
            <img src="@/assets/3bolim/images/1164.jpg" class="img-fluid" alt="...">
            <h5>
                keyin
            </h5>
            </div>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab12View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab14View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
</template>
<script>
import InputText from '../../../components/InputText.vue'
export default {
    components:{InputText},
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