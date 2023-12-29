<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">Savallarga javob bering!</h3>
            
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab19View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab21View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <div class="text-end">
                <span class="badge text-bg-success fw-bold fs-5 my-3">
                    -yap hozirgi <br> zamon shakli
                </span>
            </div>
            <div class="col-6">
                <table class="table table-bordered text-center">
                    <thead>
                    <tr>
                        <td>Men</td>
                        <td rowspan="6" class="align-middle">yur<s class="fw-bold text-danger">moq</s> + -yap +</td>
                        <td>-man</td>
                        <td>yuryapman</td>
                    </tr>
                    <tr>
                        <td>Sen</td>
                        <td>-san</td>
                        <td>yuryapsan</td>
                    </tr>
                    <tr>
                        <td>U</td>
                        <td>-ti</td>
                        <td>yuryapti</td>
                    </tr>
                    <tr>
                        <td>Biz</td>
                        <td>-miz</td>
                        <td>yuryapmiz</td>
                    </tr>
                    <tr>
                        <td>Siz</td>
                        <td>-siz</td>
                        <td>yuryapsiz</td>
                    </tr>
                    <tr>
                        <td>Ular </td>
                        <td>-dilar</td>
                        <td>yuryaptilar</td>
                    </tr>
                    </thead>
                </table>
            </div>

            <div class="col-6">
                <table class="table table-bordered text-center">
                    <thead>
                    <tr>
                        <td>Men</td>
                        <td rowspan="6" class="align-middle">o‘qi<s class="fw-bold text-danger">moq</s> + -yap +</td>
                        <td>-man</td>
                        <td>o‘qiyapman</td>
                    </tr>
                    <tr>
                        <td>Sen</td>
                        <td>-san</td>
                        <td>o‘qiyapsan</td>
                    </tr>
                    <tr>
                        <td>U</td>
                        <td>-ti</td>
                        <td>o‘qiyapti</td>
                    </tr>
                    <tr>
                        <td>Biz</td>
                        <td>-miz</td>
                        <td>o‘qiyapmiz</td>
                    </tr>
                    <tr>
                        <td>Siz</td>
                        <td>-siz</td>
                        <td>o‘qiyapsiz</td>
                    </tr>
                    <tr>
                        <td>Ular </td>
                        <td>-dilar</td>
                        <td>o‘qiyaptilar</td>
                    </tr>
                    </thead>
                </table>
            </div>



            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab19View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab21View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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