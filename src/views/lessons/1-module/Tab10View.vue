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

        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/1bolim/images/261.jpg" class="card-img-top mx-auto mt-2" alt="..." style="width:200px">
                <div class="card-body text-center">
                    <h3 class="card-title">Hamshira</h3>
                    <button @click="toggleAudio('hamshira')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                    <audio id="hamshira">
                        <source src="@/assets/2dars/qiz/hamshira.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/1bolim/images/262.jpg" class="card-img-top mx-auto mt-2" alt="..." style="width:128px">
                <div class="card-body text-center">
                    <h3 class="card-title">Rassom</h3>
                    <button @click="toggleAudio('rassom')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                    <audio id="rassom">
                        <source src="@/assets/2dars/qiz/rassom.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/1bolim/images/263.jpg" class="card-img-top mx-auto mt-2" alt="..." style="width:175px">
                <div class="card-body text-center">
                    <h3 class="card-title">O'quvchi</h3>
                    <button @click="toggleAudio('o`quvchi')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                    <audio id="o`quvchi">
                        <source src="@/assets/2dars/qiz/o`quvchi.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>
        </div>
        <div class="col-md-12 d-none d-md-block"></div>
        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/1bolim/images/264.jpg" class="card-img-top mx-auto mt-2" alt="..." style="width:200px">
                <div class="card-body text-center">
                    <h3 class="card-title">Oshpaz</h3>
                    <button @click="toggleAudio('oshpaz')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                    <audio id="oshpaz">
                        <source src="@/assets/2dars/qiz/oshpaz.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/1bolim/images/265.jpg" class="card-img-top mx-auto mt-2" alt="..." style="width:200px">
                <div class="card-body text-center">
                    <h3 class="card-title">Sartarosh</h3>
                    <button @click="toggleAudio('sartarosh')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                    <audio id="sartarosh">
                        <source src="@/assets/2dars/qiz/sartarosh.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/1bolim/images/266.png" class="card-img-top mx-auto mt-2" alt="..." style="width:210px">
                <div class="card-body text-center">
                    <h3 class="card-title">Tennischi</h3>
                    <button @click="toggleAudio('tennischi')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                    <audio id="tennischi">
                        <source src="@/assets/2dars/qiz/tennischi.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>
        </div>

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