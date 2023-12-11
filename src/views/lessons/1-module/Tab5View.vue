<template>
    <div class="container">
        <div class="row mt-5">
            
            <h3 class="fw-bold text-primary my-3">Kelishik olmoshlari? </h3>
            
            <div class="col-12 d-flex justify-content-between my-3">
                <button class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
            <div class="col-md-3 col-12">
                <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                    <img src="@/assets/2dars/olmoshlar/men.png" class="card-image-top mx-auto"  alt="..." style="width:200px">
                    <div class="card-body text-center">
                        <h3 class="card-title">Men</h3>
                        <button @click="toggleAudio('men')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                        <audio id="men">
                            <source src="@/assets/2dars/qiz/men.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-12">
                <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                    <img src="@/assets/2dars/olmoshlar/sen.png" class="card-img-top mx-auto" alt="..." style="width: 200px;">
                    <div class="card-body text-center">
                        <h3 class="card-title">Sen</h3>
                        <button @click="toggleAudio('sen')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                        <audio id="sen">
                            <source src="@/assets/2dars/qiz/sen.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-12">
                <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                    <img src="@/assets/2dars/olmoshlar/u.png" class="card-img-top mx-auto" alt="..." style="width: 200px;">
                    <div class="card-body text-center">
                        <h3 class="card-title">U</h3>
                        <button @click="toggleAudio('u')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                        <audio id="u">
                            <source src="@/assets/2dars/qiz/u.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                </div>
            </div>
            <div class="col-md-12 d-none d-md-block"></div>
            <div class="col-md-3 col-12">
                <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                    <img src="@/assets/2dars/olmoshlar/siz.png" class="card-img-top mx-auto" alt="..." style="width: 200px;">
                    <div class="card-body text-center">
                        <h3 class="card-title">Siz</h3>
                        <button @click="toggleAudio('siz')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                        <audio id="siz">
                            <source src="@/assets/2dars/qiz/siz.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-12">
                <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                    <img src="@/assets/2dars/olmoshlar/biz.png" class="card-img-top mx-auto" alt="..." style="width: 150px;">
                    <div class="card-body text-center">
                        <h3 class="card-title">Biz</h3>
                        <button @click="toggleAudio('biz')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                        <audio id="biz">
                            <source src="@/assets/2dars/qiz/biz.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-12">
                <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                    <img src="@/assets/2dars/olmoshlar/ular.png" class="card-img-top mx-auto" alt="..." style="width: 200px;">
                    <div class="card-body text-center">
                        <h3 class="card-title">Ular</h3>
                        <button @click="toggleAudio('ular')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                        <audio id="ular">
                            <source src="@/assets/2dars/qiz/ular.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                </div>
            </div>

            <div class="col-12 d-flex justify-content-between my-3">
                <button class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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
        }
    }
}
</script>
<style>
    
</style>