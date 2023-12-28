<template>
    <div class="container">
        <div class="row mt-5">                      
        <div class="col-md-12">

            <h3 class="fw-bold text-primary my-3">Tinglang. O‘ylang va toping.</h3>
        
        </div>


        <div class="col-6 text-center" style="display:flex; flex-direction:column; align-items:center;">
            <img src="@/assets/3bolim/images/1171.jpg" class="img-fluid" alt="..." style="width: 160px;">
        </div>
        <div class="col-6 text-center" style="display:flex; flex-direction:column; align-items:center;">
            <img src="@/assets/3bolim/images/1172.jpg" class="img-fluid" alt="..." style="width: 160px;">
        </div>

        <div class="col-12 text-center my-3">
            <h4>
                Oldin yuvindim, keyin nonushta qildim.
            </h4>
        </div>
        <div class="col-6 text-center" style="display:flex; flex-direction:column; align-items:center;">
            <img src="@/assets/3bolim/images/1173.png" class="img-fluid" alt="..." style="width: 160px;">
        </div>
        <div class="col-6 text-center" style="display:flex; flex-direction:column; align-items:center;">
            <img src="@/assets/3bolim/images/1174.jpg" class="img-fluid" alt="..." style="width: 160px;">
        </div>
        <div class="col-12 text-center my-3">
            <h4>
                ____ qo‘ng‘iroq qildim, ____ bordim.
            </h4>
        </div>

        <!-- <ol class="list-group list-group-numbered col-md-12 col-12">
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                <div class="fw-medium">Men o'qituvchiman </div>
                </div>
                <span @click="toggleAudio('men o`')" class="badge bg-primary rounded-pill" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span>
                <audio id="men o`">
                    <source src="@/assets/2dars/qiz/men o`.mp3" type="audio/mpeg">
                </audio>
            </li>
        </ol> -->

        

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab10View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab12View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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