<template>
    <div class="container">
        <div class="row mt-5">
            
            <div class="col-12">
                <h3 class="fw-bold text-primary">Alifbo harflari? </h3>
                <p class="text">Diqqat qiling!</p>
            </div>
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab1View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab3View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            

            <div class="col-6 d-flex justify-content-center align-items-center">
                <img src="@/assets/2bolim/images/121.jpg" alt="">
            </div>
            <div class="col-6 d-flex justify-content-center align-items-center">
                <p>
                    Salom. Mening ismim Akmal. Men 12 yoshdaman. Toshkentda yashayman. Men o‘quvchiman. Oilamiz 7 kishidan iborat. Biz 5 ta farzandmiz. Mening akam, opam, singlim va ukam bor. Otamning ismlari Erkin. Onamning ismlari Zebo. 
                </p>
                <img src="@/assets/2bolim/images/122.jpg" alt="">
            </div>

            <!-- <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('o`')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="o`">
                            <source src="@/assets/ovoz/ovoz_qiz/o`.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/ordak.png" style="width: 10vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 20pt; color: rgb(244, 72, 24);">O'o'</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">O'</span>rdak</p>
                </div>
            </div>
            </div> -->


        </div>

        

        <div class="row justify-content-center align-items-center">
        
            <div class="col-12 d-flex justify-content-between my-4">
                <button @click="chengeTabView('Tab1View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab3View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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
<style scoped>
</style>