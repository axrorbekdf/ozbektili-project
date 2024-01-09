<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">Lug‘at</h3>

            <div class="col-4 text-center">
                <img src="@/assets/2bolim/images/311.png" class="img-fluid my-1" alt="...">
                <img src="@/assets/2bolim/images/313.jpg" class="img-fluid my-1" alt="...">
                <img src="@/assets/2bolim/images/315.jpg" class="img-fluid my-1" alt="...">
            </div>
            <div class="col-4 text-center">
                <h3>Davlat</h3>
                <h3>Viloyat</h3>
                <h3>Shahar</h3>
                <h3>Tuman</h3>
                <h3>Qishloq</h3>
                <h3>Mahalla</h3>
                <h3>Ko‘cha</h3>
                <img src="@/assets/2bolim/images/317.jpg" class="img-fluid my-1" alt="...">
            </div>
            <div class="col-4 text-center">
                <img src="@/assets/2bolim/images/312.png" class="img-fluid my-1" alt="...">
                <img src="@/assets/2bolim/images/314.jpg" class="img-fluid my-1" alt="...">
                <img src="@/assets/2bolim/images/316.jpg" class="img-fluid my-1" alt="...">
                
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
                <button @click="chengeTabView('Tab27View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab29View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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