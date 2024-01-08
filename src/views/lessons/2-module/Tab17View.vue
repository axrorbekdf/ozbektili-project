<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">Savallarga javob bering!</h3>
            
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab16View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab18View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            

            <div class="col-12 col-md-6">
                <ol>
                    <li>Stul qayerda?</li>
                </ol>
                <p>Stul deraza<strong>ning</strong> <strong>yonida</strong>.</p>
                <ol start="2">
                    <li>Choynak qayerda?</li>
                </ol>
                <p>Choynak gazplita<InputText :id="75"/>.</p>
                <ol start="3">
                    <li>Pitsa qayerda?</li>
                </ol>
                <p>Pitsa muzlatgich<InputText :id="76"/>.</p>    
                <ol start="4">
                    <li>Qutilar qayerda?</li>
                </ol>
                <p>Qutilar karavot<InputText :id="77"/>.</p>
                <ol start="5">
                    <li>Stol qayerda?</li>
                </ol>
                <p>Stol divan<InputText :id="78"/>.</p>
                <ol start="6">
                    <li>Changyutgich qayerda?</li>
                </ol>
                <p>Changyutgich kir yuvish mashinasi<InputText :id="78"/>.</p>
            </div>

            <div class="col-12 col-md-6">
                <div class="row">
                    <div class="col-6">
                        <div class="d-flex flex-column align-items-center">
                            <img src="@/assets/2bolim/images/251.jpg" class="rounded float-start m-2" alt="..." style="width: 150px;">
                            <p>1-rasm</p>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex flex-column align-items-center">
                            <img src="@/assets/2bolim/images/252.jpg" class="rounded float-start m-2" alt="..." style="width: 150px;">
                            <p>2-rasm</p>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex flex-column align-items-center">
                            <img src="@/assets/2bolim/images/253.jpg" class="rounded float-start m-2" alt="..." style="width: 150px;">
                            <p>3-rasm</p>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex flex-column align-items-center">
                            <img src="@/assets/2bolim/images/254.jpg" class="rounded float-start m-2" alt="..." style="width: 150px;">
                            <p>4-rasm</p>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex flex-column align-items-center">
                            <img src="@/assets/2bolim/images/255.png" class="rounded float-start m-2" alt="..." style="width: 150px;">
                            <p>5-rasm</p>
                        </div>
                    </div>
                </div>
            </div>



            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab16View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab18View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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