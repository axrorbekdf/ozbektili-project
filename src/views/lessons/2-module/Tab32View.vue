<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3"> O’ylang va toping. Yozing.</h3>
            


            <div class="col-6 my-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/351.jpg" class="img-fluid" alt="..." style="width: 250px;">
                <h5 class="btn btn-primary my-2">
                    Yashil mashina <InputText :id="105" style="color: white;" /> yo'ldan kelyapti.
                </h5>
            </div>

            <div class="col-6 my-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/352.png" class="img-fluid" alt="..." style="width: 250px;">
                <h5 class="btn btn-primary my-2">
                    Iyul <InputText :id="106" style="color: white;" /> oy.
                </h5>
            </div>

            <div class="col-6 my-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/353.png" class="img-fluid" alt="..." style="width: 250px;">
                <h5 class="btn btn-primary my-2">
                    Sariq pardali uy  <InputText :id="107" style="color: white;" /> qavatda.
                </h5>
            </div>

            <div class="col-6 my-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/354.png" class="img-fluid" alt="..." style="width: 150px;">
                <h5 class="btn btn-primary my-2">
                    Svetaforning <InputText :id="108" style="color: white;" /> chirog‘I qizil.
                </h5>
            </div>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab31View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab33View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
</template>
<script>
import InputText from '@/components/InputText.vue'
export default {
    components:{InputText},
    props:{
        error: {
            type: String
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