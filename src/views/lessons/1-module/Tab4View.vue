<template>
    <div class="container">
        <div class="row mt-5">
            
            <div class="col-6">
                <h3 class="fw-bold text-primary">Alifbo harflari? </h3>
                <p class="text">Tinglang! Takrorlang!</p>

                <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            </div>
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab3View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab5View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
            
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('b','banan')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: orange;"></i> 
                        </button>
                        <audio id="b">
                            <source src="@/assets/ovoz/ovoz_qiz/b.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="banan">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/banan.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/banan.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Bb</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);">n a b a n</p>
    
                    <Word @chengeLatterStatus="chengeLatterStatusHandler" :id="24" :current_latter="'banan'" :incomplete="''"/>
                </div>
            </div>
            </div>
            
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('e','eshik')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(43, 115, 215);"></i> 
                        </button>
                        <audio id="e">
                            <source src="@/assets/ovoz/ovoz_qiz/e.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="eshik">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/eshik.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/eshik.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Ee</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);">k i sh e</p>
                    <Word @chengeLatterStatus="chengeLatterStatusHandler" :id="25" :current_latter="'eshik'" :incomplete="''"/>
                </div>
            </div>
            </div>
            
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('g','gilam')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(237, 6, 6);"></i> 
                        </button>
                        <audio id="g">
                            <source src="@/assets/ovoz/ovoz_qiz/g.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="gilam">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/gilam.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/gilam.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Gg</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);">m a g i l</p>
                    <Word @chengeLatterStatus="chengeLatterStatusHandler" :id="26" :current_latter="'gilam'" :incomplete="''"/>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('h','hassa')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(6, 237, 125);"></i> 
                        </button>
                        <audio id="h">
                            <source src="@/assets/ovoz/ovoz_qiz/h.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="hassa">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/hassa.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/hassa.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Hh</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);">a s h a s</p>
                    <Word @chengeLatterStatus="chengeLatterStatusHandler" :id="27" :current_latter="'hassa'" :incomplete="''"/>
                </div>
            </div>
            </div>
            
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('j','jo`ja')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="j">
                            <source src="@/assets/ovoz/ovoz_qiz/j.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="jo`ja">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/jo`ja.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/joja.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Jj</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);">a j o' j</p>
                    <Word @chengeLatterStatus="chengeLatterStatusHandler" :id="28" :current_latter="'jo`ja'" :incomplete="''"/>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('l','lola')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="l">
                            <source src="@/assets/ovoz/ovoz_qiz/l.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="lola">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/lola.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/lola.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Ll</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);">a l o l</p>
                    <Word @chengeLatterStatus="chengeLatterStatusHandler" :id="29" :current_latter="'lola'" :incomplete="''"/>
                </div>
            </div>
            </div>
            
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('o','olma')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="o">
                            <source src="@/assets/ovoz/ovoz_qiz/o.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="olma">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/lola.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/olma.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Oo</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);">m a o l</p>
                    <Word @chengeLatterStatus="chengeLatterStatusHandler" :id="30" :current_latter="'olma'" :incomplete="''"/>
                </div>
            </div>
            </div>

            

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('q','qalam')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="q">
                            <source src="@/assets/ovoz/ovoz_qiz/q.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="qalam">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/qalam.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/qalam.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Qq</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);">l a m q a</p>
                    <Word @chengeLatterStatus="chengeLatterStatusHandler" :id="31" :current_latter="'qalam'" :incomplete="''"/>
                </div>
            </div>
            </div>


            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('s','suv')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="s">
                            <source src="@/assets/ovoz/ovoz_qiz/s.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="suv">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/suv.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/suv.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Ss</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);">v u s</p>
                    <Word @chengeLatterStatus="chengeLatterStatusHandler" :id="32" :current_latter="'suv'" :incomplete="''"/>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('t','taroq')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="t">
                            <source src="@/assets/ovoz/ovoz_qiz/t.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="taroq">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/taroq.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/taroq.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Tt</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);">o q t a r</p>
                    <Word @chengeLatterStatus="chengeLatterStatusHandler" :id="33" :current_latter="'taroq'" :incomplete="''"/>
                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('v','varrak')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="v">
                            <source src="@/assets/ovoz/ovoz_qiz/v.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="varrak">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/varrak.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/varak.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Vv</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);">r a v k a r</p>
                    <Word @chengeLatterStatus="chengeLatterStatusHandler" :id="34" :current_latter="'varrak'" :incomplete="''"/>
                </div>
            </div>
            </div>


            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('y','yulduz')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="y">
                            <source src="@/assets/ovoz/ovoz_qiz/y.mp3" type="audio/mpeg">
                        </audio>
                        <audio id="yulduz">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/yulduz.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/yulduz.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Yy</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);">u l y z u d</p>
                    <Word @chengeLatterStatus="chengeLatterStatusHandler" :id="35" :current_latter="'yulduz'" :incomplete="''"/>
                </div>
            </div>
            </div>
            
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab3View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab5View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
        </div>
    </div>
</template>
<script>
import Word from '../../../components/Word.vue'
export default {
    components:{Word},
    props:{
        error: {
            type: String
        }
    },
    data(){
        return {
            status: false
        }
    },
    methods:{
        
        toggleAudio(item, latter = null) {

            var audio = document.getElementById(`${item}`);

            if(this.status){
                audio = document.getElementById(`${latter}`);
            }

            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        },

        chengeLatterStatusHandler(){
            this.status = true;
        },

        chengeTabView(tab){
            this.$emit('chengeTabView', tab);
        }
    }
}
</script>
<style scoped>
</style>