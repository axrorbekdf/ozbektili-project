<template>
    <div class="container">
        <div class="row mt-5">

            <h3 class="fw-bold text-primary my-3">O’ylang va toping. Yozing</h3>
            
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab5View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab7View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <div class="col-6 mt-4">   
                <table class="table table-bordered text-center fw-medium">
                    <thead>
                        <tr>
                            <td>Men</td>
                            <td rowspan="6" class="align-middle">bormoq + di +</td>
                            <td>__________________</td>
                        </tr>
                        <tr>
                            <td>Sen</td>
                            <td>bording</td>
                        </tr>
                        <tr>
                            <td>U</td>
                            <td>__________________</td>
                        </tr>
                        <tr>
                            <td>Biz</td>
                            <td>__________________</td>
                        </tr>
                        <tr>
                            <td>Siz</td>
                            <td>__________________</td>
                        </tr>
                        <tr>
                            <td>Ular </td>
                            <td>__________________</td>
                        </tr>
                    </thead>
                </table>
            </div>

            <div class="col-6 mt-4">   
                <table class="table table-bordered text-center fw-medium">
                    <thead>
                        <tr>
                            <td>Men</td>
                            <td rowspan="6" class="align-middle">yuvinmoq + di +</td>
                            <td>__________________</td>
                        </tr>
                        <tr>
                            <td>Sen</td>
                            <td>__________________</td>
                        </tr>
                        <tr>
                            <td>U</td>
                            <td>__________________</td>
                        </tr>
                        <tr>
                            <td>Biz</td>
                            <td>__________________</td>
                        </tr>
                        <tr>
                            <td>Siz</td>
                            <td>__________________</td>
                        </tr>
                        <tr>
                            <td>Ular </td>
                            <td>yuvindilar</td>
                        </tr>
                    </thead>
                </table>
            </div>

            <div class="col-6 mt-4">   
                <table class="table table-bordered text-center fw-medium">
                    <thead>
                        <tr>
                            <td>Men</td>
                            <td rowspan="6" class="align-middle">chizmoq + di +</td>
                            <td>__________________</td>
                        </tr>
                        <tr>
                            <td>Sen</td>
                            <td>__________________</td>
                        </tr>
                        <tr>
                            <td>U</td>
                            <td>__________________</td>
                        </tr>
                        <tr>
                            <td>Biz</td>
                            <td>chizdik</td>
                        </tr>
                        <tr>
                            <td>Siz</td>
                            <td>__________________</td>
                        </tr>
                        <tr>
                            <td>Ular </td>
                            <td>__________________</td>
                        </tr>
                    </thead>
                </table>
            </div>

            <div class="col-6 mt-4">   
                <table class="table table-bordered text-center fw-medium">
                    <thead>
                        <tr>
                            <td>Men</td>
                            <td rowspan="6" class="align-middle">yozmoq + di +</td>
                            <td>yozdim</td>
                        </tr>
                        <tr>
                            <td>Sen</td>
                            <td>__________________</td>
                        </tr>
                        <tr>
                            <td>U</td>
                            <td>__________________</td>
                        </tr>
                        <tr>
                            <td>Biz</td>
                            <td>__________________</td>
                        </tr>
                        <tr>
                            <td>Siz</td>
                            <td>__________________</td>
                        </tr>
                        <tr>
                            <td>Ular </td>
                            <td>__________________</td>
                        </tr>
                    </thead>
                </table>
            </div>
            
            <!-- <div class="col-md-12 col-12">
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
            </div> -->

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab5View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab7View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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