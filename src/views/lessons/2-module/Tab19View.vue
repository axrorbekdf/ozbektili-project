<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">Fe’l lug’at</h3>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab18View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab20View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <div class="col-6">
                <table>
                    <tbody>
                        <tr>
                            <td>yurmoq</td>
                            <td>o‘qimoq (kitobni)</td>
                        </tr>
                        <tr>
                            <td>suzmoq</td>
                            <td>so‘ramoq/javob bermoq</td>
                        </tr>
                        <tr>
                            <td>yugurmoq</td>
                            <td>tinglamoq</td>
                        </tr>
                        <tr>
                            <td>uchmoq</td>
                            <td>yuvmoq</td>
                        </tr>
                        <tr>
                            <td>uxlamoq</td>
                            <td>kulmoq</td>
                        </tr>
                        <tr>
                            <td>yuvinmoq</td>
                            <td>dam olmoq</td>
                        </tr>
                        <tr>
                            <td>gaplashmoq</td>
                            <td>yozmoq (ruchkada)</td>
                        </tr>
                        <tr>
                            <td>ichmoq</td>
                            <td>qo‘ng‘iroq qilmoq</td>
                        </tr>
                        <tr>
                            <td>o‘ylamoq</td>
                            <td>supurmoq</td>
                        </tr>
                        <tr>
                            <td>pishirmoq</td>
                            <td>chizmoq</td>
                        </tr>
                        <tr>
                            <td>raqsga tushmoq</td>
                            <td>kelmoq</td>
                        </tr>
                        <tr>
                            <td>chiqmoq (uydan)</td>
                            <td>bormoq</td>
                        </tr>
                        <tr>
                            <td>tozalamoq</td>
                            <td>ketmoq</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-12"></div>

            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/271.jpg" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/272.png" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/273.jpg" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/274.jpg" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/275.jpg" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/276.jpg" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/277.jpg" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/278.jpg" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/279.jpg" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/2710.jpg" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/2711.jpg" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/2712.png" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/2713.jpg" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/2714.jpg" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/2715.jpg" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/2716.jpg" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/2717.jpg" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/2718.jpg" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/2719.jpg" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/2720.jpg" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/2721.jpg" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/2722.jpg" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/2723.jpg" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/2724.png" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>
            <div class="col-3 my-2 text-center" style="display:flex; flex-direction:column; align-items:center;">
                <img src="@/assets/2bolim/images/2725.png" class="img-fluid" alt="..." style="width: 85px;">
                <h4 class="my-1 fw-bold">
                    suzmoq
                </h4>
            </div>


            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab18View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab20View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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