<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">Bu kim? Bu nima?</h3>


            <div class="alert alert-success w-75" role="alert">
                
                <ul class="list-group">
                    <li class="list-group-item" style="background-color: inherit;"> -  Bu, u, bular, ular, bu yer, u yer</li>
                    <li class="list-group-item" style="background-color: inherit;"> -  Kim? nima? qayer?</li>
                    <li class="list-group-item" style="background-color: inherit;"> -  -mi / emas</li>
                    <li class="list-group-item" style="background-color: inherit;"> -  Ha, yo‘q</li>
                    <li class="list-group-item" style="background-color: inherit;"> -  Bor, yo‘q</li>
                </ul>
            </div>


            <h3 class="fw-bold text-primary my-3">Diqqat qiling.</h3>

            <div class="col-3 d-flex flex-column align-items-center">
                <img src="@/assets/1bolim/images/321.png" class="rounded float-start" alt="..." style="width: 120px;">
                <p>sumka</p>
            </div>

            <div class="col-3 d-flex flex-column align-items-center">
                <img src="@/assets/1bolim/images/331.png" class="rounded float-start" alt="...">
                <p>ryukzak</p>
            </div>

            <div class="col-3 d-flex flex-column align-items-center">
                <img src="@/assets/1bolim/images/322.png" class="rounded float-start" alt="..." style="width: 135px;">
                <p>it</p>
            </div>

            <div class="col-3 d-flex flex-column align-items-center">
                <img src="@/assets/1bolim/images/327.png" class="rounded float-start" alt="..." style="width: 100px;">
                <p>bog‘bon</p>
            </div>


            <div class="col-3 d-flex flex-column align-items-center">
                <img src="@/assets/1bolim/images/361.jpg" class="rounded float-start" alt="..." style="width: 120px;">
                <p>farmasevt</p>
            </div>

            <div class="col-3 d-flex flex-column align-items-center">
                <img src="@/assets/1bolim/images/3313.jpg" class="rounded float-start" alt="..." style="width: 130px;">
                <p>qo‘shiqchi</p>
            </div>

            <div class="col-3 d-flex flex-column align-items-center">
                <img src="@/assets/1bolim/images/333.jpg" class="rounded float-start" alt="..." style="width: 145px;">
                <p>maktab</p>
            </div>

            <div class="col-3 d-flex flex-column align-items-center">
                <img src="@/assets/1bolim/images/335.jpg" class="rounded float-start" alt="..." style="width: 160px;">
                <p>supermarket</p>
            </div>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab17View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab19View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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