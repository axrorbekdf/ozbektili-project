<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">O’ylang va toping. Yozing</h3>
            
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab20View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab22View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
            <div class="col-6">
                <table class="table table-bordered text-center">
                    <thead>
                        <tr>
                            <td>Men</td>
                            <td rowspan="6" class="align-middle">kelmoq + -yap +</td>
                            <td>__________________</td>
                        </tr>
                        <tr>
                            <td>Sen</td>
                            <td>kelyapsan</td>
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

            <div class="col-6">
                <table class="table table-bordered text-center">
                    <thead>
                        <tr>
                            <td>Men</td>
                            <td rowspan="6" class="align-middle">uxlamoq + -yap +</td>
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
                            <td>uxlayaptilar</td>
                        </tr>
                    </thead>
                </table>
            </div>

            <div class="col-6">
                <table class="table table-bordered text-center">
                    <thead>
                        <tr>
                            <td>Men</td>
                            <td rowspan="6" class="align-middle">tozalamoq + -yap +</td>
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
                            <td>tozalayapmiz</td>
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

            <div class="col-6">
                <table class="table table-bordered text-center">
                    <thead>
                        <tr>
                            <td>Men</td>
                            <td rowspan="6" class="align-middle">yozmoq + -yap +</td>
                            <td>yozyapman</td>
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

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab20View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab22View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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