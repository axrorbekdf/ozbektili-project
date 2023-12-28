<template>
    <div class="container">
        <div class="row mt-5">

        <h3 class="fw-bold text-primary my-3">O‘ylang va toping.</h3>

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab9View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab11View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>

        <div class="col-12 col-md-12">

            <h3 class="badge text-bg-success fs-3">
                va / -da
            </h3>
            <ol>
                <li>Velosiped billan / ___ keldim.</li>
                <li>Qalam bilan / ___ daftar oldim.</li>
                <li>Gilos bilan / ___ qulupnay yedim.</li>
                <li>Samolyot bilan / ___ bordim.</li>
                <li>Messi bilan / ___ Ronaldo to&lsquo;p o&lsquo;ynadilar.</li>
                <li>Rossiyaga poyezd bilan / ___ jo&lsquo;nadik.</li>
                <li>Menda Pepsi bilan / ___ Kola bor.</li>
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
export default {
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