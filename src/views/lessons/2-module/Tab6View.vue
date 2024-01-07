<template>
    <div class="container">
        <div class="row mt-5">

            <h3 class="fw-bold text-primary my-3">Kelishik olmoshlari? Mashqlar</h3>
            
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab5View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab7View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <div class="col-12">
                <img src="@/assets/2bolim/images/161.jpg" class="img-fluid" alt="...">
            </div>


            <div class="col-12 col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">
                        1-rasm. <InputText :id="102"/>
                    </li>
                    <li class="list-group-item">
                        2-rasm. <InputText :id="102"/>
                    </li>
                    <li class="list-group-item">
                        3-rasm. <InputText :id="102"/>
                    </li>
                    <li class="list-group-item">
                        4-rasm. <InputText :id="102"/>
                    </li>
                    <li class="list-group-item">
                        5-rasm. <InputText :id="102"/>
                    </li>
                    <li class="list-group-item">
                        6-rasm. <InputText :id="102"/>
                    </li>
                </ul>
            </div>

            <div class="col-12 col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">
                        7-rasm. <InputText :id="102"/>
                    </li>
                    <li class="list-group-item">
                        8-rasm. <InputText :id="102"/>
                    </li>
                    <li class="list-group-item">
                        9-rasm. <InputText :id="102"/>
                    </li>
                    <li class="list-group-item">
                        10-rasm. <InputText :id="102"/>
                    </li>
                    <li class="list-group-item">
                        11-rasm. <InputText :id="102"/>
                    </li>
                </ul>
            </div>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab5View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab7View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
        </div>
    </div>
</template>
<script>
import InputText from '@/components/InputText.vue'
export default {
    components:{InputText},
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