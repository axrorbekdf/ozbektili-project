<template>
    <div class="container">
        <div class="row mt-5">
            
            <h3 class="fw-bold text-primary my-3">Diqqat qiling.</h3>
            
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab4View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab6View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            


            <div class="col-12">
                <table class="table table-bordered mx-1">
                    <thead>
                        <tr>
                            <td rowspan="4" class="text-center align-middle">
                                <i class="fa-solid fa-down-long" style="font-size: 64pt; color: rgb(18, 60, 197);"></i>
                            </td>
                            <td>O'g'<span class="text-danger">i</span>l</td>
                            <td rowspan="8" class="text-center align-middle fw-bold">-im/ -m<br>-ing/ -ng<br>-i/ -si<br>-imiz/ -miz<br>-ingiz/ -ngiz</td>
                            <td>O'g'lim</td>
                        </tr>
                        <tr>
                            <td>Sing<span class="text-danger">i</span>l</td>
                            <td>Singlimiz</td>
                        </tr>
                        <tr>
                            <td>Bur<span class="text-danger">u</span>n</td>
                            <td>Burni</td>
                        </tr>
                        <tr>
                            <td>Shah<span class="text-danger">a</span>r</td>
                            <td>Sharingiz</td>
                        </tr>
                        <tr>
                            <td rowspan="4" class="text-center align-middle">
                                <i class="fa-solid fa-arrow-rotate-right" style="font-size: 64pt; color: rgb(18, 60, 197);"></i>
                            </td>
                            <td>Kuchu<span class="text-danger">k</span></td>
                            <td>Kuchugi</td>
                        </tr>
                        <tr>
                            <td>Mushu<span class="text-danger">k</span></td>
                            <td>Mushugim</td>
                        </tr>
                        <tr>
                            <td>Picho<span class="text-danger">q</span></td>
                            <td>Pichog'ingiz</td>
                        </tr>
                        <tr>
                            <td>Qoshi<span class="text-danger">q</span></td>
                            <td>Qoshig'i</td>
                        </tr>
                    </thead>
                </table>

            </div>


            <!-- <div class="col-md-3 col-12">
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
            </div> -->

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab4View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab6View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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