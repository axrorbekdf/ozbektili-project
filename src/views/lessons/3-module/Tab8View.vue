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
            
            <div class="col-12 col-md-6 mt-4">
                <p class="fw-medium">Farida 06:00 da uyg&lsquo;onda. Bog&lsquo;da sayr qildi. Keyin yuvindi. Nonushta qilmadi, ammo bir payola choy ichdi. Soat 07:00 da uydan chiqdi. Ishga taksida ketdi.&nbsp; Kafeda tushlik qildi. Ishdan soat 18:30 da chiqdi. Supermarketga kirdi va yeguliklar oldi. Uyiga qaytdi. 19:00 da kechki ovqatni yedi. Biroz televizor tomosh qildi. Keyin kitob o&lsquo;qi. 22:00 da uxladi. Farida bugun juda charchadi.</p>
            </div>

            <div class="col-12 col-md-6">
                <h6>1. Fariza nonushta qildi.</h6>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                    <label class="form-check-label" for="inlineRadio1">To'g'ri</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                    <label class="form-check-label" for="inlineRadio2">Noto'g'ri</label>
                </div>

                <h6>2. Farida ishga metroda bordi.</h6>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                    <label class="form-check-label" for="inlineRadio1">To'g'ri</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                    <label class="form-check-label" for="inlineRadio2">Noto'g'ri</label>
                </div>

                <h6>3. Farida tushlikni kafeda qildi.</h6>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                    <label class="form-check-label" for="inlineRadio1">To'g'ri</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                    <label class="form-check-label" for="inlineRadio2">Noto'g'ri</label>
                </div>

                <h6>4. Farida ishdan olti yarimda chiqdi.</h6>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                    <label class="form-check-label" for="inlineRadio1">To'g'ri</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                    <label class="form-check-label" for="inlineRadio2">Noto'g'ri</label>
                </div>
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