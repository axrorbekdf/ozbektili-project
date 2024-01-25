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
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">O'</span>rdak</p>
                        <button @click="toggleAudio('o`rdak')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="o`rdak">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/o`rdak.mp3" type="audio/mpeg">
                        </audio>
                    </div>

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
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">G'</span>ildirak</p>
                        <button @click="toggleAudio('g`ildirak')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="g`ildirak">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/g`ildirak.mp3" type="audio/mpeg">
                        </audio>
                    </div>

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
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">Q</span>alam</p>
                        <button @click="toggleAudio('qalam')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="qalam">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/qalam.mp3" type="audio/mpeg">
                        </audio>
                    </div>

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
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);">Bodri<span style="color: red;">ng</span></p>
                        <button @click="toggleAudio('bodring')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="bodring">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/bodring.mp3" type="audio/mpeg">
                        </audio>
                    </div>

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
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="h">
                            <source src="@/assets/ovoz/ovoz_qiz/h.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/hassa.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 25pt; color: rgb(244, 72, 24);">Hh</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">H</span>assa</p>
                        <button @click="toggleAudio('hassa')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="hassa">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/hassa.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>

            <div class="col-12 col-md-2">
            <div class="card justify-content-around align-items-center mb-3 p-2 border-0">
                <div class="text-center text-dark w-100">
                    <p class="card-text fw-bold m-0" style="font-size: 50pt; color:  rgb(244, 72, 24);">
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
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">X</span>o'roz</p>
                        <button @click="toggleAudio('xo`roz')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="xo`roz">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/xo`roz.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>

        </div>


        <div class="row justify-content-center align-items-center">
            <div class="col-12 col-md-2">
            <div class="card justify-content-around align-items-center mb-3 p-2 border-0">
                <div class="text-center text-dark w-100">
                    <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);">
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
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">J</span>o'ja</p>
                        <button @click="toggleAudio('jo`ja')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="jo`ja">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/jo`ja.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>
            <div class="col-12 col-md-2">
            <div class="card justify-content-around align-items-center mb-3 p-2 border-0">
                <div class="text-center text-dark w-100">
                    <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);">
                        Jirafa
                    </p>
                </div>
            </div>
            </div>
        
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