<template>
    <div class="container">
        <div class="row mt-5">
            
            <h3 class="fw-bold text-primary my-3">O'ylang va toping. Yozing.</h3>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab6View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab8View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <div class="col-6 mt-4">   
                <table class="table table-bordered text-center fw-medium">
                    <thead>
                        <tr>
                            <td>Men</td>
                            <td rowspan="6" class="align-middle">bormoq + di +</td>
                            <td><InputTextDi :id="121" :incomplete="'kel'"/></td>
                        </tr>
                        <tr>
                            <td>Sen</td>
                            <td>bording</td>
                        </tr>
                        <tr>
                            <td>U</td>
                            <td><InputTextDi :id="123" :incomplete="'kel'"/></td>
                        </tr>
                        <tr>
                            <td>Biz</td>
                            <td><InputTextDi :id="124" :incomplete="'kel'"/></td>
                        </tr>
                        <tr>
                            <td>Siz</td>
                            <td><InputTextDi :id="125" :incomplete="'kel'"/></td>
                        </tr>
                        <tr>
                            <td>Ular </td>
                            <td><InputTextDi :id="126" :incomplete="'kel'"/></td>
                        </tr>
                    </thead>
                </table>
            </div>

            <div class="col-6 mt-4">   
                <table class="table table-bordered text-center fw-medium">
                    <thead>
                        <tr>
                            <td>Men</td>
                            <td rowspan="6" class="align-middle">yuvinmoq + di +</td>
                            <td><InputTextDi :id="121" :incomplete="'yuvin'"/></td>
                        </tr>
                        <tr>
                            <td>Sen</td>
                            <td><InputTextDi :id="122" :incomplete="'yuvin'"/></td>
                        </tr>
                        <tr>
                            <td>U</td>
                            <td><InputTextDi :id="123" :incomplete="'yuvin'"/></td>
                        </tr>
                        <tr>
                            <td>Biz</td>
                            <td><InputTextDi :id="124" :incomplete="'yuvin'"/></td>
                        </tr>
                        <tr>
                            <td>Siz</td>
                            <td><InputTextDi :id="125" :incomplete="'yuvin'"/></td>
                        </tr>
                        <tr>
                            <td>Ular </td>
                            <td>yuvindilar</td>
                        </tr>
                    </thead>
                </table>
            </div>

            <div class="col-6 mt-4">   
                <table class="table table-bordered text-center fw-medium">
                    <thead>
                        <tr>
                            <td>Men</td>
                            <td rowspan="6" class="align-middle">chizmoq + di +</td>
                            <td><InputTextDi :id="121" :incomplete="'chiz'"/></td>
                        </tr>
                        <tr>
                            <td>Sen</td>
                            <td><InputTextDi :id="122" :incomplete="'chiz'"/></td>
                        </tr>
                        <tr>
                            <td>U</td>
                            <td><InputTextDi :id="123" :incomplete="'chiz'"/></td>
                        </tr>
                        <tr>
                            <td>Biz</td>
                            <td>chizdik</td>
                        </tr>
                        <tr>
                            <td>Siz</td>
                            <td><InputTextDi :id="125" :incomplete="'chiz'"/></td>
                        </tr>
                        <tr>
                            <td>Ular </td>
                            <td><InputTextDi :id="126" :incomplete="'chiz'"/></td>
                        </tr>
                    </thead>
                </table>
            </div>

            <div class="col-6 mt-4">   
                <table class="table table-bordered text-center fw-medium">
                    <thead>
                        <tr>
                            <td>Men</td>
                            <td rowspan="6" class="align-middle">yozmoq + di +</td>
                            <td>yozdim</td>
                        </tr>
                        <tr>
                            <td>Sen</td>
                            <td><InputTextDi :id="122" :incomplete="'yoz'"/></td>
                        </tr>
                        <tr>
                            <td>U</td>
                            <td><InputTextDi :id="123" :incomplete="'yoz'"/></td>
                        </tr>
                        <tr>
                            <td>Biz</td>
                            <td><InputTextDi :id="124" :incomplete="'yoz'"/></td>
                        </tr>
                        <tr>
                            <td>Siz</td>
                            <td><InputTextDi :id="125" :incomplete="'yoz'"/></td>
                        </tr>
                        <tr>
                            <td>Ular</td>
                            <td><InputTextDi :id="126" :incomplete="'yoz'"/></td>
                        </tr>
                    </thead>
                </table>
            </div>

            
            
            <!-- <div class="col-md-12 col-12">
                <div class="card mb-3" style="max-width: 900px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                    <div class="row g-0 py-4">
                    <div class="col-md-4 d-flex justify-content-center p-2">
                        <img src="@/assets/2dars/ppt/3 ta odam.jpg" class="img-fluid rounded-start" alt="...">
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
            </div> -->

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
import Card from 'primevue/card';
import InputTextDi from '../../../components/InputTextDi.vue';

export default {
    components:{
        Card,
        InputTextDi,
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