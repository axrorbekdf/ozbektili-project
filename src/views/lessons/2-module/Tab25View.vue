<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">Diqqat qiling.</h3>
            
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab24View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab26View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <div class="col-4">
                <div class="d-flex flex-column align-items-center">
                    <img src="@/assets/2bolim/images/2131.png" class="rounded float-start m-2" alt="..." style="width: 150px;">
                    <h4>yashil barg</h4>
                </div>
            </div>

            <div class="col-4">
                <div class="d-flex flex-column align-items-center">
                    <img src="@/assets/2bolim/images/2132.jpg" class="rounded float-start m-2" alt="..." style="width: 150px;">
                    <h4>oq ot</h4>
                </div>
            </div>

            <div class="col-4">
                <div class="d-flex flex-column align-items-center">
                    <img src="@/assets/2bolim/images/2133.jpg" class="rounded float-start m-2" alt="..." style="width: 150px;">
                    <h4>sariq lola</h4>
                </div>
            </div>

            <div class="col-4">
                <div class="d-flex flex-column align-items-center mt-5">
                    <img src="@/assets/2bolim/images/2134.png" class="rounded float-start m-2" alt="..." style="width: 200px;">
                    <h4>qizil mashina</h4>
                </div>
            </div>

            <div class="col-4">
                <div class="d-flex flex-column align-items-center">
                    <img src="@/assets/2bolim/images/2135.png" class="rounded float-start m-2" alt="..." style="width: 150px;">
                    <h4>qora mushuk</h4>
                </div>
            </div>

            <div class="col-4">
                <div class="d-flex flex-column align-items-center">
                    <img src="@/assets/2bolim/images/2136.jpg" class="rounded float-start m-2" alt="..." style="width: 150px;">
                    <h4>ko‘k parda</h4>
                </div>
            </div>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab24View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab26View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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