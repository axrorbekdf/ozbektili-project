<template>
    <div class="container">
        <div class="row mt-5">

            <h3 class="fw-bold text-primary my-3">Kelishik olmoshlari? Mashqlar</h3>
            
            <div class="col-12 d-flex justify-content-between my-3">
                <button class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <div class="col-md-12 col-12">
            <div class="card mb-3" style="max-width: 900px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <div class="row g-0 py-4">
                <div class="col-md-4 d-flex justify-content-center p-2">
                    <img src="@/assets/2dars/ppt/3 ta odam.jpg" class="img-fluid rounded-start" alt="..." >
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <p class="card-text"><strong>O‘:</strong> Assalomu alaykum! </p>
                    <p class="card-text"><strong>D:</strong> Va alaykum assalom! Yaxshimisiz? </p>
                    <p class="card-text"><strong>O‘:</strong> Rahmat, yaxshiman.</p>

                    <button @click="toggleAudio('1 rasm')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                    <audio id="1 rasm">
                        <source src="@/assets/2dars/1 rasm.mp3" type="audio/mpeg">
                    </audio>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div class="col-md-12 col-12">
            <div class="card mb-3" style="max-width: 900px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <div class="row g-0 py-4">
                <div class="col-md-8">
                    <div class="card-body">
                    <p class="card-text"><strong>O‘:</strong> Assalomu alaykum! </p>
                    <p class="card-text"><strong>D:</strong> Va alaykum assalom! </p>
                    <button  @click="toggleAudio('2 rasm')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                    <audio id="2 rasm">
                        <source src="@/assets/2dars/2 rasm.mp3" type="audio/mpeg">
                    </audio>
                    </div>
                </div>
                <div class="col-md-4 d-flex justify-content-center p-2">
                    <img src="@/assets/2dars/ppt/ota va qiz.jpeg" class="img-fluid rounded-start" alt="...">
                </div>
                </div>
            </div>
            </div>

            <div class="col-md-12 col-12">
            <div class="card mb-3" style="max-width: 900px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <div class="row g-0 py-4">
                <div class="col-md-4 d-flex justify-content-center p-2">
                    <img src="@/assets/2dars/ppt/mehmonxona.jpeg" class="img-fluid rounded-start" alt="..." >
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <p class="card-text"><strong>1:</strong> Assalomu alaykum! Yaxshimisiz? </p>
                    <p class="card-text"><strong>2:</strong> Va alaykum assalom! Rahmat yaxshimam.</p>
                    <button @click="toggleAudio('4 rasm')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                    <audio id="4 rasm">
                        <source src="@/assets/2dars/4 rasm.mp3" type="audio/mpeg">
                    </audio>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div class="col-md-12 col-12">
            <div class="card mb-3" style="max-width: 900px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <div class="row g-0 py-4">
                
                <div class="col-md-8">
                    <div class="card-body">
                    <p class="card-text"><strong>Oybek:</strong> Iroda, yaxshimisan? </p>
                    <p class="card-text"><strong>Iroda:</strong> Rahmat, yaxshiman. O‘zing qalaysan? </p>
                    <p class="card-text"><strong>Oybek:</strong> Rahmat! Men ham yaxshiman.</p>
                    <button  @click="toggleAudio('3 rasm')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                    <audio id="3 rasm">
                        <source src="@/assets/2dars/3 rasm.mp3" type="audio/mpeg">
                    </audio>
                    </div>
                </div>
                <div class="col-md-4 d-flex justify-content-center p-2">
                    <img src="@/assets/2dars/ppt/mehmonxona.jpeg" class="img-fluid rounded-start" alt="...">
                </div>
                </div>
            </div>
            </div>

            <div class="col-md-12 col-12">
            <div class="card mb-3" style="max-width: 900px; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                <div class="row g-0 py-4">
                <div class="col-md-4 d-flex justify-content-center p-2">
                    <img src="@/assets/2dars/ppt/mehmonxona.jpeg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <p class="card-text"><strong>Laylo:</strong> Nima gaplar, Madina? </p>
                    <p class="card-text"><strong>Madina:</strong> Tinchlik, Hammasi zo‘r. O‘zingda nima gaplar?</p>
                    <p class="card-text"><strong>Laylo:</strong> Rahmat! Menda ham tinchlik.</p>
                    <button  @click="toggleAudio('5 rasm')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                    <audio id="5 rasm">
                        <source src="@/assets/2dars/5 rasm.mp3" type="audio/mpeg">
                    </audio>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div class="col-12 d-flex justify-content-between my-3">
                <button class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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
        }
    }
}
</script>
<style>
    
</style>