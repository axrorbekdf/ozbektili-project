<template>
    <div class="container">
        <div class="row mt-5">
            
            <div class="col-12">
                <h3 class="fw-bold text-primary">O'qing</h3>
                <p class="text">Diqqat qiling!</p>
            </div>
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab1View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab3View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            

            <div class="col-12 col-md-12 d-flex align-items-center">
                <img src="@/assets/3bolim/images/141.jpg" alt="">
                <input type="text" v-model="todos.item2.answer"  class="d-inline-block form-control" style="width: 70px;" maxlength="1" size="1">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':todos.item1.current == todos.item1.answer}">{{ todos.item1.text }}</h4>
            </div>

            <div class="col-12 col-md-12 d-flex align-items-center">
                <img src="@/assets/3bolim/images/142.jpg" alt="">
                <input type="text" v-model="todos.item6.answer"  class="d-inline-block form-control" style="width: 70px;" maxlength="1" size="1">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':todos.item2.current == todos.item2.answer}">{{ todos.item2.text }}</h4>
            </div>

            <div class="col-12 col-md-12 d-flex align-items-center">
                <img src="@/assets/3bolim/images/143.jpg" alt="">
                <input type="text" v-model="todos.item5.answer"  class="d-inline-block form-control" style="width: 70px;" maxlength="1" size="1">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':todos.item3.current == todos.item3.answer}">{{ todos.item3.text }}</h4>
            </div>

            <div class="col-12 col-md-12 d-flex align-items-center">
                <img src="@/assets/3bolim/images/144.jpg" alt="">
                <input type="text" v-model="todos.item1.answer" class="d-inline-block form-control" style="width: 70px;" maxlength="1" size="1">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':todos.item4.current == todos.item4.answer}">{{ todos.item4.text }}</h4>
            </div>

            <div class="col-12 col-md-12 d-flex align-items-center">
                <img src="@/assets/3bolim/images/145.jpg" alt="">
                <input type="text" v-model="todos.item3.answer"  class="d-inline-block form-control" style="width: 70px;" maxlength="1" size="1">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':todos.item5.current == todos.item5.answer}">{{ todos.item5.text }}</h4>
            </div>

            <div class="col-12 col-md-12 d-flex align-items-center">
                <img src="@/assets/3bolim/images/146.jpg" alt="">
                <input type="text" v-model="todos.item4.answer" class="d-inline-block form-control" style="width: 70px;" maxlength="1" size="1">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':todos.item6.current == todos.item6.answer}">{{ todos.item6.text }}</h4>
            </div>

            <!-- <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('o`')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="o`">
                            <source src="@/assets/ovoz/ovoz_qiz/o`.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/ordak.png" style="width: 10vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 20pt; color: rgb(244, 72, 24);">O'o'</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: rgba(10, 39, 182, 0.575);"><span style="color: red;">O'</span>rdak</p>
                </div>
            </div>
            </div> -->

        </div>

        <div class="row justify-content-center align-items-center">
        
            <div class="col-12 d-flex justify-content-between my-4">
                <button @click="chengeTabView('Tab1View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab3View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            todos:{
                item1: {
                    image: "141.jpg",
                    text: "A) 17:10 / beshdan o‘nta o’tdi.",
                    current: "A",
                    answer: ''
                },
                item2: {
                    image: "142.jpg",
                    text: "B) 09:40 / yigirmata kam o'n.",
                    current: "B",
                    answer: 'B'
                },
                item3: {
                    image: "143.jpg",
                    text: "D) 18:05 / oltidan beshta o‘tdi.",
                    current: "D",
                    answer: ''
                },
                item4: {
                    image: "144.jpg",
                    text: "E) 12:35 / yigirma beshta kam bir.",
                    current: "E",
                    answer: ''
                },
                item5: {
                    image: "145.jpg",
                    text: "F) 04:10 / to‘rtdan o‘nta o’tdi.",
                    current: "F",
                    answer: ''
                },
                item6: {
                    image: "146.jpg",
                    text: "G) 05:35 / yigirma beshta kam olti.",
                    current: "G",
                    answer: ''
                }
            }
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
<style scoped>
</style>