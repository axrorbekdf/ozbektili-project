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
            

        <div class="col-12">
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <th>A</th>
                        <th>Q</th>
                        <th>I</th>
                        <th>S</th>
                        <th>A</th>
                        <th>J</th>
                        <th>U</th>
                        <th>M</th>
                        <th>A</th>
                        <th>B</th>
                    </tr>
                    <tr>
                        <td>G</td>
                        <td>G</td>
                        <td>Y</td>
                        <td>A</td>
                        <td>K</td>
                        <td>SH</td>
                        <td>A</td>
                        <td>N</td>
                        <td>B</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>J</td>
                        <td>D</td>
                        <td>E</td>
                        <td>R</td>
                        <td>I</td>
                        <td>B</td>
                        <td>A</td>
                        <td>H</td>
                        <td>O</td>
                        <td>R</td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td>D</td>
                        <td>U</td>
                        <td>S</td>
                        <td>A</td>
                        <td>N</td>
                        <td>B</td>
                        <td>A</td>
                        <td>R</td>
                        <td>O</td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td>C;</td>
                        <td>O</td>
                        <td>R</td>
                        <td>S</td>
                        <td>A</td>
                        <td>N</td>
                        <td>B</td>
                        <td>A</td>
                        <td>Q</td>
                    </tr>
                    <tr>
                        <td>Z</td>
                        <td>A</td>
                        <td>K</td>
                        <td>U</td>
                        <td>Z</td>
                        <td>S</td>
                        <td>A</td>
                        <td>N</td>
                        <td>B</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td>P</td>
                        <td>A</td>
                        <td>Y</td>
                        <td>S;</td>
                        <td>A</td>
                        <td>N</td>
                        <td>B</td>
                        <td>A</td>
                        <td>T</td>
                    </tr>
                    <tr>
                        <td>S</td>
                        <td>E</td>
                        <td>SH</td>
                        <td>A</td>
                        <td>N</td>
                        <td>B</td>
                        <td>A</td>
                        <td>Y</td>
                        <td>O</td>
                        <td>Z</td>
                    </tr>
                </tbody>
            </table>
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