<template>
    <div class="container">
        <div class="row mt-5">
            
            <h3 class="fw-bold text-primary my-3">O'qing. O'ylang va toping. </h3>
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab8View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab10View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
            <div class="col-12 col-md-6 mt-4">
                <p class="fw-medium">Farida 06:00 da uyg&lsquo;onda. Bog&lsquo;da sayr qildi. Keyin yuvindi. Nonushta qilmadi, ammo bir payola choy ichdi. Soat 07:00 da uydan chiqdi. Ishga taksida ketdi.&nbsp; Kafeda tushlik qildi. Ishdan soat 18:30 da chiqdi. Supermarketga kirdi va yeguliklar oldi. Uyiga qaytdi. 19:00 da kechki ovqatni yedi. Biroz televizor tomosh qildi. Keyin kitob o&lsquo;qi. 22:00 da uxladi. Farida bugun juda charchadi.</p>
            </div>

            <div class="col-12 col-md-6">
                <h6>1. Fariza nonushta qildi.</h6>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" value="To'g'ri">
                    <label class="form-check-label" for="inlineRadio1">To'g'ri</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" value="Noto'g'ri">
                    <label class="form-check-label" for="inlineRadio2">Noto'g'ri</label>
                </div>

                <h6>2. Farida ishga metroda bordi.</h6>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions2" value="To'g'ri">
                    <label class="form-check-label" for="inlineRadio1">To'g'ri</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions2" value="Noto'g'ri">
                    <label class="form-check-label" for="inlineRadio2">Noto'g'ri</label>
                </div>

                <h6>3. Farida tushlikni kafeda qildi.</h6>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions3" value="To'g'ri">
                    <label class="form-check-label" for="inlineRadio1">To'g'ri</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions3" value="Noto'g'ri">
                    <label class="form-check-label" for="inlineRadio2">Noto'g'ri</label>
                </div>

                <h6>4. Farida ishdan olti yarimda chiqdi.</h6>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions4" value="To'g'ri">
                    <label class="form-check-label" for="inlineRadio1">To'g'ri</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions4" value="Noto'g'ri">
                    <label class="form-check-label" for="inlineRadio2">Noto'g'ri</label>
                </div>
            </div>

            

            <!-- <div class="col-md-12 col-12">
            <div class="card mb-3" style="max-width: 900px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <div class="row g-0 py-4">
                <div class="col-md-4 d-flex justify-content-center p-2">
                    <img src="@/assets/2dars/ppt/3 ta odam.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <div class="card-text"><strong>Botir:</strong> 
                        <div class="col-4 g-3 d-inline-block">
                            <input type="text" v-model="mashq1.word1.value" class="form-control form-control-sm" :class="[(mashq1.word1.status == true)?'is-valid':'', (mashq1.word1.status === false)?'is-invalid':'']" placeholder=" ______________________?" style="background-color: #a2e7f607; border: none;">
                        </div>
                        <Loader v-if="mashq1.isLoading" style="width: 1rem; height: 1rem;"/>
                    </div>
                    <div class="card-text"><strong>Murod:</strong> Va alaykum assalom! 
                        <div class="col-4 g-3 d-inline-block">
                            <input type="text" v-model="mashq1.word2.value" class="form-control form-control-sm" :class="[(mashq1.word2.status == true)?'is-valid':'', (mashq1.word2.status === false)?'is-invalid':'']" placeholder=" ______________________?" style="background-color: #a2e7f607; border: none;">
                        </div>
                        <Loader v-if="mashq1.isLoading" style="width: 1rem; height: 1rem;"/>
                    </div>
                    <p class="card-text"><strong>Botir:</strong> Botir. </p>
                    <div class="card-text"><strong>Murod:</strong> Meniki Murod. 
                        <div class="col-4 g-3 d-inline-block">
                            <input type="text" v-model="mashq1.word3.value" class="form-control form-control-sm" :class="[(mashq1.word3.status == true)?'is-valid':'', (mashq1.word3.status === false)?'is-invalid':'']" placeholder=" ______________________?" style="background-color: #a2e7f607; border: none;">
                        </div>
                        <Loader v-if="mashq1.isLoading" style="width: 1rem; height: 1rem;"/>
                    </div>
                    <p class="card-text"><strong>Murod:</strong> Men ham.</p>

                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button @click="toggleAudio('6 rasm')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                        <button type="button" @click="checkAnswerByStatus(1)" class="btn btn-success">Tekshirish</button>
                    </div>
                    <audio id="6 rasm">
                        <source src="@/assets/2dars/6 rasm.mp3" type="audio/mpeg">
                    </audio>
                    </div>
                </div>
                </div>
            </div>
            </div> -->

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab8View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab10View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    props:{
        error: {
            type: String
        }
    },
    data(){
        return {
            mashq1:{
                word1: {
                    value: '',
                },
                word2: {
                    value: '',
                },
                word3: {
                    value: '',
                },
                isLoading: null,
            },
            mashq2:{
                word1: {
                    value: '',
                },
                word2: {
                    value: '',
                },
                isLoading: null,
            },
            mashq3:{
                word1: {
                    value: '',
                },
                word2: {
                    value: '',
                },
                isLoading: null,
            },
            mashq4:{
                word1: {
                    value: '',
                },
                word2: {
                    value: '',
                },
                isLoading: null,
            },
        }
    },
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
        },
        checkAnswerByStatus(mashq){
            const exercise = {};
            switch(mashq){
                case 1: 
                    exercise.id = 36;
                    exercise.answer_body = [
                        this.mashq1.word1.value,
                        this.mashq1.word2.value,
                        this.mashq1.word3.value,
                    ];
                    this.mashq1.isLoading = true;
                break;
                case 2: 
                    exercise.id = 37;
                    exercise.answer_body = [
                        this.mashq2.word1.value,
                        this.mashq2.word2.value,
                    ];
                    this.mashq2.isLoading = true;
                break;
                case 3: 
                    exercise.id = 38;
                    exercise.answer_body = [
                        this.mashq3.word1.value,
                        this.mashq3.word2.value,
                    ];
                    this.mashq3.isLoading = true;
                break;
                case 4: 
                    exercise.id = 39;
                    exercise.answer_body = [
                        this.mashq4.word1.value,
                        this.mashq4.word2.value,
                    ];
                    this.mashq4.isLoading = true;
                break;
            }

            this.$store.dispatch('checkExercise', exercise)
            .then(response => {
                if(response.exercise_id == 36){
                    this.mashq1.word1.status = response.result[0];
                    this.mashq1.word2.status = response.result[1];
                    this.mashq1.word3.status = response.result[2];
                    this.mashq1.isLoading = false;
                }

                if(response.exercise_id == 37){
                    this.mashq2.word1.status = response.result[0];
                    this.mashq2.word2.status = response.result[1];
                    this.mashq2.isLoading = false;
                }

                if(response.exercise_id == 38){
                    this.mashq3.word1.status = response.result[0];
                    this.mashq3.word2.status = response.result[1];
                    this.mashq3.isLoading = false;
                }

                if(response.exercise_id == 39){
                    this.mashq4.word1.status = response.result[0];
                    this.mashq4.word2.status = response.result[1];
                    this.mashq4.isLoading = false;
                }
            })
            .catch(error => {
                this.mashq1.isLoading = false;
                this.mashq2.isLoading = false;
                this.mashq3.isLoading = false;
                this.mashq4.isLoading = false;
            });
        }
    }
}
</script>
<style>
    
</style>