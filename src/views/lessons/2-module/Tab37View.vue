<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">O’ylang va toping. Tartiblang.</h3>


            <div class="col-12 my-2" v-for="(item,index) in data" :key="index">
                <draggable clas :list="item" @change="log">
                    <span v-for="element in item" :key="element.name" class="fs-5 badge bg-info mx-2">{{ element.name }}</span>
                </draggable>
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
import { VueDraggableNext } from 'vue-draggable-next'
export default {
    props:{
        error: {
            type: String
        }
    },
    components: {
      draggable: VueDraggableNext,
    },
    data() {        
      return {
        enabled: true,
        data:[
            [
                { name: 'televizorni', id: 1 },
                { name: 'sotib olyapti', id: 2 },
                { name: 'Akmal', id: 3 },
                { name: 'supermarketdan', id: 4 },
            ],
            [
                { name: 'davolayapti', id: 1 },
                { name: 'shifokor', id: 2 },
                { name: 'kasalxonada', id: 3 },
                { name: 'bolalarni', id: 4 },
            ],
            [
                { name: 'shahardan', id: 1 },
                { name: 'biz', id: 2 },
                { name: 'ketyapmiz', id: 3 },
                { name: 'qishloqqa', id: 4 },
            ],
            [
                { name: 'jo‘natyaptilar', id: 1 },
                { name: 'Angliyaga', id: 2 },
                { name: 'xatlarni', id: 3 },
                { name: 'ular', id: 4 },
            ],
            [
                { name: 'beshinchi', id: 1 },
                { name: 'yashayapti', id: 2 },
                { name: 'Kamola', id: 3 },
                { name: 'uyda', id: 4 },
            ]
        ],
        dragging: false,
      }
    },
    methods:{
        chengeTabView(tab){
            this.$emit('chengeTabView', tab);
        },
        log(event) {
            console.log(event)
        },
    }
}
</script>
<style>
    
</style>