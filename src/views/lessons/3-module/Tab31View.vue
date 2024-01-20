<template>
    <div class="container">
        <div class="row mt-5">

        <h3 class="fw-bold text-primary my-3">O’qing. O‘ylang va toping.</h3>

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab30View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab32View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>
            

        <div class="col-8">
            <p class="fw-medium fs-3 justify-content-center">
                Tanishing. Bu Laylo. Toshkentda yashaydi. U hamshira. Ko&lsquo;z kasalliklari klinikasida ishlaydi. Laylo <input 
                    @drop="onDrop($event, 5)" 
                    @dragenter.prevent @dragover.prevent 
                    type="text" 
                    class="fw-medium" 
                    placeholder="_________________________"
                    style="font-size: 18pt;"
                > yoki kechasi ishlaydi. <input 
                    @drop="onDrop($event, 2)" 
                    @dragenter.prevent @dragover.prevent 
                    type="text" 
                    class="fw-medium" 
                    placeholder="_________________________"
                    style="font-size: 18pt;"
                > 09:00 da ishga boradi. Laylo <input 
                    @drop="onDrop($event, 1)" 
                    @dragenter.prevent @dragover.prevent 
                    type="text" 
                    class="fw-medium" 
                    placeholder="_________________________"
                    style="font-size: 18pt;"
                > dam oladi. <input 
                    @drop="onDrop($event, 3)" 
                    @dragenter.prevent @dragover.prevent 
                    type="text" 
                    class="fw-medium" 
                    placeholder="_________________________"
                    style="font-size: 18pt;"
                > uyga metroda qaytadi. Kechasi televizor ko&lsquo;rishni yoqtiradi.
            </p>
            <p class="mt-4 mb-0 text-danger fw-bold">Pastdagi so'zlardan mosini kerakli o'ringa joylashtiring.</p>
            <h3>
                <span 
                    draggable="true"
                    v-for="item in items" :key="item.id"
                    @dragstart="startDrag($event, item)"
                    class="badge bg-info mx-1" 
                    :class="{'text-decoration-line-through':item.status}"
                >
                    {{ item.filler}}
                </span>
            </h3>
        </div>
        <div class="col-4">
            <img src="@/assets/3bolim/images/361.png" class="img-fluid" alt="...">
        </div>

        <!-- <div class="col-md-3 col-12">
            <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <img src="@/assets/ikkidost.png" class="card-img-top mx-auto" alt="..." style="width:120px">
                <div class="card-body text-center">
                    <h5 class="card-title">Sog' bo'ling !</h5>
                    <button @click="toggleAudio('sog boling')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                    <audio id="sog boling">
                        <source src="@/assets/2dars/qiz/sog boling.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>
        </div> -->

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab30View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab32View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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
                    filler: "kechasi",
                    status: false
                },
                {
                    id: 2,
                    filler: "ertalab",
                    status: false
                },
                {
                    id: 3,
                    filler: "oqshom",
                    status: false
                },

                {
                    id: 4,
                    filler: "tushda",
                    status: false
                },
                {
                    id: 5,
                    filler: "kunduzi",
                    status: false
                },
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
        onDrop(evt, id) {
            const itemID = evt.dataTransfer.getData(`item${id}`)

            if(id == itemID){
                this.items.filter((sell) => {
                    if(sell.id == itemID){
                        sell.status = true;
                        evt.target.value = sell.filler;
                        evt.target.style.width = (sell.filler.length*15)+'px';
                    }
                })
                
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