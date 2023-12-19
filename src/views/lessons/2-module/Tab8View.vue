<template>
    <div class="container">
        <div class="row mt-5">
            
            <h3 class="fw-bold text-primary my-3"> Tinglang, Takrorlang.  </h3>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab7View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab9View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
            <div class="col-md-12 col-12">
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
            </div>

            <div class="col-md-12 col-12">
                <div class="card mb-3" style="max-width: 740px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                    <div class="row g-0 py-4 align-items-center">
                    
                    <div class="col-md-8">
                        <div class="card-body">
                        <p class="card-text"><strong>1:</strong> Xush kelibsiz! </p>
                        <p class="card-text"><strong>2:</strong> Rahmat </p>
                        <p class="card-text"><strong>1:</strong> Ismingiz nima? </p>
                        <p class="card-text"><strong>2:</strong> Elezabet Byorg. </p>
                        <p class="card-text"><strong>1:</strong> Elezabet, qayerdansiz? </p>
                        <p class="card-text"><strong>2:</strong> Angliyadanman. </p>
                        <button @click="toggleAudio('7 rasm')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                        <audio id="7 rasm">
                            <source src="@/assets/2dars/7 rasm.mp3" type="audio/mpeg">
                        </audio>
                        </div>
                    </div>
                    <div class="col-md-4 d-flex justify-content-center">
                        <img src="@/assets/2dars/ppt/mehmonxona.jpeg" class="img-fluid rounded-start" alt="...">
                    </div>
                    </div>
                </div>
            </div>

            <div class="col-md-12 col-12">
                <div class="card mb-3" style="max-width: 740px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                    <div class="row g-0 py-4 align-items-center">
                    <div class="col-md-4 d-flex justify-content-center p-2">
                        <img src="@/assets/2dars/ppt/mehmonxona.jpeg" class="img-fluid rounded-start" alt="..." >
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <p class="card-text"><strong>1:</strong> Assalomu aleykum! </p>
                        <p class="card-text"><strong>2:</strong> Va alaykum assalom! </p>
                        <p class="card-text"><strong>1:</strong> Ismingiz nima? Qayerliksiz</p>
                        <p class="card-text"><strong>2:</strong> Andrey. Rossiyalikman</p>
                        <p class="card-text"><strong>1:</strong> Andrey, O'zbekistonga xush kelibsiz! </p>


                        <button @click="toggleAudio('8 rasm')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                        <audio id="8 rasm">
                            <source src="@/assets/2dars/8 rasm.mp3" type="audio/mpeg">
                        </audio>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="col-md-12 col-12">
                <div class="card mb-3" style="max-width: 740px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                    <div class="row g-0 py-4 align-items-center">
                    
                    <div class="col-md-8">
                        <div class="card-body">
                        <p class="card-text"><strong>1:</strong> Tanish, bu Sang Vuk </p>
                        <p class="card-text"><strong>2:</strong> Salom, Sang Vuk.</p>
                        <p class="card-text"><strong>3:</strong> Salom!</p>
                        <p class="card-text"><strong>1:</strong> Sang Vuk, bu o'rtog'im Ali!</p>
                        <p class="card-text"><strong>2:</strong> Tanishganimdan xursandman</p>
                        <p class="card-text"><strong>3:</strong> Men ham</p>
                        <p class="card-text"><strong>1:</strong> Sang Vuk Koreyalik</p>
                        <p class="card-text"><strong>2:</strong> O'zbekistonga xush kelibsiz!</p>

                        <button @click="toggleAudio('9 rasm')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                        <audio id="9 rasm">
                            <source src="@/assets/2dars/9 rasm.mp3" type="audio/mpeg">
                        </audio>
                        </div>
                    </div>
                    <div class="col-md-4 d-flex justify-content-center p-2">
                        <img src="@/assets/2dars/ppt/3 ta odam.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    </div>
                </div>
            </div>

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