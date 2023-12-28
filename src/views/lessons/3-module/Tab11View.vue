<template>
    <div class="container">
        <div class="row mt-5">                      
        <div class="col-md-12">

            <h3 class="fw-bold text-primary my-3">O‘ylang va toping. Yozing.</h3>
        
        </div>


        <div class="col-12 col-md-12">
                <div class="card mb-3" style="max-width: 100%;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="@/assets/3bolim/images/1122.jpg" class="img-fluid rounded-start border-0" alt="...">
                        </div>
                        <div class="col-md-8 d-flex align-items-center">
                            <div class="card-body">
                                <h5 class="card-title">Futbolchilar Braziliyaga nimada bordilar?</h5>
                                <h5 class="card-title">Futbolchilar Braziliyaga _______ bordilar.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-12">
                <div class="card mb-3" style="max-width: 100%;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="@/assets/3bolim/images/1123.jpg" class="img-fluid rounded-start border-0" alt="...">
                        </div>
                        <div class="col-md-8 d-flex align-items-center">
                            <div class="card-body">
                                <h5 class="card-title">Otang ishga nima bilan ketdi?</h5>
                                <h5 class="card-title">Otam ishga _____ ___ ketdi.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-12">
                <div class="card mb-3" style="max-width: 100%;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="@/assets/3bolim/images/1124.jpg" class="img-fluid rounded-start border-0" alt="...">
                        </div>
                        <div class="col-md-8 d-flex align-items-center">
                            <div class="card-body">
                                <h5 class="card-title">Sen universitetga qanday kelding?</h5>
                                <h5 class="card-title">Men universitetga ____ ____ keldim.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-12">
                <div class="card mb-3" style="max-width: 100%;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="@/assets/3bolim/images/1125.png" class="img-fluid rounded-start border-0" alt="...">
                        </div>
                        <div class="col-md-8 d-flex align-items-center">
                            <div class="card-body">
                                <h5 class="card-title">Shaharni nima bilan sayr qildingiz?</h5>
                                <h5 class="card-title">Shaharni ______ _____ sayr qildik</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-12">
                <div class="card mb-3" style="max-width: 100%;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="@/assets/3bolim/images/1126.png" class="img-fluid rounded-start border-0" alt="...">
                        </div>
                        <div class="col-md-8 d-flex align-items-center">
                            <div class="card-body">
                                <h5 class="card-title">Moskvaga qanday ketding?</h5>
                                <h5 class="card-title">Moskvaga ______ ketdim.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-12">
                <div class="card mb-3" style="max-width: 100%;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="@/assets/3bolim/images/1127.jpg" class="img-fluid rounded-start border-0" alt="...">
                        </div>
                        <div class="col-md-8 d-flex align-items-center">
                            <div class="card-body">
                                <h5 class="card-title">Toshkentga nimada kelding?</h5>
                                <h5 class="card-title">Toshkentga avtobusda keldim.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <!-- <ol class="list-group list-group-numbered col-md-12 col-12">
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                <div class="fw-medium">Men o'qituvchiman </div>
                </div>
                <span @click="toggleAudio('men o`')" class="badge bg-primary rounded-pill" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span>
                <audio id="men o`">
                    <source src="@/assets/2dars/qiz/men o`.mp3" type="audio/mpeg">
                </audio>
            </li>
        </ol> -->

        

        <div class="col-12 d-flex justify-content-between my-3">
            <button @click="chengeTabView('Tab10View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                <i class="fa-solid fa-arrow-left"></i> Oldingisi 
            </button>
            <button @click="chengeTabView('Tab12View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
        </div>


        </div>
    </div>
</template>
<script>
export default {
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