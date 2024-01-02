<template>
    <div class="container">
        <div class="row mt-5">
            
            <h3 class="fw-bold text-primary my-3"> Sonlar. </h3>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab7View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab9View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
            <div class="col-12">
                <table class="table table-bordered">
                    <tbody>
                        <tr>
                            <td>0</td>
                            <td>–</td>
                            <td>nol</td>
                            <td>10</td>
                            <td>–</td>
                            <td>o‘n</td>
                            <td>1000</td>
                            <td>–</td>
                            <td>ming</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>–</td>
                            <td>bir</td>
                            <td>20</td>
                            <td>–</td>
                            <td>yigirma</td>
                            <td>1.000.000</td>
                            <td>–</td>
                            <td>million</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>–</td>
                            <td>ikki</td>
                            <td>30</td>
                            <td>–</td>
                            <td>o‘ttiz</td>
                            <td>11</td>
                            <td>–</td>
                            <td>o'n bir</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>–</td>
                            <td>uch</td>
                            <td>40</td>
                            <td>–</td>
                            <td>qirq</td>
                            <td>23</td>
                            <td>–</td>
                            <td>yigirma uch</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>–</td>
                            <td>to‘rt</td>
                            <td>50</td>
                            <td>-</td>
                            <td>ellik</td>
                            <td>37 </td>
                            <td>-</td>
                            <td>o'ttiz yetti</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>-</td>
                            <td>besh</td>
                            <td>60</td>
                            <td>–</td>
                            <td>oltmish</td>
                            <td>49</td>
                            <td>–</td>
                            <td>qirq to'qqiz</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>–</td>
                            <td>olti</td>
                            <td>70</td>
                            <td>–</td>
                            <td>yetmish</td>
                            <td>55</td>
                            <td>–</td>
                            <td>ellik besh</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>–</td>
                            <td>yetti</td>
                            <td>80</td>
                            <td>–</td>
                            <td>sakson</td>
                            <td>102</td>
                            <td>–</td>
                            <td>bir yuz ikki</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>–</td>
                            <td>sakkiz</td>
                            <td>90</td>
                            <td>–</td>
                            <td>to‘qson</td>
                            <td>310</td>
                            <td>–</td>
                            <td>uch yuz o'n</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>–</td>
                            <td>to‘qqiz</td>
                            <td>100</td>
                            <td>–</td>
                            <td>yuz</td>
                            <td>1900 – bir ming to‘qqiz yuz</td>
                            <td>–</td>
                            <td>bir ming to'qqiz yuz</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- <div class="col-md-12 col-12">
                <div class="card mb-3" style="max-width: 740px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                    <div class="row g-0 py-4 align-items-center">
                        <div class="col-md-4 d-flex justify-content-center p-2">
                            <img src="@/assets/2dars/ppt/3 ta odam.jpg" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <p class="card-text"><strong>Botir:</strong> Assalomu alaykum!</p>
                            <p class="card-text"><strong>Murod:</strong> Va alaykum assalom! Ismingiz nima?</p>
                            <p class="card-text"><strong>Botir:</strong> Botir. </p>
                            <p class="card-text"><strong>Murod:</strong> Meniki Murod. Tanishganimdan xursandman.</p>
                            <p class="card-text"><strong>Murod:</strong> Men ham.</p>

                            <button @click="toggleAudio('6 rasm')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                            <audio id="6 rasm">
                            <source src="@/assets/2dars/6 rasm.mp3" type="audio/mpeg">
                        </audio>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab7View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab9View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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