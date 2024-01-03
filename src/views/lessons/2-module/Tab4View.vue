<template>
    <div class="container">
        <div class="row mt-5">
            
            <div class="col-6">
                <h3 class="fw-bold text-primary">O'ylang va toping. Yozing.</h3>
                <p class="text">Diqqat qiling!</p>

                <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            </div>
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab3View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab5View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
            
            <div class="col-12 col-md-6">
                <Card class="mb-3">
                    <template #title> Bu sening singlingmi?</template>
                    <template #content>
                        <p class="m-0">
                            Ha, bu mening singlim.
                        </p>
                    </template>
                </Card>
            </div>

            <div class="col-12 col-md-6">
                <Card class="mb-3">
                    <template #title> Sizning ismingiz nima?</template>
                    <template #content>
                        <p class="m-0">
                            Men<InputText/> ism<InputText/> Akmal
                        </p>
                    </template>
                </Card>
            </div>

            <div class="col-12 col-md-6">
                <Card class="mb-3">
                    <template #title> U sizning akangizmi?</template>
                    <template #content>
                        <p class="m-0">
                            Yo‘q, u men<InputText/> aka<InputText/> emas.
                        </p>
                    </template>
                </Card>
            </div>

            <div class="col-12 col-md-6">
                <Card class="mb-3">
                    <template #title>Sizning oilangiz kattami?</template>
                    <template #content>
                        <p class="m-0">
                            Ha, biz<InputText/> oila<InputText/> katta.
                        </p>
                    </template>
                </Card>
            </div>

            <div class="col-12 col-md-6">
                <Card class="mb-3">
                    <template #title>Bu yer bizning maktabimizmi?</template>
                    <template #content>
                        <p class="m-0">
                            Ha, bu yer biz<InputText/> maktab <InputText/> .
                        </p>
                    </template>
                </Card>
            </div>

            <div class="col-12 col-md-6">
                <Card class="mb-3">
                    <template #title>Bu bizning uyimizmi?</template>
                    <template #content>
                        <p class="m-0">
                            Yo‘q, bu biz<InputText/> uy<InputText/> emas.
                        </p>
                    </template>
                </Card>
            </div>

            


            
            <!-- <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('b')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: orange;"></i> 
                        </button>
                        <audio id="b">
                            <source src="@/assets/ovoz/ovoz_qiz/b.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/banan.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: orange;">Bb</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: orange;">n a b a n</p>
    
                    <Word :id="24" :current_latter="'banan'" :incomplete="''"/>
                </div>
            </div>
            </div> -->

            
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
import Card from 'primevue/card';
import InputText from '@/components/InputText.vue'
export default {
    components:{Word,Card,InputText},
    props:{
        error: {
            type: String
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
        }
    }
}
</script>
<style scoped>
</style>