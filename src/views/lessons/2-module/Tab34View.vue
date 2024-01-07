<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">Grammatika</h3>

            <h3 class="alert alert-success text-end">
                <p>Qayerga?</p>
                <p>…ga</p>
            </h3>
            
            <div class="col-12" style="display:flex; align-items:center;">
                <img src="@/assets/2bolim/images/371.jpg" class="img-fluid" alt="..." style="width: 250px;">
                <div class="alert alert-info px-4 py-1 mx-3" style="border-radius: 0;">
                    <p class="m-0 text-start">- (Sen) <b>Qayerga</b> ketyapsan?</p>
                    <p class="m-0 text-start">- (Men) Kutubxona<span class="text-danger fw-bold">ga</span> ketyapman.</p>
                </div> 
            </div>

            <div class="col-12" style="display:flex; align-items:center; justify-content: end;">
                
                <div class="alert alert-info px-4 py-1 mx-3" style="border-radius: 0;">
                    <p class="m-0 text-start">- (Siz) <b>Qayerga</b> uchyapsiz?</p>
                    <p class="m-0 text-start">- (Men) <InputText :id="112"/> uchyapman.</p>
                </div> 
                <img src="@/assets/2bolim/images/372.jpg" class="img-fluid" alt="..." style="width: 250px;">
            </div>

            <div class="col-12" style="display:flex; align-items:center;">
                <img src="@/assets/2bolim/images/373.jpg" class="img-fluid" alt="..." style="width: 250px;">
                <div class="alert alert-info px-4 py-1 mx-3" style="border-radius: 0;">
                    <p class="m-0 text-start">- (Siz) Bu xatni b   <b>qayerga</b> jo‘natyapsiz?</p>
                    <p class="m-0 text-start">- (Men) Xatni <InputText :id="113"/> jo‘natyapman.</p>
                </div> 
            </div>

            <div class="col-12" style="display:flex; align-items:center; justify-content: end;">
                
                <div class="alert alert-info px-4 py-1 mx-3" style="border-radius: 0;">
                    <p class="m-0 text-start">- (Sen) <b>Qayerga</b> boryapsan?</p>
                    <p class="m-0 text-start">- (Men) <InputText :id="114"/> boryapman.</p>
                </div> 
                <img src="@/assets/2bolim/images/374.jpg" class="img-fluid" alt="..." style="width: 250px;">
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