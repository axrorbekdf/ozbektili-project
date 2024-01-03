<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">Grammatika</h3>

            <h3 class="alert alert-success text-end">
                <p>Qayerdan?</p>
                <p>…dan</p>
            </h3>
            
            <div class="col-12" style="display:flex; align-items:center;">
                <img src="@/assets/2bolim/images/361.jpg" class="img-fluid" alt="..." style="width: 250px;">
                <div class="alert alert-info px-4 py-1 mx-3" style="border-radius: 0;">
                    <p class="m-0 text-start">(Siz) <b>Qayerdan</b> kelyapsiz?</p>
                    <p class="m-0 text-start">(Men) Kinoteatr<span class="text-danger fw-bold">dan</span> kelyapman.</p>
                </div> 
            </div>

            <div class="col-12" style="display:flex; align-items:center; justify-content: end;">
                
                <div class="alert alert-info px-4 py-1 mx-3" style="border-radius: 0;">
                    <p class="m-0 text-start">Bolalar <b>qayerdan</b> kelyaptilar?</p>
                    <p class="m-0 text-start">Bolalar <InputText/> kelyaptilar.</p>
                </div> 
                <img src="@/assets/2bolim/images/362.jpg" class="img-fluid" alt="..." style="width: 250px;">
            </div>

            <div class="col-12" style="display:flex; align-items:center;">
                <img src="@/assets/2bolim/images/363.jpg" class="img-fluid" alt="..." style="width: 250px;">
                <div class="alert alert-info px-4 py-1 mx-3" style="border-radius: 0;">
                    <p class="m-0 text-start">Turist <b>qayerdan</b> kelyapti?</p>
                    <p class="m-0 text-start">Turist <InputText/> kelyapti.</p>
                </div> 
            </div>

            <div class="col-12" style="display:flex; align-items:center; justify-content: end;">
                
                <div class="alert alert-info px-4 py-1 mx-3" style="border-radius: 0;">
                    <p class="m-0 text-start">Oilangiz <b>qayerdan</b> kelyapti?</p>
                    <p class="m-0 text-start">Oilamiz <InputText/> kelyapti.</p>
                </div> 
                <img src="@/assets/2bolim/images/364.jpg" class="img-fluid" alt="..." style="width: 250px;">
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