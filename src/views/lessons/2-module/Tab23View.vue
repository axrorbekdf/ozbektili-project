<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">Tinglang. O‘ylang va toping. Yozing.</h3>
            
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab22View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab24View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <div class="col-6">
                <p class="fw-medium fs-4">Bugun oilamiz bog'da dam olyapti. Otam kresloda gazeta o&lsquo;qiyaptilar. Onam va singlim ovqat pishiryaptilar. Akam musiqa tinglayaptilar. Men hovuzda suzyapman. Bobom va buvim gaplashyaptilar. Fotima esa rasm chizyapti.</p>
            </div>
            <div class="col-6">
                <p style="border: 5px solid rgb(27, 26, 26);" class="p-2">
                    <b>1.</b> Oila a’zolari bog‘da nima qilyapti? Oila a’zolari bog‘da <InputText/>.
                </p>
                <p style="border: 5px solid rgb(27, 26, 26);" class="p-2">
                    <b>2.</b> Otam nima qilyaptilar? Otam gazeta <InputText/>.
                </p>
                <p style="border: 5px solid rgb(27, 26, 26);" class="p-2">
                    <b>3.</b> Men nima qilyapman? Men hovuzda <InputText/>.
                </p>
                <p style="border: 5px solid rgb(27, 26, 26);" class="p-2">
                    <b>4.</b> Fotima nima qilyapti? Fotima rasm <InputText/>.
                </p>
                <p style="border: 5px solid rgb(27, 26, 26);" class="p-2">
                    <b>5.</b> Onam va singlim nima qilyaptilar? Onam va singlim ovqat <InputText/>.
                </p>
                <p style="border: 5px solid rgb(27, 26, 26);" class="p-2">
                    <b>6.</b> Bobom va buvim nima qilyaptilar? Bobom va buvim <InputText/>.
                </p>
            </div>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab22View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab24View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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