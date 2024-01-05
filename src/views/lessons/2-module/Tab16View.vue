<template>
    <div class="container">
        <div class="row mt-5">
            <h3 class="fw-bold text-primary my-3">Tinglang! O'qing !</h3>
            

            <div class="col-12 col-md-4">
                <img src="@/assets/2bolim/images/231.jpg" class="rounded" alt="..." style="width: 200px;">
                <img src="@/assets/2bolim/images/232.jpg" class="rounded my-2" alt="..." style="width: 200px;">
                <img src="@/assets/2bolim/images/233.jpg" class="rounded" alt="..." style="width: 200px;">
            </div>

            <div class="col-12 col-md-6">
                <div class="text-end">
                   <span class="badge text-bg-info fs-5">
                        …-da bor. <i class="fa-regular fa-circle-check text-success"></i>
                   </span><br>
                   <span class="badge text-bg-info fs-5">
                        … -da yo‘q. <i class="fa-regular fa-circle-xmark text-danger"></i>
                   </span>
                </div>
                <ol class="fw-medium fs-4">
                    <li>Yotoqxona<strong>da</strong> parda <strong>yo</strong><strong>&lsquo;</strong><strong>q.</strong></li>
                    <li>Oshxona<InputText :id="72"/> muzlatgich <InputText :id="73"/>.</li>
                    <li>Mehmonxona<InputText :id="72"/> televizor <InputText :id="74"/>.</li>
                    <li>Yotoqxona<InputText :id="72"/> karavot <InputText :id="73"/>.</li>
                    <li>Mehmonxona<InputText :id="72"/> divan <InputText :id="73"/>.</li>
                    <li>Oshxona<InputText :id="72"/> kir yuvish mashinasi <InputText :id="74"/>.</li>
                    <li>Mehmonxona<InputText :id="72"/> gilam <InputText :id="73"/>.</li>
                    <li>Yotoqxona<InputText :id="72"/> deraza <InputText :id="74"/>.</li>
                    <li>Oshxona<InputText :id="72"/> soat <InputText :id="73"/>.</li>
                    <li>Mehmonxona<InputText :id="72"/> shkaf <InputText :id="74"/>.</li>
                </ol>
            </div>

            <div class="col-4 my-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/241.png" class="img-fluid" alt="..." style="width: 150px;">
                <h4 class="my-4 fw-bold p-3" style="border: 5px solid green;">
                    …-ning ustida
                </h4>
                <p class="fst-italic">Olma stolning ustida</p>
            </div>

            <div class="col-4 my-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/242.png" class="img-fluid" alt="..." style="width: 150px;">
                <h4 class="my-4 fw-bold p-3" style="border: 5px solid green;">
                    …-ning tagida
                </h4>
                <p class="fst-italic">Olma stolning tagida</p>
            </div>

            <div class="col-4 my-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/243.png" class="img-fluid" alt="..." style="width: 150px;">
                <h4 class="my-4 fw-bold p-3" style="border: 5px solid green;">
                    …-ning ichida
                </h4>
                <p class="fst-italic">Olma qutining Ichida.</p>
            </div>
            <div class="col-4 my-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/244.jpg" class="img-fluid" alt="..." style="width: 150px;">
                <h4 class="my-4 fw-bold p-3" style="border: 5px solid green;">
                    …-ning yonida/oldida
                </h4>
                <p class="fst-italic">Olma kitobning yonida/oldida.</p>
            </div>
            <div class="col-4 my-4 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/245.jpg" class="img-fluid" alt="..." style="width: 150px;">
                <h4 class="my-4 fw-bold p-3" style="border: 5px solid green;">
                    …-ning orqasida
                </h4>
                <p class="fst-italic">Olma qutining orqasida.</p>
            </div>



            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab15View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab17View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        
        </div>
    </div>
</template>
<script>
import InputText from '@/components/InputText.vue'
export default {
    components:{InputText},
    methods:{
        chengeTabView(tab){
            this.$emit('chengeTabView', tab);
        }
    }
}
</script>
<style>
    
</style>