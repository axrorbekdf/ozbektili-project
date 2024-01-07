<template>
    <div class="container">
        <div class="row mt-5">
            
            <div class="col-6">
                <h3 class="fw-bold text-primary">Men va oilam. </h3>
                <p class="text">Lug'at</p>
            </div>
            <div class="col-6 d-flex justify-content-end align-items-center ">
                <button @click="chengeTabView('Tab2View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <div class="col-12">
                <img src="@/assets/2bolim/images/111.jpg" class="img-fluid" alt="...">
            </div>

            
            <!-- <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('a')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: blueviolet;"></i> 
                        </button>
                        <audio id="a">
                            <source src="@/assets/ovoz/ovoz_qiz/a.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/ayiq.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: blueviolet;">Aa</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: blueviolet;"><span style="color: red;">A</span>yiq</p>
                </div>
            </div>
            </div> -->
            
            <div class="col-12 d-flex justify-content-end align-items-center my-2">
                <button @click="chengeTabView('Tab2View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div class="col-12 my-3"></div>
            
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
<style scoped>

</style>