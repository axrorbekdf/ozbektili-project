<template>
    <div class="container">
        <div class="row mt-5">
            
            <h3 class="fw-bold text-primary my-3">O'ylang va toping.</h3>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab7View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab9View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
    

            <div class="col-2 mx-1 my-1 p-0" v-for="item in items" :key="item.id">
                <h4 draggable="true" @dragstart="startDrag($event, item)" class="w-100 my-0 btn btn-secondary" :class="{'text-decoration-line-through':item.status}">{{ item.variant }}</h4>
            </div>

            <p class="mt-4 mb-0 text-danger fw-bold">Yuqoridagi so'zlardan mosini kerakli o'ringa joylashtiring.</p>
            <div class="col-12 col-md-12 d-flex align-items-between my-1" v-for="item in items" :key="item.id">
                <h4 class="mx-0 my-0 d-flex align-items-center" :class="{'text-decoration-line-through':false}">{{ item.id }}. {{ item.short_word }}</h4>
                <input 
                    @drop="onDrop($event, item)" 
                    @dragenter.prevent @dragover.prevent 
                    type="text" 
                    class="form-control fw-medium" 
                    placeholder="_________________________"
                    style="font-size: 18pt;"
                >
            </div>

            <!-- <div class="col-md-12 col-12">
                <div class="card mb-3" style="max-width: 740px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                    <div class="row g-0 py-4 align-items-center">
                        <div class="col-md-4 d-flex justify-content-center p-2">
                            <img src="@/assets/2dars/ppt/3 ta odam.jpg" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <p class="card-text"><strong>Botir:</strong> Assalomu alaykum!</p>
                            <p class="card-text"><strong>Murod:</strong> Va alaykum assalom! Ismingiz nima?</p>
                            <p class="card-text"><strong>Botir:</strong> Botir. </p>
                            <p class="card-text"><strong>Murod:</strong> Meniki Murod. Tanishganimdan xursandman.</p>
                            <p class="card-text"><strong>Murod:</strong> Men ham.</p>

                            <button @click="toggleAudio('6 rasm')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                            <audio id="6 rasm">
                            <source src="@/assets/2dars/6 rasm.mp3" type="audio/mpeg">
                        </audio>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab7View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab9View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>

        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            items:[
                {
                    id: 1,
                    short_word: "Biz maktabdan",
                    fillerId: 3,
                    filler: "keldik.",
                    variant: "tozaladim.",
                    status: false
                },
                {
                    id: 2,
                    short_word: "Ular kino",
                    fillerId: 4,
                    filler: "ko‘rdilar.",
                    variant: "o‘qidi.",
                    status: false
                },
                {
                    id: 3,
                    short_word: "Men xonani",
                    fillerId: 1,
                    filler: "tozaladim.",
                    variant: "keldik.",
                    status: false
                },
                {
                    id: 4,
                    short_word: "Siz musiqa",
                    fillerId: 7,
                    filler: "tingladingiz.",
                    variant: "ko‘rdilar.",
                    status: false
                },
                {
                    id: 5,
                    short_word: "U gazetani",
                    fillerId: 2,
                    filler: "o‘qidi.",
                    variant: "o‘ylading?",
                    status: false
                },
                {
                    id: 6,
                    short_word: "Sen nimani",
                    fillerId: 5,
                    filler: "o‘ylading?",
                    variant: "bordim.",
                    status: false
                },
                {
                    id: 7,
                    short_word: "Men uyga",
                    fillerId: 6,
                    filler: "bordim.",
                    variant: "tingladingiz.",
                    status: false
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
        },
        
        startDrag(evt, item) {
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.setData(`item${item.id}`, item.id)
        },
        onDrop(evt, item) {
            const itemID = evt.dataTransfer.getData(`item${item.fillerId}`)
            if(item.fillerId == itemID){
                this.items.filter((sell) => {
                    if(sell.id == itemID)
                        sell.status = true
                })
                evt.target.value = item.filler;
                evt.target.style.width = (item.filler.length*15)+'px';
            }
        },
    }
}
</script>
<style scoped>
    input, input:focus{
        border: none;
        outline: none;
        width: 5rem;
        background-color: inherit;
        color: inherit;
    }
</style>