<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">Savollarga javob bering.</h3>


            <div class="col-12">
                <div class="card mb-3" style="max-width: 900px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <div class="row g-0 py-4">
                    <div class="col-md-12  d-flex align-content-center p-2">
                        <video controls class="img-fluid rounded-start">
                            <source src="@/assets/1bolim/images/371.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    
                    <div class="col-md-12">
                        <div class="card-body" style="font-size: 10pt;">
                            <p><b>Yusuf:</b> Salom, Zafar!</p>
                            <p><b>Zafar:</b> Salom, Yusuf! Qalaysan?</p>
                            <p><b>Yusuf:</b> Rahmat, yaxshiman. O&lsquo;zing qalaysan?</p>
                            <p><b>Zafar:</b> Men ham yaxshiman! Bu kim?</p>
                            <p><b>Yusuf:</b> Bu &ndash; Rashid. Qarindoshim.</p>
                            <p><b>Zafar:</b> Salom, Rashid! Men Zafarman.</p>
                            <p><b>Rashid:</b> Salom. Tanishganimdan xursandman.</p>
                            <p><b>Zafar:</b> Men ham xursandman, Rashid. Xush kelibsan!</p>
                            <p><b>Rashid:</b> Rahmat!</p>
                            <p><b>Zafar:</b> Yusuf, Rashid qayerdan?</p>
                            <p><b>Yusuf:</b> U buxorolik.</p>
                            <p><b>Zafar:</b> U o&lsquo;quvchimi?</p>
                            <p><b>Yusuf:</b> Ha, u o&lsquo;quvchi.</p>
                            <p><b>Zafar:</b> Yusuf, bu nima?</p>
                            <p><b>Yusuf:</b> Bu planshet! <b>Zafar:</b> U kichik kompyutermi?</p>
                            <p><b>Rashid:</b> Yo&lsquo;q, u katta telefon. Til o&lsquo;rganish uchun qulay.</p>
                            <p><b>Yusuf:</b> Yaxshi. Men magazinga ketyapman. Bo&lsquo;pti, xayr!</p>
                            <p><b>Zafar:</b> Bo&lsquo;pti, o&lsquo;rtoq. Ko&lsquo;rishguncha!</p>

                            <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                        </div>
                    </div>
                </div>
                </div>
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
import InputText from '../../../components/InputText.vue'
import TextChecked from '@/components/TextChecked.vue'
export default {
    components:{InputText,TextChecked},
    props:{
        error: {
            type: String
        }
    },
    data(){
        return {
            items:[
                {
                    id: 158,
                    question: "3: Zebo o'qituvhi?",
                    variants: [
                        "Ha",
                        "Yo'q",
                    ]
                },
                {
                    id: 159,
                    question: "4: Zuhra talaba?",
                    variants: [
                        "Ha",
                        "Yo'q",
                    ]
                },
            ]
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