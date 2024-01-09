<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">O‘qing.</h3>


            <div class="col-6">
                <img src="@/assets/2bolim/images/331.jpg" class="img-fluid my-1 col-12" alt="...">
            </div>
            <div class="col-6">
                <p class="my-0">- Assalomu alaykum!</p>
                <p class="my-0">- Va alaykum assalom!</p>
                <p class="my-0">-Qayerga boramiz?</p>
                <p class="my-0">-Vokzalga!</p>
                <p class="my-0">-O&rsquo;tiring. &hellip; Yaxshi kelyapsizmi?</p>
                <p class="my-0">-&nbsp; Shukur, yaxshiman.</p>
                <p class="my-0">- Qayerga ketyapsiz?</p>
                <p class="my-0">- Namanganga ketyapman.</p>
                <p class="my-0">- Yaxshi. Qayerdan kelyapsiz?</p>
                <p class="my-0">- Ottavadan kelyapman.</p>
                <p class="my-0">- Kanadalikmisiz?</p>
                <p class="my-0">- Yo&lsquo;q, o&lsquo;zbekistonlikman. Ayni paytda Kanadada ishlayapman.</p>
                <p class="my-0">- Ota-onangiz Namanganda yashaydilarmi?</p>
                <p class="my-0">-Ha. .. katta hovlimiz Namanganda.</p>
                <p class="my-0">-&hellip;</p>
                <p class="my-0">- Mana, vokzalga ham yetib keldik. Yuklaringizni unutmang.</p>
                <p class="my-0">- Rahmat, salomat bo&lsquo;ling!</p>
                <p class="my-0">- Oq yo&lsquo;l!</p>
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
                <button @click="chengeTabView('Tab29View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab31View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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