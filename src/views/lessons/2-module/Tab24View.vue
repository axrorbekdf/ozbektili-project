<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">Savallarga javob bering!</h3>
            
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab23View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab25View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <div class="col-4">
                <div class="d-flex flex-column align-items-center">
                    <img src="@/assets/2bolim/images/2121.png" class="rounded float-start m-2" alt="..." style="width: 150px;">
                    <h4>qizil</h4>
                </div>
            </div>

            <div class="col-4">
                <div class="d-flex flex-column align-items-center">
                    <img src="@/assets/2bolim/images/2122.png" class="rounded float-start m-2" alt="..." style="width: 150px;">
                    <h4>jigarrang</h4>
                </div>
            </div>

            <div class="col-4">
                <div class="d-flex flex-column align-items-center">
                    <img src="@/assets/2bolim/images/2123.png" class="rounded float-start m-2" alt="..." style="width: 150px;">
                    <h4>kulrang</h4>
                </div>
            </div>

            <div class="col-4">
                <div class="d-flex flex-column align-items-center">
                    <img src="@/assets/2bolim/images/2124.png" class="rounded float-start m-2" alt="..." style="width: 150px;">
                    <h4>pushti</h4>
                </div>
            </div>

            <div class="col-4">
                <div class="d-flex flex-column align-items-center">
                    <img src="@/assets/2bolim/images/2125.png" class="rounded float-start m-2" alt="..." style="width: 150px;">
                    <h4>yashil</h4>
                </div>
            </div>

            <div class="col-4">
                <div class="d-flex flex-column align-items-center">
                    <img src="@/assets/2bolim/images/2126.png" class="rounded float-start m-2" alt="..." style="width: 150px;">
                    <h4>sariq</h4>
                </div>
            </div>

            <div class="col-4">
                <div class="d-flex flex-column align-items-center">
                    <img src="@/assets/2bolim/images/2127.png" class="rounded float-start m-2" alt="..." style="width: 150px;">
                    <h4>ko‘k</h4>
                </div>
            </div>

            <div class="col-4">
                <div class="d-flex flex-column align-items-center">
                    <img src="@/assets/2bolim/images/2128.png" class="rounded float-start m-2" alt="..." style="width: 150px;">
                    <h4>qora</h4>
                </div>
            </div>

            <div class="col-4">
                <div class="d-flex flex-column align-items-center">
                    <img src="@/assets/2bolim/images/2129.png" class="rounded float-start m-2" alt="..." style="width: 150px;">
                    <h4>oq</h4>
                </div>
            </div>

            <div class="col-4">
                <div class="d-flex flex-column align-items-center">
                    <img src="@/assets/2bolim/images/21210.png" class="rounded float-start m-2" alt="..." style="width: 150px;">
                    <h4>zarg‘aldoq</h4>
                </div>
            </div>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab23View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab25View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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