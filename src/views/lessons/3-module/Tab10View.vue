<template>
    <div class="container">
        <div class="row mt-5">

        <h3 class="fw-bold text-primary my-3">Grammatika.</h3>

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab9View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab11View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>

        <div class="col-12 col-md-12">
                <div class="card mb-3" style="max-width: 100%;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="@/assets/3bolim/images/1121.jpg" class="img-fluid rounded-start border-0" alt="...">
                        </div>
                        <div class="col-md-8 d-flex align-items-center">
                            <div class="card-body">
                                <h1 class="badge text-bg-success fs-3">
                                    -da = bilan
                                </h1>
                                <h5 class="card-title">Ishga metroda keldim.</h5>
                                <h5 class="card-title">Ishga metro bilan keldim.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/3bolim/images/1122.jpg" class="img-fluid" alt="...">
                <h5>
                    poyezdda
                </h5>
                <p>
                    poyezd bilan
                </p>
                
            </div>

            <div class="col-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/3bolim/images/1123.jpg" class="img-fluid" alt="...">
                <h5>
                    samolyotda
                </h5>
                <p>
                    samolyot bilan
                </p>
                
            </div>

            <div class="col-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/3bolim/images/1124.jpg" class="img-fluid" alt="...">
                <h5>
                    velosipedda
                </h5>
                <p>
                    velosiped bilan
                </p>
                
            </div>

            <div class="col-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/3bolim/images/1125.png" class="img-fluid" alt="...">
                <h5>
                    metroda
                </h5>
                <p>
                    metro bilan
                </p>
                
            </div>

            <div class="col-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/3bolim/images/1126.png" class="img-fluid" alt="...">
                <h5>
                    taksida
                </h5>
                <p>
                    taksi bilan
                </p>
                
            </div>

            <div class="col-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/3bolim/images/1127.jpg" class="img-fluid" alt="...">
                <h5>
                    avtobusda
                </h5>
                <p>
                    avtobus bilan
                </p>
                
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