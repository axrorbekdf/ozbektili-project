<template>
    <div class="container">
        <div class="row mt-5">                      
            <div class="col-12">

            <h3 class="fw-bold text-primary my-3">O‘qing. O‘ylang va toping. </h3>

            <!-- <ol class="list-group list-group-numbered col-md-12 col-12">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-medium">Men O'zbekiston<span class="text-success fw-bold">LIK</span>man </div>
                </div>
                <span @click="toggleAudio('men lik')" class="badge bg-primary rounded-pill"  style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span>
                <audio id="men lik">
                    <source src="@/assets/2dars/qiz/men lik.mp3" type="audio/mpeg">
                </audio>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-medium">Men O'zbekiston<span class="text-success fw-bold">DAN</span>man </div>
                </div>
                <span @click="toggleAudio('men dan')" class="badge bg-primary rounded-pill"  style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span>
                <audio id="men dan">
                    <source src="@/assets/2dars/qiz/men dan.mp3" type="audio/mpeg">
                </audio>
                </li>
            </ol> -->

            </div>


            <div class="col-12 col-md-6 mt-4">
                <img src="@/assets/2bolim/images/1131.jpg" alt="" align="left">
                <p>&nbsp; Mening ismim Erkin. Men shifokorman. Oilamiz 9 kishidan iborat. Otam va onam nafaqada. Rafiqam buxgalter. Mening uch o&lsquo;g&lsquo;lim va ikki qizim bor. To&lsquo;ng&lsquo;ich o&lsquo;g&lsquo;lim talaba. Nargiza va Akmal o&lsquo;quvchi. Kichkina qizim va o&lsquo;g&lsquo;lim bog&lsquo;cha tarbiyalanuvchisi. Bizning uyimiz Toshkent shahrida. Uyimizning raqami 156. Telefon raqamimiz 998-76-54.</p>
            </div>

            <div class="col-12 col-md-6">
                <TextChecked :data="item"  v-for="item,index in items" :key="index"/>
            </div>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab12View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab14View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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
                    id: 90,
                    question: "1. Erkinning oilasi sakkiz kishidan iborat.",
                    variants: [
                        "To'g'ri",
                        "Noto'g'ri",
                    ]
                },
                {
                    id: 91,
                    question: "2. Erkinning to‘ng‘ich farzandi o‘quvchi.",
                    variants: [
                        "To'g'ri",
                        "Noto'g'ri",
                    ]
                },
                {
                    id: 92,
                    question: "3. Erkinning rafiqasi buxgalter.",
                    variants: [
                        "To'g'ri",
                        "Noto'g'ri",
                    ]
                },
                {
                    id: 93,
                    question: "4. Nargiza va Akmal maktab o‘quvchilari.",
                    variants: [
                        "To'g'ri",
                        "Noto'g'ri",
                    ]
                },
                {
                    id: 94,
                    question: "5. Ularning uyi Toshkent shahrida.",
                    variants: [
                        "To'g'ri",
                        "Noto'g'ri",
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