<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">O‘ylang va toping. Yozing.</h3>



            <div class="col-5 text-start border m-4">
                <h6 class="card-title p-3">
                    1. <InputText :id="157"/>  nima? <br>
                    Bu  olma.
                </h6>
            </div>

            <div class="col-5 text-start border m-4">
                <h6 class="card-title p-3">
                    4. <InputText :id="157"/> ? <br>
                    Bu yer supermarket.
                </h6>
            </div>

            <div class="col-5 text-start border m-4">
                <h6 class="card-title p-3">
                    2. <InputText :id="157"/>? <br>
                    U o‘qituvchi.
                </h6>
            </div>

            <div class="col-5 text-start border m-4">
                <h6 class="card-title p-3">
                    5. Bu  <InputText :id="157"/>? <br>
                    <InputText :id="157"/> stomotolog.
                </h6>
            </div>

            <div class="col-5 text-start border m-4">
                <h6 class="card-title p-3">
                    3. U yer  <InputText :id="157"/>? <br>
                    <InputText :id="157"/>  maktab.
                </h6>
            </div>

            <div class="col-5 text-start border m-4">
                <h6 class="card-title p-3">
                    6. U <InputText :id="157"/>? <br>
                    <InputText :id="157"/>  daftar.
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