<template>
    <div class="container">
        <div class="row mt-5">

        <h3 class="fw-bold text-primary my-3">O‘ylang va toping.</h3>

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab35View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab36View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>
            
        <div class="col-6">
            <img src="@/assets/3bolim/images/3111.jpg" class="img-fluid" alt="...">
        </div>
        <div class="col-6">
            <p class="fw-medium mb-1">- Laylo, qalaysan?</p>
            <p class="fw-medium mb-1">- Rahmat, yaxshiman. Nima gap?</p>
            <p class="fw-medium mb-1">- Yakshanba kuni vaqting bormi?</p>
            <p class="fw-medium mb-1">- Ha, bor. Tinchlikmi?</p>
            <p class="fw-medium mb-1">- Kinoga tushaylik?</p>
            <p class="fw-medium mb-1">- Yaxshi. Oqshom vaqtim bor.</p>
            <p class="fw-medium mb-1">- 17:50 da ko&rsquo;rishamiz.</p>
            <p class="fw-medium mb-1">- Qayerda uchrashamiz.</p>
            <p class="fw-medium mb-1">- Navoiy kinoteatrida.</p>
            <p class="fw-medium mb-1">- Ok! Ko&rsquo;rishguncha.</p>
            <p class="fw-medium mb-1">- Ko&rsquo;rishguncha xayr.</p>
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
            <button @click="chengeTabView('Tab35View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab36View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Darslarni tugatish <i class="fa-solid fa-arrow-right"></i></button>
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