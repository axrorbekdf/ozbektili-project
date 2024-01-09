<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">Lug‘at</h3>

            <div class="col-4 text-center">
                <img src="@/assets/2bolim/images/321.jpg" class="img-fluid my-1 col-12" alt="...">
                <img src="@/assets/2bolim/images/322.jpg" class="img-fluid my-1 col-12" alt="...">
                <img src="@/assets/2bolim/images/323.jpg" class="img-fluid my-1 col-12" alt="...">
            </div>
            <div class="col-4 text-center">
                <p class="fs-4 fw-bold">maktab, bog‘cha, bog ‘, universitet, bozor, park, kinoteatr, bank, supermarket, magazin, sartaroshxona, kafe, restoran, kutubxona, muzey, sport zal, bekat, vokzal, aeroport</p>
                <img src="@/assets/2bolim/images/327.jpg" class="img-fluid m-1 col-3" alt="...">
                <img src="@/assets/2bolim/images/328.jpg" class="img-fluid m-1 col-3" alt="...">
                <img src="@/assets/2bolim/images/329.jpg" class="img-fluid m-1 col-3" alt="...">
                <img src="@/assets/2bolim/images/3210.jpg" class="img-fluid m-1 col-3" alt="...">
                <img src="@/assets/2bolim/images/3211.jpg" class="img-fluid m-1 col-3" alt="...">
                <img src="@/assets/2bolim/images/3212.jpg" class="img-fluid m-1 col-3" alt="...">
                <img src="@/assets/2bolim/images/3213.jpg" class="img-fluid m-1 col-3" alt="...">
                <img src="@/assets/2bolim/images/3214.jpg" class="img-fluid m-1 col-3" alt="...">
                <img src="@/assets/2bolim/images/3215.jpg" class="img-fluid m-1 col-3" alt="...">
                <img src="@/assets/2bolim/images/3216.jpg" class="img-fluid m-1 col-3" alt="...">
                <img src="@/assets/2bolim/images/3217.jpg" class="img-fluid m-1 col-3" alt="...">
                <img src="@/assets/2bolim/images/3218.jpg" class="img-fluid m-1 col-3" alt="...">
            </div>
            <div class="col-4 text-center">
                <img src="@/assets/2bolim/images/324.jpg" class="img-fluid m-1 col-6" alt="...">
                <img src="@/assets/2bolim/images/325.jpg" class="img-fluid m-1 col-6" alt="...">
                <img src="@/assets/2bolim/images/326.jpg" class="img-fluid m-1 col-6" alt="...">
                <img src="@/assets/2bolim/images/324.jpg" class="img-fluid m-1 col-6" alt="...">
                <img src="@/assets/2bolim/images/325.jpg" class="img-fluid m-1 col-6" alt="...">
                <img src="@/assets/2bolim/images/326.jpg" class="img-fluid m-1 col-6" alt="...">
            </div>

            <!-- <div class="col-12">
                <div class="card mb-3" style="max-width: 900px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <div class="row g-0 py-4">
                    <div class="col-md-12">
                    <div class="card-body">
                        <p class="card-text"><strong>1: Zuhra qayerlik? </strong></p>
                        <p class="card-text"> Zuhra __________________.</p>
                        <p class="card-text"><strong>2: Zebo qayerlik? </strong></p>
                        <p class="card-text"> Zebo __________________.</p>
                        <p class="card-text"><strong>3: Zebo o'qituvhi? </strong></p>
                        <p class="card-text"> Ha        Yo'q</p>
                        <p class="card-text"><strong>4: Zuhra talaba? </strong></p>
                        <p class="card-text"> Ha        Yo'q</p>
                    </div>
                    </div>
                </div>
                </div>
            </div> -->

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab28View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab30View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
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