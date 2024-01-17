<template>
    <div class="container">
        <div class="row mt-5">                      
        <div class="col-md-12">

            <h3 class="fw-bold text-primary my-3">Tinglang. O‘ylang va toping.</h3>
        
        </div>


        <div class="col-12 col-md-6 fw-medium" style="font-size: 10pt;">
            <p class="mb-2"><span class="fw-bold">Akmal:</span> Salom, Nazokat. Xayrli kun!</p>
            <p class="mb-2"><span class="fw-bold">Nazohat:</span> Salom. Xayrli kun!</p>
            <p class="mb-2"><span class="fw-bold">Akmal:</span> Yaxshimisan?</p>
            <p class="mb-2"><span class="fw-bold">Nazokat:</span> Rahmat, yaxshiman. O'zing-chi?</p>
            <p class="mb-2"><span class="fw-bold">Akmal:</span> Rahmat, men ham yaxshiman. Tanish bu mening tog'avachcham.</p>
            <p class="mb-2">Uning ismi Diyor.</p>
            <p class="mb-2"><span class="fw-bold">Nazokat:</span> Salom, Diyor! Mening ismim Nazokat. Men Akmalning sinfdoshiman.</p>
            <p class="mb-2"><span class="fw-bold">Diyor:</span> Salom, Nazokat! Tanishganimdan xursandman.</p>
            <p class="mb-2"><span class="fw-bold">Nazokat:</span> Men ham xursandman. Diyor, qayerliksan?</p>
            <p class="mb-2"><span class="fw-bold">Diyor:</span> Men samarqandlikman.</p>
            <p class="mb-2"><span class="fw-bold">Nazokat:</span> Zo'r-ku! Mening onam ham samarqandliklar. Toshkentga xush kelibsan.</p>
            <p class="mb-2"><span class="fw-bold">Diyor:</span> Rahmat! Toshkent menga juda yoqdi.</p>
            <p class="mb-2"><span class="fw-bold">Nazokat:</span> Xayr, yigitlar!</p>
            <p class="mb-2"><span class="fw-bold">Akmal:</span> Xayr, ko'rishguncha!</p>
        </div>

        <div class="col-12 col-md-6">
            <div class="list-group mb-3" v-for="item,index in items" :key="index">
                <TextChecked :data="item" />
            </div>
        </div>

            <!-- <ol class="list-group list-group-numbered col-md-12 col-12">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-medium">Men o'qituvchiman </div>
                    </div>
                    <span @click="toggleAudio('men o`')" class="badge bg-primary rounded-pill" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span>
                    <audio id="men o`">
                        <source src="@/assets/2dars/qiz/men o`.mp3" type="audio/mpeg">
                    </audio>
                </li>
            </ol> -->

        

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab10View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab12View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>


        </div>
    </div>
</template>
<script>
import TextChecked from '@/components/TextChecked.vue'
export default {
    components:{TextChecked},
    data(){
        return {
            items:[
                {
                    id: 87,
                    question: "Diyor Akmalning … .",
                    variants: [
                        "sinfdoshi",
                        "tog‘avachchasi",
                        "akasi",
                    ]
                },
                {
                    id: 88,
                    question: "Nazokatning onasi qayerlik?",
                    variants: [
                        "samarqandlik",
                        "toshkentlik",
                        "buxorolik"
                    ]
                },
                {
                    id: 89,
                    question: "Akmal necha yoshda?",
                    variants: [
                        "18",
                        "16",
                        "-"
                    ]
                }
            ]
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
<style>
    
</style>