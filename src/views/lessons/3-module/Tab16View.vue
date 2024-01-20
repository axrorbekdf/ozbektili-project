<template>
    <div class="container">
        <div class="row mt-5">
            <h3 class="fw-bold text-primary my-3">O‘qing!</h3>

            <div class="col-md-12  d-flex align-content-center p-2">
                <video controls class="img-fluid rounded-start">
                    <source src="@/assets/3bolim/images/221.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>

            <div class="col-6">
                <p class="m-0"><b>Sotuvchi:</b> Xayrli kun!</p>
                <p class="m-0"><b>Xaridor:</b> Xayrli kun! Olma qancha?</p>
                <p class="m-0"><b>Sotuvchi:</b> Kilosi sakkiz ming so'm.</p>
                <p class="m-0"><b>Xaridor:</b> Ikki kilo bering. Kartoshka qancha?</p>
                <p class="m-0"><b>Sotuvchi:</b> Kilosi to'rt ming. Qancha beray?</p>
                <p class="m-0"><b>Xaridor:</b> 4 kilo bering. Ko'katlaringiz yangimi?</p>
                <p class="m-0"><b>Sotuvchi:</b> Ha, bugun keltirildi.</p>
                <p class="m-0"><b>Xaridor:</b> Ikki bog' maydanoz bering.</p>
                <p class="m-0"><b>Sotuvchi:</b> Mana, marhamat, oling.</p>
                <p class="m-0"><b>Xaridor:</b> Mendan qancha bo'ldi?</p>
                <p class="m-0"><b>Sotuvchi:</b> Jami 38000 so'm.</p>
                <p class="m-0"><b>Xaridor:</b> Marhamat, Oling.</p>
                <p class="m-0"><b>Sotuvchi:</b> Qaytimingizni oling.</p>
                <p class="m-0"><b>Xaridor:</b> Rahmat, bozoringizni bersin!</p>
            </div>

            <!-- <div class="col-6">
                <img src="@/assets/3bolim/images/221.jpg" class="img-fluid" alt="...">
            </div> -->

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
export default {
    methods:{
        chengeTabView(tab){
            this.$emit('chengeTabView', tab);
        }
    }
}
</script>
<style>
    
</style>