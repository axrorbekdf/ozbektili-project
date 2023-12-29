<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">O’ylang va topib.</h3>
            

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab21View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab23View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
            <div class="col-12 col-md-12 d-flex align-items-between">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">1. Biz maktabdan</h4>
                <input type="text" class="d-inline-block form-control" style="width: 70px;" maxlength="1" size="1">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">tozaladim.</h4>
            </div>

            <div class="col-12 col-md-12 d-flex align-items-center">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">2. Ular kino</h4>
                <input type="text" class="d-inline-block form-control" style="width: 70px;" maxlength="1" size="1">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">o‘qidi.</h4>
            </div>

            <div class="col-12 col-md-12 d-flex align-items-center">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">3. Men xonani</h4>
                <input type="text" class="d-inline-block form-control" style="width: 70px;" maxlength="1" size="1">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">keldik.</h4>
            </div>

            <div class="col-12 col-md-12 d-flex align-items-center">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">4. Siz musiqa</h4>
                <input type="text" class="d-inline-block form-control" style="width: 70px;" maxlength="1" size="1">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">ko‘rdilar.</h4>
            </div>

            <div class="col-12 col-md-12 d-flex align-items-center">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">5. U gazetani</h4>
                <input type="text" class="d-inline-block form-control" style="width: 70px;" maxlength="1" size="1">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">o‘ylading?</h4>
            </div>

            <div class="col-12 col-md-12 d-flex align-items-center">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">6. Sen nimani</h4>
                <input type="text" class="d-inline-block form-control" style="width: 70px;" maxlength="1" size="1">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">bordim.</h4>
            </div>

            <div class="col-12 col-md-12 d-flex align-items-center">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">7. Men uyga</h4>
                <input type="text" class="d-inline-block form-control" style="width: 70px;" maxlength="1" size="1">
                <h4 class="mx-4 my-0" :class="{'text-decoration-line-through':false}">tingladingiz.</h4>
            </div>


            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab21View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab23View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
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