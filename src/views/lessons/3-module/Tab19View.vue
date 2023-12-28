<template>
    <div class="container">
        <div class="row mt-5">

        <h3 class="fw-bold text-primary my-3">Qancha?</h3>
        <p>Lug‘atlar rasmlar bilan beriladi</p>

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab18View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab20View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>
            
        
        <div class="col-12 col-md-12">
            <h3 class="text-end">
                <span class="badge text-bg-success fs-5">Nechta?-ta</span>
            </h3>

            <div class="card mb-3" style="max-width: 100%;">
                <div class="row g-0">
                    <div class="col-md-4 py-2">
                        <img src="@/assets/3bolim/images/261.png" class="img-fluid rounded-start border-0" alt="...">
                    </div>
                    <div class="col-md-8 d-flex align-items-center">
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">- Savatchada nechta tuxum bor?</li>
                                <li class="list-group-item">- Oltita.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12">
            <p>1 ta &ndash; bir+ta = bitta</p>
            <p>2 ta &ndash; ikki+ta = ikkita</p>
            <p>3 ta &ndash; uch+ta = uchta</p>
            <p>4 ta &ndash; to&lsquo;rt+ta = to&lsquo;rtta</p>
            <p>5 ta &ndash; besh+ta = beshta</p>
            <p>6 ta &ndash; olti+ta&nbsp; = oltita</p>
            <p>7 ta &ndash; yetti+ta = yettita</p>
            <p>8 ta &ndash; sakkiz+ta = sakkizta</p>
            <p>9 ta &ndash; to&lsquo;qqiz+ta = to&lsquo;qqizta</p>
            <p>10 ta &ndash; o&lsquo;n+ta = o&lsquo;nta</p>
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
            <button @click="chengeTabView('Tab18View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab20View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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