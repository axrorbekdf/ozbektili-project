<template>
    <div class="container">
        <div class="row mt-5">

        <h3 class="fw-bold text-primary my-3">O‘ylang va toping.</h3>

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab21View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab33View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>
            

        
        <div class="col-3 text-center" style="display:flex; flex-direction:column; align-items:center;">
            <img src="@/assets/3bolim/images/371.jpg" class="img-fluid" alt="...">
            <h5>
                <span class="badge text-bg-info">Qish</span> <br>
                Dekabr <br>
                Yanvar <br>
                Fevral <br>
            </h5>
        </div>
        <div class="col-3 text-center" style="display:flex; flex-direction:column; align-items:center;">
            <h5>
                <span class="badge text-bg-success">BAHOR</span> <br>
                Mart <br>
                Aprel <br>
                May <br>
            </h5>
            <img src="@/assets/3bolim/images/372.jpg" class="img-fluid" alt="...">
        </div>
        <div class="col-3 text-center" style="display:flex; flex-direction:column; align-items:center;">
            <img src="@/assets/3bolim/images/373.jpg" class="img-fluid" alt="...">
            <h5>
                <span class="badge text-bg-danger">YOZ</span> <br>
                Iyun <br>
                Iyul <br>
                Avgust  <br>
            </h5>
        </div>
        <div class="col-3 text-center" style="display:flex; flex-direction:column; align-items:center;">
            <h5>
                <span class="badge text-bg-warning">KUZ</span> <br>
                Sentabr <br>
                Oktabr <br>
                Noyabr  <br>
            </h5>
            <img src="@/assets/3bolim/images/374.jpg" class="img-fluid" alt="...">
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
            <button @click="chengeTabView('Tab21View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab33View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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