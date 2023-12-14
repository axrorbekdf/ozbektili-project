<template>
    <div class="container">
        <div class="row mt-5">                      
        <div class="col-md-12">

            <h3 class="fw-bold text-primary my-3">Grammatika </h3>
        

            <div class="table-responsive-sm col-md-12 col-12">
            <table class="table table-bordered align-middle text-center table-sm">
                <thead>
                <tr >
                    <td>Men</td>
                    <td rowspan="6">
                        <img src="@/assets/2dars/kasblar/oquvchi.png" class="card-img-top" alt="..." style="width: 250px;">
                        <h1 class="fw-semibold my-4">O'qituvchi</h1>
                    </td>
                    <td>-men</td>
                </tr>
                <tr>
                    <td>Sen</td>
                    <td>-sen</td>
                </tr>
                <tr>
                    <td>U</td>
                    <td>(dir)</td>
                </tr>
                <tr>
                    <td>Biz</td>
                    <td>-miz</td>
                </tr>
                <tr>
                    <td>Siz</td>
                    <td>-siz</td>
                </tr>
                <tr>
                    <td>Ular</td>
                    <td>-lar</td>
                </tr>
                </thead>
            </table>
            </div>

            <ol class="list-group list-group-numbered col-md-12 col-12">
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                <div class="fw-medium">Men o'qituvchiman </div>
                </div>
                <span @click="toggleAudio('men o`')" class="badge bg-primary rounded-pill" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span>
                <audio id="men o`">
                    <source src="@/assets/2dars/qiz/men o`.mp3" type="audio/mpeg">
                </audio>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                <div class="fw-medium">Sen o'qituvchisan </div>
                </div>
                <span @click="toggleAudio('sen o`')" class="badge bg-primary rounded-pill" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span>
                <audio id="sen o`">
                    <source src="@/assets/2dars/qiz/sen o`.mp3" type="audio/mpeg">
                </audio>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                <div class="fw-medium">U o'qituvchidir </div>
                </div>
                <span @click="toggleAudio('u o`')" class="badge bg-primary rounded-pill" style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span>
                <audio id="u o`">
                    <source src="@/assets/2dars/qiz/u o`.mp3" type="audio/mpeg">
                </audio>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                <div class="fw-medium">Biz o'qituvchimiz </div>
                </div>
                <span @click="toggleAudio('biz o`')" class="badge bg-primary rounded-pill"  style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span>
                <audio id="biz o`">
                    <source src="@/assets/2dars/qiz/biz o`.mp3" type="audio/mpeg">
                </audio>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                <div class="fw-medium">Siz o'qituvchisiz </div>
                </div>
                <span @click="toggleAudio('siz o`')" class="badge bg-primary rounded-pill"  style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span>
                <audio id="siz o`">
                    <source src="@/assets/2dars/qiz/siz o`.mp3" type="audio/mpeg">
                </audio>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                <div class="fw-medium">Ular o'qituvchilar </div>
                </div>
                <span @click="toggleAudio('ular o`')" class="badge bg-primary rounded-pill"  style="cursor: pointer;"><i class="fa-solid fa-volume-high"></i></span>
                <audio id="ular o`">
                    <source src="@/assets/2dars/qiz/ular o`.mp3" type="audio/mpeg">
                </audio>
            </li>
            </ol>

        </div>

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