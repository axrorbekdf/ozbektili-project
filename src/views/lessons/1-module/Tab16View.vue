<template>
    <div class="container">
        <div class="row mt-5">
            <h3 class="fw-bold text-primary my-3">Tinglang! O'qing !</h3>
            <div class="col-12">
                <div class="card mb-3" style="max-width: 900px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <div class="row g-0 py-4">
                    <div class="col-md-4  d-flex align-content-center p-2">
                    <img src="@/assets/1bolim/images/2101.jpg" class="img-fluid rounded-start mx-2" alt="..." width="100%">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body" style="font-size: 10pt;">
                        <p class="card-text"><strong>Zuhra:</strong> Assalomu alaykum! </p>
                        <p class="card-text"><strong>Zebo</strong> Va alaykum assalom! </p>
                        <p class="card-text"><strong>Zuhra:</strong> Ismim Zuhra.</p>
                        <p class="card-text"><strong>Zebo:</strong> Meniki Zebo. Tanishganimdan xursandman</p>
                        <p class="card-text"><strong>Zuhra:</strong> Men ham xursandman</p>
                        <p class="card-text"><strong>Zebo:</strong> Zuhra, qayerliksan?</p>
                        <p class="card-text"><strong>Zuhra:</strong> Buxorolikman. Samarqand universitetining talabasiman.</p>
                        <p class="card-text"><strong>Zebo:</strong> Men Toshkentlikman. Samarqand universitetining talabasiman.</p>
                        <p class="card-text"><strong>Zuhra:</strong> Bo'pti Zebo, ko'rishguncha!.</p>
                        <p class="card-text"><strong>Zebo:</strong> Xayr Zuhra.</p>

                        <button class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                    </div>
                    </div>
                </div>
                </div>
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