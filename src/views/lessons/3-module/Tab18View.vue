<template>
    <div class="container">
        <div class="row mt-5">

        <h3 class="fw-bold text-primary my-3">O‘ylang va toping.?</h3>
            
        
        <div class="col-12 col-md-6">
            <h6>1. 3 _____ yog‘.</h6>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions1" value="Litr">
                <label class="form-check-label" for="inlineRadio1">Litr</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions1" value="Kilo">
                <label class="form-check-label" for="inlineRadio2">Kilo</label>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <h6>2. 4 _____  kartoshka.</h6>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions2" value="Litr">
                <label class="form-check-label" for="inlineRadio1">Litr</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions2" value="Kilo">
                <label class="form-check-label" for="inlineRadio2">Kilo</label>
            </div>
        </div>
        <div class="col-12 col-md-6">

            <h6>3. 1 _____ go‘sht</h6>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions3" value="Litr">
                <label class="form-check-label" for="inlineRadio1">Litr</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions3" value="Kilo">
                <label class="form-check-label" for="inlineRadio2">Kilo</label>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <h6>4. Yarim _____ sut.</h6>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions4" value="Litr">
                <label class="form-check-label" for="inlineRadio1">Litr</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions4" value="Kilo">
                <label class="form-check-label" for="inlineRadio2">Kilo</label>
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
            <button @click="chengeTabView('Tab17View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab19View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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