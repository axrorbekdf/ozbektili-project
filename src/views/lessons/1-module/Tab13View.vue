<template>
    <div class="container">
        <div class="row mt-5">                      
            <div class="col-12">

            <h3 class="fw-bold text-primary my-3">Grammatika </h3>

            <ol class="list-group list-group-numbered col-md-12 col-12">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-medium">Men O'zbekiston<span class="text-success fw-bold">LIK</span>man </div>
                </div>
                <span @click="toggleAudio('men lik')" class="badge bg-primary rounded-pill"  style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span>
                <audio id="men lik">
                    <source src="@/assets/2dars/qiz/men lik.mp3" type="audio/mpeg">
                </audio>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-medium">Men O'zbekiston<span class="text-success fw-bold">DAN</span>man </div>
                </div>
                <span @click="toggleAudio('men dan')" class="badge bg-primary rounded-pill"  style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span>
                <audio id="men dan">
                    <source src="@/assets/2dars/qiz/men dan.mp3" type="audio/mpeg">
                </audio>
                </li>
            </ol>

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