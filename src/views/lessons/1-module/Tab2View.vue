<template>
    <div class="container">
        <div class="row mt-5">
            
            <div class="col-12">
                <h3 class="fw-bold text-primary">Alifbo harflari? </h3>
                <p class="text">Diqqat qiling!</p>
            </div>
            <div class="col-12 d-flex justify-content-between my-3">
                <button class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            

            <div class="col-12 col-md-3">
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
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('g`')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="g`">
                            <source src="@/assets/ovoz/ovoz_qiz/g`.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/gildirak.png" style="width: 10vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 20pt; color: rgb(244, 72, 24);">G'g'</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">G'</span>ildirak</p>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('q')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="q">
                            <source src="@/assets/ovoz/ovoz_qiz/q.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/qalam.png" style="width: 10vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 20pt; color: rgb(244, 72, 24);">Qq</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">Q</span>alam</p>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('ng')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="ng">
                            <source src="@/assets/ovoz/ovoz_qiz/ng.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/bodring.png" style="width: 10vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 20pt; color: rgb(244, 72, 24);">Ngng</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);">Bodri<span style="color: red;">ng</span></p>
                </div>
            </div>
            </div>

        </div>

        <div class="row justify-content-center align-items-center">
 

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('h')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(6, 237, 125);"></i> 
                        </button>
                        <audio id="h">
                            <source src="@/assets/ovoz/ovoz_qiz/h.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/hassa.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 25pt; color: rgb(214, 172, 22);">Hh</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(142, 15, 21, 0.575);"><span style="color: red;">H</span>assa</p>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-2">
            <div class="card justify-content-around align-items-center mb-3 p-2 border-0">
                <div class="text-center text-dark w-100">
                    <p class="card-text fw-bold m-0" style="font-size: 50pt; color: rgba(142, 15, 21, 0.575);">
                        <i class="fa-solid fa-not-equal"></i>
                    </p>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('x')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="x">
                            <source src="@/assets/ovoz/ovoz_qiz/x.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/xoroz.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 25pt; color: rgb(244, 72, 24);">Xx</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">X</span>o'roz</p>
                </div>
            </div>
            </div>

        </div>


        <div class="row justify-content-center align-items-center">
            <div class="col-12 col-md-2">
            <div class="card justify-content-around align-items-center mb-3 p-2 border-0">
                <div class="text-center text-dark w-100">
                    <p class="card-text fw-bold m-0" style="font-size: 25pt; color: rgba(142, 15, 21, 0.575);">
                        Jo'xori
                    </p>
                </div>
            </div>
            </div>
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('j')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="j">
                            <source src="@/assets/ovoz/ovoz_qiz/j.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/joja.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 25pt; color: rgb(244, 72, 24);">Jj</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">J</span>o'ja</p>
                </div>
            </div>
            </div>
            <div class="col-12 col-md-2">
            <div class="card justify-content-around align-items-center mb-3 p-2 border-0">
                <div class="text-center text-dark w-100">
                    <p class="card-text fw-bold m-0" style="font-size: 25pt; color: rgba(142, 15, 21, 0.575);">
                        Jirafa
                    </p>
                </div>
            </div>
            </div>
        
            <div class="col-12 d-flex justify-content-between my-4">
                <button class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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
<style scoped>
</style>