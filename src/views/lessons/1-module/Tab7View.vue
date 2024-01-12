<template>
    <div class="container">
        <div class="row mt-5">
            
            <h3 class="fw-bold text-primary my-3">O'ylang va toping. Yozing. Salomlashish.</h3>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab6View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab8View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
            <div class="col-md-12 col-12">
                <div class="card mb-3" style="max-width: 900px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                    <div class="row g-0 py-4">
                    <div class="col-md-4 d-flex justify-content-center p-2">
                        <img src="@/assets/1bolim/images/231.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <div class="card-text">
                            <strong>O‘:</strong> 
                            <div class="col-4 g-3 d-inline-block">
                                <input type="text" v-model="mashq1.word1.value" class="form-control form-control-sm" :class="[(mashq1.word1.status == true)?'is-valid':'', (mashq1.word1.status === false)?'is-invalid':'']" placeholder=" ______________________?" style="background-color: #a2e7f607; border: none;">
                            </div>
                            <Loader v-if="mashq1.isLoading" style="width: 1rem; height: 1rem;"/>
                        </div>
                        <div class="card-text"><strong>D:</strong> Va alaykum assalom!  
                            <div class="col-4 g-3 d-inline-block">
                                <input type="text" v-model="mashq1.word2.value" class="form-control form-control-sm" :class="[(mashq1.word2.status == true)?'is-valid':'', (mashq1.word2.status === false)?'is-invalid':'']" placeholder=" ______________________?" style="background-color: #a2e7f607; border: none;">
                            </div>
                            <Loader v-if="mashq1.isLoading" style="width: 1rem; height: 1rem;"/>
                        </div>
                        <p class="card-text"><strong>O‘:</strong> Rahmat, yaxshiman.</p>

                        
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button @click="toggleAudio('1 rasm')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                            <button type="button" @click="checkAnswerByStatus(1)" class="btn btn-success">Tekshirish</button>
                        </div>
                        <audio id="1 rasm">
                            <source src="@/assets/2dars/1 rasm.mp3" type="audio/mpeg">
                        </audio>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="col-md-12 col-12">
                <div class="card mb-3" style="max-width: 900px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                    <div class="row g-0 py-4">
                    
                    <div class="col-md-8">
                        <div class="card-body">
                        <p class="card-text"><strong>O‘:</strong> Assalomu alaykum! </p>
                        <div class="card-text"><strong>D:</strong>
                            <div class="col-4 g-3 d-inline-block">
                                <input type="text" v-model="mashq2.word1.value" class="form-control form-control-sm" :class="[(mashq2.word1.status == true)?'is-valid':'', (mashq2.word1.status === false)?'is-invalid':'']" placeholder=" ______________________?" style="background-color: #a2e7f607; border: none;">
                            </div>
                            <Loader v-if="mashq2.isLoading" style="width: 1rem; height: 1rem;"/>
                        </div>
                        
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button @click="toggleAudio('2 rasm')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                            <button type="button" @click="checkAnswerByStatus(2)" class="btn btn-success">Tekshirish</button>
                        </div>
                        <audio id="2 rasm">
                            <source src="@/assets/2dars/2 rasm.mp3" type="audio/mpeg">
                        </audio>
                        </div>
                    </div>
                    <div class="col-md-4 d-flex justify-content-center p-2">
                        <img src="@/assets/1bolim/images/232.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    </div>
                </div>
            </div>

            <div class="col-md-12 col-12">
                <div class="card mb-3" style="max-width: 900px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                    <div class="row g-0 py-4">
                    <div class="col-md-4 d-flex justify-content-center p-2">
                        <img src="@/assets/1bolim/images/233.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <div class="card-text"><strong>Oybek:</strong> Iroda, 
                            <div class="col-4 g-3 d-inline-block">
                                <input type="text" v-model="mashq3.word1.value" class="form-control form-control-sm" :class="[(mashq3.word1.status == true)?'is-valid':'', (mashq3.word1.status === false)?'is-invalid':'']" placeholder=" ______________________?" style="background-color: #a2e7f607; border: none;">
                            </div>
                            <Loader v-if="mashq3.isLoading" style="width: 1rem; height: 1rem;"/>
                        </div>
                        <p class="card-text"><strong>Iroda:</strong> Rahmat, yaxshiman. O‘zing qalaysan? </p>
                        <p class="card-text"><strong>Oybek:</strong> Rahmat! Men ham yaxshiman.</p>

                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button @click="toggleAudio('3 rasm')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                            <button type="button" @click="checkAnswerByStatus(3)" class="btn btn-success">Tekshirish</button>
                        </div>
                        <audio id="3 rasm">
                            <source src="@/assets/2dars/3 rasm.mp3" type="audio/mpeg">
                        </audio>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="col-md-12 col-12">
                <div class="card mb-3" style="max-width: 900px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                    <div class="row g-0 py-4">
                    
                    <div class="col-md-8">
                        <div class="card-body">
                        <p class="card-text"><strong>1:</strong> Assalomu alaykum! Yaxshimisiz? </p>
                        <div class="card-text"><strong>2:</strong> Va alaykum assalom!
                            <div class="col-4 g-3 d-inline-block">
                                <input type="text" v-model="mashq4.word1.value" class="form-control form-control-sm" :class="[(mashq4.word1.status == true)?'is-valid':'', (mashq4.word1.status === false)?'is-invalid':'']" placeholder=" ______________________?" style="background-color: #a2e7f607; border: none;">
                            </div>
                            <Loader v-if="mashq4.isLoading" style="width: 1rem; height: 1rem;"/>
                        </div>
                        
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button @click="toggleAudio('4 rasm')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                            <button type="button" @click="checkAnswerByStatus(4)" class="btn btn-success">Tekshirish</button>
                        </div>
                        <audio id="4 rasm">
                            <source src="@/assets/2dars/4 rasm.mp3" type="audio/mpeg">
                        </audio>
                        </div>
                    </div>
                    <div class="col-md-4 d-flex justify-content-center p-2">
                        <img src="@/assets/1bolim/images/234.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    </div>
                </div>
            </div>

            <div class="col-md-12 col-12">
                <div class="card mb-3" style="max-width: 900px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                    <div class="row g-0 py-4">
                    <div class="col-md-4 d-flex justify-content-center p-2">
                        <img src="@/assets/1bolim/images/235.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <div class="card-text"><strong>Laylo:</strong> 
                            <div class="col-4 g-3 d-inline-block">
                                <input type="text" v-model="mashq5.word1.value" class="form-control form-control-sm" :class="[(mashq5.word1.status == true)?'is-valid':'', (mashq5.word1.status === false)?'is-invalid':'']" placeholder=" ______________________?" style="background-color: #a2e7f607; border: none;">
                            </div>, Madina? 
                            <Loader v-if="mashq5.isLoading" style="width: 1rem; height: 1rem;"/>
                        </div>
                        <p class="card-text"><strong>Madina:</strong> Tinchlik, Hammasi zo‘r. O‘zingda nima gaplar?</p>
                        <div class="card-text"><strong>Laylo:</strong> Rahmat! 
                            <div class="col-4 g-3 d-inline-block">
                                <input type="text" v-model="mashq5.word2.value" class="form-control form-control-sm" :class="[(mashq5.word2.status == true)?'is-valid':'', (mashq5.word2.status === false)?'is-invalid':'']" placeholder=" ______________________ ." style="background-color: #a2e7f607; border: none;">
                            </div>
                            <Loader v-if="mashq5.isLoading" style="width: 1rem; height: 1rem;"/>
                        </div>
                        
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button @click="toggleAudio('5 rasm')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                            <button type="button" @click="checkAnswerByStatus(5)" class="btn btn-success">Tekshirish</button>
                        </div>
                        <audio id="5 rasm">
                            <source src="@/assets/2dars/5 rasm.mp3" type="audio/mpeg">
                        </audio>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab6View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab8View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>

        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            mashq1:{
                word1: {
                    value: '',
                },
                word2: {
                    value: '',
                },
                isLoading: null,
            },
            mashq2:{
                word1: {
                    value: '',
                },
                isLoading: null,
            },
            mashq3:{
                word1: {
                    value: '',
                },
                isLoading: null,
            },
            mashq4:{
                word1: {
                    value: '',
                },
                isLoading: null,
            },
            mashq5:{
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
    methods: {
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
                    exercise.id = 1;
                    exercise.answer_body = [
                        this.mashq1.word1.value,
                        this.mashq1.word2.value,
                    ];
                    this.mashq1.isLoading = true;
                break;
                case 2: 
                    exercise.id = 2;
                    exercise.answer_body = [
                        this.mashq2.word1.value,
                    ];
                    this.mashq2.isLoading = true;
                break;
                case 3: 
                    exercise.id = 3;
                    exercise.answer_body = [
                        this.mashq3.word1.value,
                    ];
                    this.mashq3.isLoading = true;
                break;
                case 4: 
                    exercise.id = 4;
                    exercise.answer_body = [
                        this.mashq4.word1.value,
                    ];
                    this.mashq4.isLoading = true;
                break;
                case 5: 
                    exercise.id = 5;
                    exercise.answer_body = [
                        this.mashq5.word1.value,
                        this.mashq5.word2.value,
                    ];
                    this.mashq5.isLoading = true;
                break;
            }

            this.$store.dispatch('checkExercise', exercise)
            .then(response => {
                if(response.exercise_id == 1){
                    this.mashq1.word1.status = response.result[0];
                    this.mashq1.word2.status = response.result[1];
                    this.mashq1.isLoading = false;
                }

                if(response.exercise_id == 2){
                    this.mashq2.word1.status = response.result[0];
                    this.mashq2.isLoading = false;
                }

                if(response.exercise_id == 3){
                    this.mashq3.word1.status = response.result[0];
                    this.mashq3.isLoading = false;
                }

                if(response.exercise_id == 4){
                    this.mashq4.word1.status = response.result[0];
                    this.mashq4.isLoading = false;
                }

                if(response.exercise_id == 5){
                    this.mashq5.word1.status = response.result[0];
                    this.mashq5.word2.status = response.result[1];
                    this.mashq5.isLoading = false;
                }
            })
            .catch(error => {
                this.mashq1.isLoading = false;
                this.mashq2.isLoading = false;
                this.mashq3.isLoading = false;
                this.mashq4.isLoading = false;
                this.mashq5.isLoading = false;
            });
        }
    }
}
</script>
<style>
</style>