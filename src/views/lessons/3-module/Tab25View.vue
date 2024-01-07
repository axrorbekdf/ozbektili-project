<template>
    <div class="container">
        <div class="row mt-5">

        <h3 class="fw-bold text-primary my-3">O‘ylang va toping.</h3>

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab20View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab22View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>
            

        <div class="col-6">
            <p>700 <strong>gr </strong><strong>go&lsquo;sht</strong> 70000 so&lsquo;m</p>
            <p>1 <InputText :id="146"/> 120000 so&lsquo;m</p>
            <p>0,5 <InputText :id="147"/> 5000 so&lsquo;m</p>
            <p>1 <InputText :id="148"/> 21000 so&lsquo;m</p>
            <p>1 <InputText :id="149"/> 28000 so&lsquo;m</p>
            <p>1,5 <InputText :id="150"/> 6000 so&lsquo;m</p>
            <p>0,5 <InputText :id="151"/> 4500 so&lsquo;m</p>
            <p>900 <InputText :id="152"/> 7000 so&lsquo;m</p>
        </div>
        <div class="col-6">
            <div class="row">
                <div class="col-6 text-center" style="display:flex; flex-direction:column; align-items:center;">
                    <img src="@/assets/3bolim/images/2121.jpg" class="img-fluid" alt="..." style="width: 150px;">
                    <h5>
                        700 gr – 70000 UZS
                    </h5>
                </div>
                <div class="col-6 text-center" style="display:flex; flex-direction:column; align-items:center;">
                    <img src="@/assets/3bolim/images/2122.jpg" class="img-fluid" alt="..." style="width: 150px;">
                    <h5>
                        1 kg – 21000 UZS
                    </h5>
                </div>
                <div class="col-6 text-center" style="display:flex; flex-direction:column; align-items:center;">
                    <img src="@/assets/3bolim/images/2123.jpg" class="img-fluid" alt="..." style="width: 150px;">
                    <h5>
                        1,5 kg – 6000 UZS
                    </h5>
                </div>
                <div class="col-6 text-center" style="display:flex; flex-direction:column; align-items:center;">
                    <img src="@/assets/3bolim/images/2124.jpg" class="img-fluid" alt="..." style="width: 150px;">
                    <h5>
                        0,5 kg – 5000 UZS
                    </h5>
                </div>
                <div class="col-6 text-center" style="display:flex; flex-direction:column; align-items:center;">
                    <img src="@/assets/3bolim/images/2125.jpg" class="img-fluid" alt="..." style="width: 150px;">
                    <h5>
                        0,5 kg – 4500 UZS
                    </h5>
                </div>
                <div class="col-6 text-center" style="display:flex; flex-direction:column; align-items:center;">
                    <img src="@/assets/3bolim/images/2126.jpg" class="img-fluid" alt="..." style="width: 150px;">
                    <h5>
                        1 l – 28000 UZS
                    </h5>
                </div>
                <div class="col-6 text-center" style="display:flex; flex-direction:column; align-items:center;">
                    <img src="@/assets/3bolim/images/2127.jpg" class="img-fluid" alt="..." style="width: 150px;">
                    <h5>
                        1 ta – 120000 UZS
                    </h5>
                </div>
                <div class="col-6 text-center" style="display:flex; flex-direction:column; align-items:center;">
                    <img src="@/assets/3bolim/images/2128.jpg" class="img-fluid" alt="..." style="width: 150px;">
                    <h5>
                        900 gr– 7000 UZS
                    </h5>
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
            <button @click="chengeTabView('Tab20View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab22View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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