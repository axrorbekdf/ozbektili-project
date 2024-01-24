<template>
    <div class="container">
        <div class="row mt-5">

        <h3 class="fw-bold text-primary my-3">Diqqat qiling</h3>

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab29View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab31View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>
            

        <div class="col-12">
            <div class="row">
                <div class="col-6 mb-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
                    <img src="@/assets/3bolim/images/351.jpg" class="img-fluid" alt="..." style="width: 80px;">
                    <h6>
                        Javlon ertalab yugurdi.
                    </h6>
                </div>
                <div class="col-6 mb-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
                    <img src="@/assets/3bolim/images/352.jpg" class="img-fluid" alt="..." style="width: 125px;">
                    <h6>
                        Men tush bo‘lishini kutyapman.
                    </h6>
                </div>
                <div class="col-6 mb-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
                    <img src="@/assets/3bolim/images/353.jpg" class="img-fluid" alt="..." style="width: 150px;">
                    <h6>
                        Akam oqshom ishdan keldi.
                    </h6>
                </div>
                <div class="col-6 mb-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
                    <img src="@/assets/3bolim/images/354.jpg" class="img-fluid" alt="..." style="width: 150px;">
                    <h6>
                        Mozambikda tong chiroyli edi.
                    </h6>
                </div>
                <div class="col-6 mb-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
                    <img src="@/assets/3bolim/images/355.jpg" class="img-fluid" alt="..." style="width: 150px;">
                    <h6>
                        Toshkentda tun boshlandi.
                    </h6>
                </div>
                <div class="col-6 mb-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
                    <img src="@/assets/3bolim/images/356.jpg" class="img-fluid" alt="..." style="width: 150px;">
                    <h6>
                        Kechqurun televizor tomosha qildik.
                    </h6>
                </div>
                
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
            <button @click="chengeTabView('Tab29View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab31View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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