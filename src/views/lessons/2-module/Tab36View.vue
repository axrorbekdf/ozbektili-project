<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">Grammatika.</h3>
            
            <h3 class="alert alert-success text-end">
                <p>Qayerda?</p>
                <p>…da</p>
            </h3>

            <div class="col-4 my-3 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/391.jpg" class="img-fluid" alt="..." style="width: 150px;">
                <h6 class="my-2 text-start">
                    - Talabalar qayerda? <br>
                    - Talabalar Universitetda.
                </h6>
            </div>

            <div class="col-4 my-3 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/392.jpg" class="img-fluid" alt="..." style="width: 210px;">
                <h6 class="my-2 text-start">
                    - Yo‘lovchilar qayerda? <br>
                    - Yo‘lovchilar <InputText/>
                </h6>
            </div>

            <div class="col-4 my-3 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/393.jpg" class="img-fluid" alt="..." style="width: 220px;">
                <h6 class="my-2 text-start">
                    - Erkin aka qayerda? <br>
                    - Erkin aka __________.
                </h6>
            </div>

            <div class="col-4 my-3 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/394.jpg" class="img-fluid" alt="..." style="width: 145px;">
                <h6 class="my-2 text-start">
                    - To‘ti qayerda? <br>
                    - To‘ti qafasda.
                </h6>
            </div>

            <div class="col-4 my-3 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/395.jpg" class="img-fluid" alt="..." style="width: 220px;">
                <h6 class="my-2 text-start">
                    - Bolalar qayerda? <br>
                    - Bolalar _____________.
                </h6>
            </div>

            <div class="col-4 my-3 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/396.jpg" class="img-fluid" alt="..." style="width: 300px;">
                <h6 class="my-2 text-start">
                    - Pullar qayerda? <br>
                    - Pullar __________.
                </h6>
            </div>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab16View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi
                </button>
                <button @click="chengeTabView('Tab17View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Darslarni tugatish <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
</template>
<script>
import InputText from '@/components/InputText.vue'
export default {
    components:{InputText},
    props:{
        error: {
            type: String
        }
    },
    methods:{
        chengeTabView(tab){
            this.$emit('chengeTabView', tab);
        }
    }
}
</script>
<style>
    
</style>