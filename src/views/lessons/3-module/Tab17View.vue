<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">O'lchov birliklari.</h3>
            
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab16View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab18View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Darslarni tugatish <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
            <div class="col-12">
                <h3 class="text-center">
                    <span class="badge text-bg-success fs-5">Kilo - kilogram - kg</span>
                </h3>
            </div>

            <div class="col-12 col-md-12">
                <h3 class="text-center">
                    <span class="badge text-bg-success fs-5">Qancha? = necha kilo?</span>
                </h3>

                <div class="card mb-3" style="max-width: 100%;">
                    <div class="row g-0">
                        <div class="col-md-4 py-2">
                            <img src="@/assets/3bolim/images/231.jpg" class="img-fluid rounded-start border-0" alt="...">

                            <ul class="list-group list-group-flush fw-bold" style="font-size: 8pt;">
                                <li class="list-group-item">1 kilo guruch</li>
                                <li class="list-group-item">2 kilogram kartoshka</li>
                                <li class="list-group-item">2 kg olma</li>
                            </ul>
                        </div>
                        <div class="col-md-4 d-flex align-items-center">
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Guruch</li>
                                    <li class="list-group-item">Un</li>
                                    <li class="list-group-item">Kartoshka</li>
                                    <li class="list-group-item">Piyoz</li>
                                    <li class="list-group-item">Olma</li>
                                    <li class="list-group-item">Uzum</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-12">
                <h3 class="text-center">
                    <span class="badge text-bg-success fs-5">litr - l</span>
                </h3>
            </div>
            <div class="col-12 col-md-12">
                <h3 class="text-center">
                    <span class="badge text-bg-success fs-5">Qancha? = necha litr?</span>
                </h3>

                <div class="card mb-3" style="max-width: 100%;">
                    <div class="row g-0">
                        <div class="col-md-4 py-2">
                            <img src="@/assets/3bolim/images/241.jpg" class="img-fluid rounded-start border-0" alt="...">

                            <ul class="list-group list-group-flush fw-bold" style="font-size: 8pt;">
                                <li class="list-group-item">1 litr yog‘</li>
                                <li class="list-group-item">2 l sut</li>
                            </ul>
                        </div>
                        <div class="col-md-4 d-flex align-items-center">
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Yog‘</li>
                                    <li class="list-group-item">Sut </li>
                                    <li class="list-group-item">Suv</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab16View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab18View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Darslarni tugatish <i class="fa-solid fa-arrow-right"></i></button>
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