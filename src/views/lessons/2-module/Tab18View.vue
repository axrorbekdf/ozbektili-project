<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">O‘qing. O’ylang va toping.</h3>
            
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab17View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab19View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <div class="col-12 col-md-6 mt-4">
                <p class="fw-medium">&nbsp; Salom. Mening ismim Nilufar. Bu bizning uyimiz. Uyimiz to&lsquo;rt xonadan iborat: mehmonxona, oshxona, yotoqxona va bolalar xonasi. Bu yer mehmonxona. Mehmonxonada divan, televizor va gilam bor. Bu yer oshxona. Oshxonada gaz plitasi, muzlatgich va xontaxta bor. Bu esa mening xonam. Mening xonam mehmonxonaning yonida. Bu yerda mening karavotim, kitob javonim va o&lsquo;yinchoqlarim bor. Uyimizda men ota-onam bilan yashayman.</p>
            </div>


            <div class="col-12 col-md-6">
                <TextChecked :data="item"  v-for="item,index in items" :key="index"/>
            </div>

            
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab16View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab17View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
</template>
<script>
import TextChecked from '@/components/TextChecked.vue'
export default {
    props:{
        error: {
            type: String
        }
    },
    components:{TextChecked},
    data(){
        return {
            items:[
                {
                    id: 95,
                    question: "1. Nilafar ota-onasi va bobosi bilan yashaydi.",
                    variants: [
                        "To'g'ri",
                        "Noto'g'ri",
                    ]
                },
                {
                    id: 96,
                    question: "2. Oshxonada stol-stul yo‘q.",
                    variants: [
                        "To'g'ri",
                        "Noto'g'ri",
                    ]
                },
                {
                    id: 97,
                    question: "3. Nilufarning uyida yerto‘la bor.",
                    variants: [
                        "To'g'ri",
                        "Noto'g'ri",
                    ]
                },
                {
                    id: 98,
                    question: "4. Bolalar xonasi yotoqxonaning oldida.",
                    variants: [
                        "To'g'ri",
                        "Noto'g'ri",
                    ]
                }
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