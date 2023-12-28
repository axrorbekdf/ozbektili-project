<template>
    <div class="container">
        <div class="row mt-5">
            
            <h3 class="fw-bold text-primary my-3">O'ylang va toping.</h3>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab7View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab9View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
            <div class="col-12 col-md-12 d-flex align-items-between">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">1. Biz maktabdan</h4>
                <input type="text" class="d-inline-block form-control" style="width: 70px;" maxlength="1" size="1">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">tozaladim.</h4>
            </div>

            <div class="col-12 col-md-12 d-flex align-items-center">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">2. Ular kino</h4>
                <input type="text" class="d-inline-block form-control" style="width: 70px;" maxlength="1" size="1">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">o‘qidi.</h4>
            </div>

            <div class="col-12 col-md-12 d-flex align-items-center">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">3. Men xonani</h4>
                <input type="text" class="d-inline-block form-control" style="width: 70px;" maxlength="1" size="1">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">keldik.</h4>
            </div>

            <div class="col-12 col-md-12 d-flex align-items-center">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">4. Siz musiqa</h4>
                <input type="text" class="d-inline-block form-control" style="width: 70px;" maxlength="1" size="1">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">ko‘rdilar.</h4>
            </div>

            <div class="col-12 col-md-12 d-flex align-items-center">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">5. U gazetani</h4>
                <input type="text" class="d-inline-block form-control" style="width: 70px;" maxlength="1" size="1">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">o‘ylading?</h4>
            </div>

            <div class="col-12 col-md-12 d-flex align-items-center">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">6. Sen nimani</h4>
                <input type="text" class="d-inline-block form-control" style="width: 70px;" maxlength="1" size="1">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">bordim.</h4>
            </div>

            <div class="col-12 col-md-12 d-flex align-items-center">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">7. Men uyga</h4>
                <input type="text" class="d-inline-block form-control" style="width: 70px;" maxlength="1" size="1">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">tingladingiz.</h4>
            </div>
            

            <!-- <div class="col-md-12 col-12">
                <div class="card mb-3" style="max-width: 740px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                    <div class="row g-0 py-4 align-items-center">
                        <div class="col-md-4 d-flex justify-content-center p-2">
                            <img src="@/assets/2dars/ppt/3 ta odam.jpg" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <p class="card-text"><strong>Botir:</strong> Assalomu alaykum!</p>
                            <p class="card-text"><strong>Murod:</strong> Va alaykum assalom! Ismingiz nima?</p>
                            <p class="card-text"><strong>Botir:</strong> Botir. </p>
                            <p class="card-text"><strong>Murod:</strong> Meniki Murod. Tanishganimdan xursandman.</p>
                            <p class="card-text"><strong>Murod:</strong> Men ham.</p>

                            <button @click="toggleAudio('6 rasm')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                            <audio id="6 rasm">
                            <source src="@/assets/2dars/6 rasm.mp3" type="audio/mpeg">
                        </audio>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab7View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab9View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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