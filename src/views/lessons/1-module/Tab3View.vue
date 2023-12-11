<template>
    <div class="container">
        <div class="row mt-5">
            
            <div class="col-6">
                <h3 class="fw-bold text-primary">Alifbo harflari? </h3>
                <p class="text">Tinglang! Takrorlang!</p>
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
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: blueviolet;"><span style="color: red;">_</span>yiq</p>
                </div>
            </div>
            </div>
            
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('d')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(21, 183, 112);"></i> 
                        </button>
                        <audio id="d">
                            <source src="@/assets/ovoz/ovoz_qiz/d.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(117, 13, 177);">Dd</p>
                        <img src="@/assets/alifbo/image/deraza.png" style="width: 12vh;" alt="...">
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgb(20, 71, 198);"><span style="color: red;">_</span>eraza</p>
                </div>
            </div>
            </div>
            
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('f')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(19, 228, 36);"></i> 
                        </button>
                        <audio id="f">
                            <source src="@/assets/ovoz/ovoz_qiz/f.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/fill.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(186, 8, 91);">Ff</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(42, 213, 139, 0.575);"><span style="color: red;">_</span>il</p>
                </div>
            </div>
            </div>
            

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('i')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="i">
                            <source src="@/assets/ovoz/ovoz_qiz/i.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/ilon.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Ii</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">_</span>lon</p>
                </div>
            </div>
            </div>
            

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('k')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="k">
                            <source src="@/assets/ovoz/ovoz_qiz/k.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/kitob.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Kk</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">_</span>itob</p>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('m')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="m">
                            <source src="@/assets/ovoz/ovoz_qiz/m.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/mushuk.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Mm</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">_</span>ushuk</p>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('n')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="n">
                            <source src="@/assets/ovoz/ovoz_qiz/n.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/non.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Nn</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">_</span>on</p>
                </div>
            </div>
            </div>


            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('p')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="p">
                            <source src="@/assets/ovoz/ovoz_qiz/p.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/piyoz.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Pp</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">_</span>iyoz</p>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('r')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="r">
                            <source src="@/assets/ovoz/ovoz_qiz/r.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/raketa.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Rr</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">_</span>aketa</p>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('u')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="u">
                            <source src="@/assets/ovoz/ovoz_qiz/u.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/uzum.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Uu</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">_</span>zum</p>
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
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Xx</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">_</span>o'roz</p>
                </div>
            </div>
            </div>


            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('z')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="z">
                            <source src="@/assets/ovoz/ovoz_qiz/z.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/zebra.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Zz</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">_</span>ebra</p>
                </div>
            </div>
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
                        <img src="@/assets/alifbo/image/ordak.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">O'o'</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">_</span>rdak</p>
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
                        <img src="@/assets/alifbo/image/gildirak.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">G'g'</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">_</span>ildirak</p>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('sh')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="sh">
                            <source src="@/assets/ovoz/ovoz_qiz/sh.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/sham.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 25pt; color: rgb(244, 72, 24);">Shsh</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">_</span>am</p>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('ch')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="ch">
                            <source src="@/assets/ovoz/ovoz_qiz/ch.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/chumoli.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 25pt; color: rgb(244, 72, 24);">Chch</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">_</span>umoli</p>
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
                        <img src="@/assets/alifbo/image/bodring.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 25pt; color: rgb(244, 72, 24);">Ngng</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);">Bodri<span style="color: red;">_</span></p>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('tutuq belgisi')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="tutuq belgisi">
                            <source src="@/assets/ovoz/ovoz_qiz/tutuq belgisi.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/ok.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">'</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);">She<span style="color: red;">_</span>r</p>
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
        },

        getcheckWork(){
            this.$store.dispatch('getExercises', 1);
        }
    },

    created(){
        this.getcheckWork()
    }
}
</script>
<style scoped>
</style>