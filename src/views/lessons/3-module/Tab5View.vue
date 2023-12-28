<template>
    <div class="container">
        <div class="row mt-5">
            
            <h3 class="fw-bold text-primary my-3">Diqqat qiling.</h3>
            
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab4View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab6View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            


            <div class="col-12">
                <p class="fw-medium">-Allo! Eshitaman.</p>
                <p class="fw-medium">-Allo! Xayrli kun!</p>
                <p class="fw-medium">-Xayrli kun!</p>
                <p class="fw-medium">-Hozir doktor bormi?</p>
                <p class="fw-medium">-Yo&lsquo;q,<span class="bg-info"> 08:50</span> / 09:30 da keladilar.</p>
                <p class="fw-medium">-Qabul qachon boshlanadi?</p>
                <p class="fw-medium">-10:00 / <span class="bg-info"> 09:00</span> da.</p>
                <p class="fw-medium">-11:15 / <span class="bg-info"> 10:20</span> da ham qabul bormi?</p>
                <p class="fw-medium">-Bor, lekin <span class="bg-info"> 10.20</span> / 09:20 da doktor band bo&lsquo;ladilar.</p>
                <p class="fw-medium">-10:40 da va 11:00 da bo&lsquo;sh bo&lsquo;ladilar.</p>
                <p class="fw-medium">-Yaxshi. Men <span class="bg-info"> 10:30</span> / 10:35 da boraman.</p>
                <p class="fw-medium">-Xayr, salomat bo&lsquo;ling!</p>

            </div>


            
            <div class="col-12 mt-4">
                <h3 class="fw-bold text-primary my-3">Grammatika</h3>
                <hr>
                <div class="badge bg-primary text-wrap" style="width: 12rem;">
                    -di: o‘tgan zamon shakli
                </div>
                <p>
                    Kecha Toshkentga keldik. Soat 06:00 da uyg‘ondim.
                </p>
                <table class="table table-bordered text-center fw-medium">
                    <thead>
                        <tr>
                            <td>Men</td>
                            <td rowspan="6" class="text-center align-middle">kel<s>moq</s> + di+</td>
                            <td>-m</td>
                            <td>Men keldim</td>
                        </tr>
                        <tr>
                            <td>Sen</td>
                            <td>-ng</td>
                            <td>Sen kelding</td>
                        </tr>
                        <tr>
                            <td>U</td>
                            <td>-</td>
                            <td>U keldi</td>
                        </tr>
                        <tr>
                            <td>Biz</td>
                            <td>   -k   </td>
                            <td>Biz keldik</td>
                        </tr>
                        <tr>
                            <td>Siz  </td>
                            <td>-ngiz</td>
                            <td>Siz keldingiz</td>
                        </tr>
                        <tr>
                            <td>Ular</td>
                            <td>-lar</td>
                            <td>Ular keldilar</td>
                        </tr>
                    </thead>
                </table>
            </div>


            <!-- <div class="col-md-3 col-12">
                <div class="card mb-3 mx-auto" style="width: 14rem; background-image: linear-gradient(to bottom, #a2e6f6, #ffffff)">
                    <img src="@/assets/2dars/olmoshlar/men.png" class="card-image-top mx-auto"  alt="..." style="width:200px">
                    <div class="card-body text-center">
                        <h3 class="card-title">Men</h3>
                        <button @click="toggleAudio('men')" class="btn bg-info-subtle col-12">Eshitish <i class="fa-solid fa-volume-high"></i></button>
                        <audio id="men">
                            <source src="@/assets/2dars/qiz/men.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                </div>
            </div> -->

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab4View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab6View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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